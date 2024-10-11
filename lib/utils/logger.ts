import path from 'path'

type LogLevel = 'trace' | 'debug' | 'info' | 'success' | 'warn' | 'error' | 'fatal'
type LogArgument = string | number | boolean | object | null | undefined

class Logger {
  private static instance: Logger
  private logLevel: LogLevel = 'info'

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }

  setLogLevel(level: LogLevel): void {
    this.logLevel = level
  }

  private log(level: LogLevel, message: string, ...args: LogArgument[]): void {
    if (!this.shouldLog(level)) return

    const timestamp = this.getFormattedTimestamp()
    const icon = this.getIcon(level)
    const coloredLevel = this.getColoredLevel(level)

    const callerInfo = this.getCallerInfo(new Error().stack)

    console.log('-'.repeat(process.stdout.columns || 80))
    console.log(`${icon}  ${coloredLevel} ${message}`)

    if (callerInfo) {
      const [file, line, column] = callerInfo.split(':')
      console.log(`   > ${file}:${line}:${column} - ${timestamp}`)
    }

    if (args.length > 0) {
      console.log('   >')
      args.forEach((arg, index) => {
        const formattedArg = typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        console.log(`   ${index === args.length - 1 ? '└' : '│'} ${formattedArg}`)
      })
    }

    if (level === 'error' || level === 'fatal') {
      console.log('   >')
      console.log(`   └ ${args[0] instanceof Error ? (args[0] as Error).stack : ''}`)
    }
  }

  private getFormattedTimestamp(): string {
    const now = new Date()
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now
      .getSeconds()
      .toString()
      .padStart(2, '0')}.${now.getMilliseconds().toString().padStart(3, '0')}`
  }

  private getCallerInfo(stackTrace: string | undefined): string | null {
    if (!stackTrace) return null
    const callerLine = stackTrace.split('\n')[3]
    if (!callerLine) return null
    const match = callerLine.match(/\((.+):(\d+):(\d+)\)/)
    if (!match) return null
    const [, filePath, line, column] = match
    const fileName = path.basename(filePath)
    return `${fileName}:${line}:${column}`
  }

  private shouldLog(level: LogLevel): boolean {
    const levels: LogLevel[] = ['trace', 'debug', 'info', 'success', 'warn', 'error', 'fatal']
    return levels.indexOf(level) >= levels.indexOf(this.logLevel)
  }

  private getIcon(level: LogLevel): string {
    switch (level) {
      case 'trace':
        return '•'
      case 'debug':
        return 'ℹ'
      case 'info':
        return 'ℹ'
      case 'success':
        return '✔'
      case 'warn':
        return '⚠'
      case 'error':
        return '✖'
      case 'fatal':
        return '☠'
    }
  }

  private getColoredLevel(level: LogLevel): string {
    const upperLevel = level.toUpperCase().padEnd(7)
    return upperLevel // No colors in this version
  }

  trace(message: string, ...args: LogArgument[]): void {
    this.log('trace', message, ...args)
  }

  debug(message: string, ...args: LogArgument[]): void {
    this.log('debug', message, ...args)
  }

  info(message: string, ...args: LogArgument[]): void {
    this.log('info', message, ...args)
  }

  success(message: string, ...args: LogArgument[]): void {
    this.log('success', message, ...args)
  }

  warn(message: string, ...args: LogArgument[]): void {
    this.log('warn', message, ...args)
  }

  error(message: string, ...args: LogArgument[]): void {
    this.log('error', message, ...args)
  }

  fatal(message: string, ...args: LogArgument[]): void {
    this.log('fatal', message, ...args)
  }
}

export const logger = Logger.getInstance()

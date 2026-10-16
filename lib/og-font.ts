import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export async function loadInterBoldFont() {
  return readFile(join(process.cwd(), 'app/fonts/Inter-Bold.ttf'))
}

import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { user, pass } = await request.json()

  // Check credentials against environment variables
  if (user === process.env.NEXT_PUBLIC_USER_NAME && pass === process.env.NEXT_PUBLIC_USER_PASS) {
    // Set an authenticated cookie if valid
    cookies().set({
      name: 'auth',
      value: 'authenticated',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 // 1 day
    })
    return NextResponse.json({ message: 'Login successful' })
  }

  return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
}

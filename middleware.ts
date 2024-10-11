import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('auth')

  // Check if the 'auth' cookie is set to 'authenticated'
  if (authCookie?.value === 'authenticated') {
    return NextResponse.next()
  }

  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL('/login', request.url))
}

// Define which routes to protect with middleware
export const config = {
  matcher: ['/dashboard']
}

import { NextRequest, NextResponse } from 'next/server'
import { verifyPortalToken } from '@/lib/auth'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Admin routes — protected by Supabase session (handled in layout)
  // We just pass through and let server components check auth
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    // Admin auth checked in server layout
    return NextResponse.next()
  }

  // Portal routes — protected by portal JWT cookie
  if (pathname.startsWith('/portal/')) {
    const token = request.cookies.get('portal_session')?.value
    if (!token) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    const session = await verifyPortalToken(token)
    if (!session) {
      const response = NextResponse.redirect(new URL('/', request.url))
      response.cookies.delete('portal_session')
      return response
    }

    // Ensure the reservation code in the URL matches the token
    const urlCode = pathname.split('/')[2]
    if (urlCode && urlCode !== session.reservationCode) {
      return NextResponse.redirect(
        new URL(`/portal/${session.reservationCode}`, request.url)
      )
    }

    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/portal/:path*', '/admin/:path*'],
}

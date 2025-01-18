import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
  if (
    !req.auth &&
    req.nextUrl.pathname !== '/' &&
    !req.nextUrl.pathname.startsWith('/sign-in') &&
    !req.nextUrl.pathname.startsWith('/terms') &&
    !req.nextUrl.pathname.startsWith('/privacy')
  ) {
    const newUrl = new URL('/sign-in', req.url);
    return NextResponse.rewrite(newUrl);
  }
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

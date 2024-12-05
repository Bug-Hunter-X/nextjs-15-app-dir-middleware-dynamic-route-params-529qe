//middlewareSolution.js
import { NextResponse } from 'next/server'

export function middleware(req) {
  const { pathname } = req.nextUrl
  const id = pathname.split('/product/')[1]
  if (!id) {
      return NextResponse.next()  //Handle missing or malformed id
  }

  //Process 'id' safely here
  if (id === 'invalid'){ 
    return new Response('Invalid Product ID', {status: 400})
  }
  
  return NextResponse.next() // Or perform other middleware actions
}

export const config = {
  matcher: ['/product/:path*'], // Match your specific dynamic route
};

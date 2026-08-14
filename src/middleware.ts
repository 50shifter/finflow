/**
 * Security Middleware — FinFlow (3001)
 * Финансовые данные требуют усиленной защиты.
 * Uses @shared/middleware-helpers — callback-based abstraction.
 */

import { auth } from "@/lib/auth";
import { createAuthSiteMiddleware } from '@shared/middleware-helpers';
import type { NextRequest } from 'next/server';

// Callback-обёртка для авторизованного сайта: security + rate limiting login + protected routes
const handler = createAuthSiteMiddleware({
  protectedPaths: ['/dashboard', '/transactions', '/goals', '/categories'],
  signInUrl: '/auth/signin',
  redirectAuthFrom: ['/auth/signin', '/auth/signup'],
  redirectAuthTo: '/dashboard',
  authRateLimitPaths: ['/api/auth/', '/auth/signin', '/auth/signup'],
});

export default async function middleware(request: NextRequest) {
  const session = await auth();
  return handler(request, { user: session?.user || null });
}

export const config = {
  matcher: ["/dashboard/:path*", "/transactions/:path*", "/goals/:path*", 
            "/categories/:path*", "/auth/signin", "/auth/signup"],
};
import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
    publicRoutes: ['/'],
})

export const config = {
    // matcher: ['/((?!.*\\..*|_next).*)'],
    matcher: ['/((?!api|_next|sign|favicon.ico).*)', '/dashboard', '/dashboard/(.*)'],
}

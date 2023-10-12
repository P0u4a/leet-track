import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
    publicRoutes: ['/', '/terms', '/privacy', '/api/webhooks'],
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

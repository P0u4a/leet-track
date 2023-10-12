import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
    publicRoutes: [
        '/',
        '/terms',
        '/privacy',
        '/api/webhooks',
        '/api/add-entry',
    ],
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

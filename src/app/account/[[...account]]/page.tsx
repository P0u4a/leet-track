import { UserProfile } from '@clerk/nextjs';

export default function Account() {
    return (
        <div className="flex justify-center py-20">
            <UserProfile
                appearance={{
                    variables: {
                        colorPrimary: '#0a0a0a',
                    },
                    elements: {
                        card: 'shadow-none',
                    },
                }}
            />
        </div>
    );
}

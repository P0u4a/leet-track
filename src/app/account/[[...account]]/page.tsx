import { UserProfile } from '@clerk/nextjs';

export default function Account() {
    return (
        <div className="flex justify-center items-center">
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

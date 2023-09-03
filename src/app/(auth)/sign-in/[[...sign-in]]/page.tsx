import { SignIn } from '@clerk/nextjs';

export default function Login() {
    return (
        <div className="flex justify-center py-24">
            <SignIn
                appearance={{
                    variables: {
                        colorPrimary: '#0a0a0a',
                    },
                }}
            />
        </div>
    );
}

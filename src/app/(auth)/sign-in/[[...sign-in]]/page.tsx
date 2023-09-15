import { SignIn } from '@clerk/nextjs';

export default function Login() {
    return (
        <div className="flex justify-center py-12">
            <SignIn
                appearance={{
                    variables: {
                        colorPrimary: '#0a0a0a',
                    },
                    elements: {
                        card: 'shadow-md rounded-md border-stone-200',
                    },
                }}
            />
        </div>
    );
}

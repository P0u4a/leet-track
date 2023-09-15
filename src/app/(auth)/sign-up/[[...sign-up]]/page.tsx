import { SignUp } from '@clerk/nextjs';

export default function Register() {
    return (
        <div className="flex justify-center py-12">
            <SignUp
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

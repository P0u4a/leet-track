import { Toaster } from 'react-hot-toast';

export default function Toast() {
    return (
        <Toaster
            toastOptions={{
                style: {
                    border: '1px solid #f3f4f6',
                    borderRadius: '0.5rem',
                },
            }}
        />
    );
}

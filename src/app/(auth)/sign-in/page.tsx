import { signIn } from '@/lib/auth';
import { GithubIcon } from 'lucide-react';

export default function SignIn() {
  return (
    <form
      className="flex gap-2 justify-center items-center pt-20 w-full"
      action={async () => {
        'use server';
        await signIn('github', { redirectTo: '/dashboard' });
      }}
    >
      <div className="flex flex-col gap-10 p-20 border border-neutral-100 rounded-lg justify-center items-center bg-background shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">
        <h2 className="text-2xl font-semibold">Sign In</h2>

        <div className="flex flex-row items-center p-2 rounded-md bg-primary">
          <GithubIcon className="mr-2 h-4 w-4" />
          <button type="submit">Sign in with GitHub</button>
        </div>
      </div>
    </form>
  );
}

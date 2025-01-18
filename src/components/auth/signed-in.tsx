import { auth } from '@/lib/auth';

export default async function SignedIn({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return session?.user ? <>{children}</> : null;
}

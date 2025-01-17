import { auth } from '@/lib/auth';

export default async function SignedOut({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return session ? null : <>{children}</>;
}

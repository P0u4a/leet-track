import { auth, signOut } from '@/lib/auth';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { LogOut, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { db } from '@/db';
import {
  accounts,
  questions,
  sessions,
  tagAllocations,
  users,
} from '@/db/schema';
import { eq, inArray } from 'drizzle-orm';

export default async function Profile() {
  const session = await auth();
  if (!session?.user) return;

  const deleteAccount = async () => {
    'use server';
    const session = await auth();
    if (!session?.user?.id) return;

    try {
      // get questionIds to be deleted
      const qids = await db
        .select({ questionId: questions.id })
        .from(questions)
        .where(eq(questions.userId, session?.user?.id!));
      // Use questionIds to delete their tag allocations
      if (qids.length > 0) {
        await db.delete(tagAllocations).where(
          inArray(
            tagAllocations.questionId,
            qids.map((qid) => qid.questionId)
          )
        );
      }
      // Delete the rest
      await db
        .delete(questions)
        .where(eq(questions.userId, session?.user?.id!));

      // Delete user
      await db.delete(users).where(eq(users.id, session?.user?.id!));
      await db.delete(accounts).where(eq(accounts.userId, session?.user?.id!));
      await db.delete(sessions).where(eq(sessions.userId, session?.user?.id!));
    } catch (err) {
      return new Error('Internal Error');
    }

    await signOut({ redirectTo: '/' });
  };
  return (
    <div className="flex flex-col gap-8 p-20 border border-neutral-200 rounded-md bg-white">
      <h1 className="text-3xl font-semibold">Profile</h1>
      <div className="flex flex-row gap-2 items-center">
        <Avatar className="w-24 h-24">
          <AvatarImage
            className="rounded-full"
            //@ts-ignore
            src={session?.user?.image}
            //@ts-ignore
            alt={session?.user?.name[0]}
          />
          {/* @ts-ignore */}
          <AvatarFallback>{session.user?.name[0]}</AvatarFallback>
        </Avatar>
        <Input readOnly value={session.user.name ?? 'null'} />
      </div>
      <div className="flex flex-row gap-2 items-center">
        <form
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}
        >
          <Button
            variant={'secondary'}
            type="submit"
            className="flex flex-row items-center gap-5"
          >
            <LogOut />
            <span className="font-semibold">Sign out</span>
          </Button>
        </form>
        <form action={deleteAccount}>
          <Button
            variant={'destructive'}
            type="submit"
            className="flex flex-row items-center gap-5"
          >
            <Trash />
            <span className="font-semibold">Delete Account</span>
          </Button>
        </form>
      </div>
    </div>
  );
}

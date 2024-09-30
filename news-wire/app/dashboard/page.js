'use client';
import AddFeedForm from '@/components/AddFeedForm/AddFeedForm';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // If no session and status is "unauthenticated", redirect to login page
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login'); // Redirect to login page if not authenticated
    }
  }, [status, router]);

  // Optionally display loading state while checking session
  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      {/* You can display user info here */}
      <p>Logged in as: {session?.user?.email}</p>
      <AddFeedForm />
    </div>
  );
}

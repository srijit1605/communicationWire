'use client';
import styles from "@/app/page.module.css";
import AddFeedForm from '@/components/AddFeedForm/AddFeedForm';
import Feedlist from "@/components/Feedlist/Feedlist";
import ProfileDropdownMenu from '@/components/ProfileDropdownMenu/ProfileDropdownMenu';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);
  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.main}>
      <div style={{position: 'absolute', top: '250px', right: '40px', filter: 'drop-shadow(2px 2px 2px #666)'}}><ProfileDropdownMenu/></div>
      <h1>Welcome to the Dashboard</h1>
      <p>Logged in as: {session?.user?.email}</p>
      <div>
        <p>New features coming up. Stay tuned.</p>
      <Feedlist/>
      <AddFeedForm />
      </div>
    </div>
  );
}

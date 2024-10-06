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

  const admin = 'srijit16thmay@gmail.com'

  return (
    <div className={styles.main}>
      <div style={{position: 'absolute', top: '250px', right: '40px', filter: 'drop-shadow(2px 2px 2px #666)'}}></div>
      <h1>Welcome {session?.user?.email == admin ? 'ADMIN' : null}</h1>
      <ProfileDropdownMenu/>
      
      <div>
      <Feedlist/>
      {session?.user?.email == admin ? <AddFeedForm /> : null}
      </div>
    </div>
  );
}

'use client';
import styles from "@/app/page.module.css";
import AddFeedForm from '@/components/dashboard/AddFeedForm/AddFeedForm';
import DashboardNav from "@/components/dashboard/DashboardNav/DashboardNav";
import Feedlist from "@/components/dashboard/Feedlist/Feedlist";
import ProfileDropdownMenu from '@/components/ProfileDropdownMenu/ProfileDropdownMenu';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [option, setOption] = useState('feed')
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  const admin = 'srijit16thmay@gmail.com'
  const dashboardOptions = ['feed', 'ml']

  return (
    <div className={styles.main}>
      <DashboardNav dashboardOptions={dashboardOptions} setOption={setOption}/>
      <h1>Welcome {session?.user?.email == admin ? 'ADMIN' : null}</h1>
      <ProfileDropdownMenu/>
      {option == 'feed' ? <div>
      <Feedlist/>
      {session?.user?.email == admin ? <AddFeedForm /> : null}
      </div>: <div>ML options are being built</div>}
    </div>
  );
}

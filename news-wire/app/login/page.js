"use client";

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const page = () => {
  const { data: session, status } = useSession(); // Add status to check loading state
  const router = useRouter();

  // Redirect if already logged in
  useEffect(() => {
    if (status === "authenticated") {
      router.push('/dashboard'); // Redirect after login
    }
  }, [status, router]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login to Your Account</h2>
      <div style={{ margin: '20px 0' }}>
        <button
          onClick={() => signIn('google')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4285F4',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Sign in with Google
        </button>
      </div>
      <div style={{ margin: '20px 0' }}>
        <button
          onClick={() => signIn('github')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#333',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}

export default page
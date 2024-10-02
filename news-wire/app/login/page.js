'use client';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (session) {
      router.push('/dashboard'); // Redirect after login
    }
  }, [session, router]);

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

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';

export default function SignInPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [signingIn, setSigningIn] = useState(false);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });
        const userInfo = await res.json();
        localStorage.setItem('fd-user', JSON.stringify({
          name: userInfo.name,
          email: userInfo.email,
          picture: userInfo.picture,
        }));
        navigate('/');
      } catch {
        console.error('Failed to fetch user info');
      }
    },
    onError: () => console.error('Google Login Failed'),
  });

  const handleEmailSignin = (e) => {
    e.preventDefault();
    setSigningIn(true);
    setTimeout(() => {
      navigate('/');
    }, 1200);
  };

  return (
    <div className="signin-body">
      {/* Back link */}
      <Link
        to="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: 'var(--muted-c)',
          fontSize: '.875rem',
          fontWeight: 500,
          textDecoration: 'none',
          marginBottom: '28px',
          transition: 'color .15s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = '#6366f1')}
        onMouseOut={(e) => (e.currentTarget.style.color = 'var(--muted-c)')}
      >
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to app
      </Link>

      <div className="signin-card">
        {/* Logo + heading */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', marginBottom: '20px' }}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="#6366f1" strokeWidth="2.5" />
              <path d="M16 9v7l4 4" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--body-text)' }}>Focusdoro</span>
          </Link>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--body-text)', marginBottom: '6px' }}>
            Welcome back
          </h1>
          <p style={{ fontSize: '.875rem', color: 'var(--muted-c)' }}>
            Sign in to sync your settings across devices
          </p>
        </div>

        {/* OAuth buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          <button className="oauth-btn oauth-google" onClick={() => googleLogin()}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Continue with Google
          </button>

          <button className="oauth-btn oauth-github">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Continue with GitHub
          </button>
        </div>

        {/* Divider */}
        <div className="signin-divider" style={{ marginBottom: '20px' }}>or continue with email</div>

        {/* Email form */}
        <form onSubmit={handleEmailSignin} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div className="signin-field">
            <label>Email address</label>
            <input type="email" placeholder="you@example.com" required autoComplete="email" />
          </div>

          <div className="signin-field">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <label>Password</label>
              <a
                href="#"
                style={{ fontSize: '.75rem', color: '#6366f1', textDecoration: 'none', fontWeight: 500 }}
                onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
              >
                Forgot password?
              </a>
            </div>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                required
                autoComplete="current-password"
                style={{ width: '100%', boxSizing: 'border-box', paddingRight: '42px' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                title="Show/hide password"
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--muted-c)',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {showPassword ? (
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ marginTop: '4px', opacity: signingIn ? 0.7 : 1 }}
            disabled={signingIn}
          >
            {signingIn ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        {/* Sign up link */}
        <p style={{ textAlign: 'center', fontSize: '.8125rem', color: 'var(--muted-c)', marginTop: '20px' }}>
          Don't have an account?{' '}
          <a
            href="#"
            style={{ color: '#6366f1', fontWeight: 600, textDecoration: 'none' }}
            onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            Sign up free
          </a>
        </p>
      </div>

      {/* Footer note */}
      <p style={{ marginTop: '20px', fontSize: '.75rem', color: 'var(--muted-c)', textAlign: 'center' }}>
        By signing in you agree to our{' '}
        <a href="#" style={{ color: 'var(--label-c)', textDecoration: 'underline' }}>Terms</a> and{' '}
        <a href="#" style={{ color: 'var(--label-c)', textDecoration: 'underline' }}>Privacy Policy</a>.
      </p>
    </div>
  );
}

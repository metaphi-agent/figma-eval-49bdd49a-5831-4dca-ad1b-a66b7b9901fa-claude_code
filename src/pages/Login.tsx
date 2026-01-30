import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Checkbox } from '../components/ui';

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const EyeOffIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('example@gmail.com');
  const [password, setPassword] = useState('password');

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left - Form */}
      <div className="w-1/2 flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src="./assets/icons/logo.svg" alt="Base" className="w-16 h-16" />
          </div>

          <h1 className="text-2xl font-bold text-text text-center mb-8">Log in</h1>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button className="flex items-center justify-center gap-2 h-12 bg-surface border border-border-medium rounded-[10px] text-sm font-semibold text-text hover:bg-background-alt transition-colors">
              <GoogleIcon /> Google
            </button>
            <button className="flex items-center justify-center gap-2 h-12 bg-surface border border-border-medium rounded-[10px] text-sm font-semibold text-text hover:bg-background-alt transition-colors">
              <FacebookIcon /> Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-border-medium" />
            <span className="text-sm text-text-muted">Or</span>
            <div className="flex-1 h-px bg-border-medium" />
          </div>

          {/* Form */}
          <form className="space-y-6">
            <Input
              label="Email Address"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              label="Password"
              type={showPassword ? 'text' : 'password'}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              rightIcon={
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                  <EyeOffIcon />
                </button>
              }
            />

            <div className="flex items-center justify-between">
              <Checkbox label="Remember me" />
              <Link to="/recover" className="text-sm text-primary hover:underline">
                Reset Password?
              </Link>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Log in
            </Button>
          </form>

          <p className="text-center text-sm text-text-muted mt-6">
            Don't have account yet?{' '}
            <Link to="/signup" className="text-primary hover:underline">
              New Account
            </Link>
          </p>
        </div>
      </div>

      {/* Right - Illustration */}
      <div className="w-1/2 bg-surface flex items-center justify-center p-12">
        <div className="max-w-lg">
          {/* Clock */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full border-4 border-orange/30 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" stroke="#FF9066" strokeWidth="2" fill="none"/>
                <path d="M20 10V20L26 26" stroke="#FF9066" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          {/* Illustration placeholder */}
          <div className="relative">
            <svg className="w-full h-80" viewBox="0 0 400 300" fill="none">
              {/* Desk */}
              <rect x="100" y="180" width="200" height="10" rx="2" fill="#F4A261"/>
              <rect x="90" y="190" width="220" height="5" rx="1" fill="#E76F51"/>
              {/* Monitor */}
              <rect x="180" y="100" width="80" height="60" rx="4" fill="#2A2D3E"/>
              <rect x="185" y="105" width="70" height="45" rx="2" fill="#5EC3FF"/>
              <rect x="210" y="160" width="20" height="20" fill="#2A2D3E"/>
              {/* Laptop */}
              <rect x="120" y="140" width="60" height="40" rx="2" fill="#5EC3FF"/>
              <rect x="110" y="180" width="80" height="5" rx="1" fill="#2A2D3E"/>
              {/* Person */}
              <circle cx="200" cy="130" r="20" fill="#F4A261"/>
              <rect x="185" y="150" width="30" height="40" rx="4" fill="#605BFF"/>
              <rect x="175" y="190" width="15" height="50" fill="#2A2D3E"/>
              <rect x="210" y="190" width="15" height="50" fill="#2A2D3E"/>
              {/* Chair */}
              <rect x="230" y="200" width="50" height="40" rx="4" fill="#FCBE2D"/>
              {/* Plant */}
              <rect x="320" y="220" width="30" height="40" rx="2" fill="#E76F51"/>
              <ellipse cx="335" cy="200" rx="20" ry="25" fill="#00B69B"/>
              {/* CPU */}
              <rect x="70" y="200" width="30" height="50" rx="4" fill="#5EC3FF"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

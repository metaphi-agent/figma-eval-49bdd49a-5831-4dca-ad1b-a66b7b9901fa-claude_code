import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Checkbox } from '../components/ui';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password, remember });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="w-16 h-16 rounded-full bg-[#5B5FFF] flex items-center justify-center mb-8">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-[#202224] mb-8">Log in</h1>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Button variant="social" className="justify-center">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </Button>
            <Button variant="social" className="justify-center">
              <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </Button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E8EAED]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-[#8B8D97]">Or</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email Address"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showPasswordToggle
              required
            />

            <div className="flex items-center justify-between">
              <Checkbox
                label="Remember me"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <Link to="/recover" className="text-sm text-[#5B5FFF] hover:underline">
                Reset Password?
              </Link>
            </div>

            <Button type="submit" variant="primary" fullWidth className="mt-6">
              Log in
            </Button>
          </form>

          <p className="text-center text-sm text-[#8B8D97] mt-6">
            Don't have account yet?{' '}
            <Link to="/signup" className="text-[#5B5FFF] hover:underline font-medium">
              New Account
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br from-[#F0F1FF] to-[#E5E7FF] p-8">
        <div className="w-full max-w-lg">
          {/* Illustration placeholder */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-20 w-16 h-16 rounded-full bg-[#FF5B5B] opacity-80"></div>
            <div className="absolute top-40 left-10 w-24 h-24 rounded-full bg-[#FFA043] opacity-60"></div>

            {/* Main illustration representation */}
            <div className="relative z-10 text-center">
              <div className="w-64 h-64 mx-auto mb-8 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
              <div className="text-[#5B5FFF] text-lg font-medium">
                Welcome back to your workspace
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

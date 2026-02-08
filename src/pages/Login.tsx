import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Checkbox, Icons } from '../components/ui';

export function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Form */}
      <div className="w-[480px] p-12 flex flex-col justify-center">
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12C4 12 6 8 12 8M12 8C18 8 20 12 20 12M12 8V4M8 6L12 8L16 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-text text-center mb-8">Log in</h1>

        <div className="flex gap-4 mb-6">
          <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-border-medium rounded-[var(--radius-md)] hover:bg-background-alt transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.171 8.368h-.67v-.035H10v3.333h4.709A5 5 0 1 1 10 5a4.967 4.967 0 0 1 3.517 1.45l2.357-2.358A8.3 8.3 0 0 0 10 1.667a8.333 8.333 0 1 0 8.171 6.701z" fill="#FFC107"/>
              <path d="M2.627 6.121 5.365 8.13A5 5 0 0 1 10 5a4.967 4.967 0 0 1 3.517 1.45l2.357-2.358A8.3 8.3 0 0 0 10 1.667a8.329 8.329 0 0 0-7.373 4.454z" fill="#FF3D00"/>
              <path d="M10 18.333a8.294 8.294 0 0 0 5.787-2.329l-2.67-2.259A4.96 4.96 0 0 1 10 15a5.001 5.001 0 0 1-4.701-3.32l-2.72 2.096A8.327 8.327 0 0 0 10 18.333z" fill="#4CAF50"/>
              <path d="M18.171 8.368h-.67v-.035H10v3.333h4.709a5.017 5.017 0 0 1-1.706 2.322l2.671 2.259c-.189.171 2.826-2.062 2.826-6.247 0-.559-.057-1.104-.158-1.632z" fill="#1976D2"/>
            </svg>
            <span className="text-sm font-medium text-text">Google</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-border-medium rounded-[var(--radius-md)] hover:bg-background-alt transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" fill="#1877F2"/>
            </svg>
            <span className="text-sm font-medium text-text">Facebook</span>
          </button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-border-medium" />
          <span className="text-sm text-text-muted">Or</span>
          <div className="flex-1 h-px bg-border-medium" />
        </div>

        <div className="space-y-4 mb-6">
          <Input label="Email Address" type="email" placeholder="example@gmail.com" />
          <Input
            label="Password"
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            iconRight={
              <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? Icons.eye : Icons.eyeOff}
              </button>
            }
          />
        </div>

        <div className="flex items-center justify-between mb-6">
          <Checkbox label="Remember me" />
          <Link to="/recover" className="text-sm text-primary hover:underline">Reset Password?</Link>
        </div>

        <Button className="w-full mb-6">Log in</Button>

        <p className="text-center text-sm text-text-muted">
          Don't have account yet? <Link to="/signup" className="text-primary hover:underline">New Account</Link>
        </p>
      </div>

      {/* Right Panel - Illustration */}
      <div className="flex-1 bg-background-alt flex items-center justify-center p-12">
        <div className="max-w-lg">
          <svg className="w-full h-auto" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="50" r="40" stroke="#D11A2A" strokeWidth="3" fill="none"/>
            <path d="M200 30V50L215 42" stroke="#D11A2A" strokeWidth="3" strokeLinecap="round"/>
            <rect x="100" y="120" width="200" height="150" rx="10" fill="#605BFF" fillOpacity="0.1"/>
            <rect x="120" y="140" width="80" height="60" rx="5" fill="#5EC3FF"/>
            <rect x="220" y="140" width="60" height="100" rx="5" fill="#FF9066"/>
            <circle cx="160" cy="200" r="30" fill="#FCBE2D"/>
            <rect x="100" y="280" width="200" height="10" rx="5" fill="#E0E0E0"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

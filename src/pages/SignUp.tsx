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

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: 'Jiangyu',
    email: 'example@gmail.com',
    username: 'johnkevine4362',
    password: 'password',
  });

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left - Form */}
      <div className="w-1/2 flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src="./assets/icons/logo.svg" alt="Base" className="w-16 h-16" />
          </div>

          <h1 className="text-2xl font-bold text-text text-center mb-6">Sign Up</h1>

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
          <form className="space-y-4">
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange('fullName')}
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange('email')}
            />

            <Input
              label="Username"
              type="text"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange('username')}
            />

            <Input
              label="Password"
              type={showPassword ? 'text' : 'password'}
              placeholder="********"
              value={formData.password}
              onChange={handleChange('password')}
              rightIcon={
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                  <EyeOffIcon />
                </button>
              }
            />

            <div className="flex items-start gap-2">
              <Checkbox />
              <span className="text-sm text-text-muted">
                By creating an account you agree to the{' '}
                <a href="#" className="text-primary hover:underline">terms of use</a>
                {' '}and our{' '}
                <a href="#" className="text-primary hover:underline">privacy policy</a>.
              </span>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Create account
            </Button>
          </form>

          <p className="text-center text-sm text-text-muted mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>

      {/* Right - Illustration */}
      <div className="w-1/2 bg-surface flex items-center justify-center p-12">
        <div className="max-w-lg relative">
          {/* Background blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-bg/30 rounded-full blur-3xl" />
          {/* Illustration placeholder */}
          <div className="relative">
            <svg className="w-full h-80" viewBox="0 0 400 300" fill="none">
              {/* Desk */}
              <rect x="80" y="200" width="240" height="8" rx="2" fill="#605BFF"/>
              {/* Person on chair */}
              <rect x="200" y="160" width="80" height="50" rx="4" fill="#FCBE2D"/>
              <circle cx="240" cy="120" r="25" fill="#F4A261"/>
              <rect x="220" y="145" width="40" height="30" rx="4" fill="#605BFF"/>
              {/* Laptop */}
              <rect x="140" y="150" width="70" height="50" rx="4" fill="#FD5C9F"/>
              <rect x="145" y="155" width="60" height="35" rx="2" fill="#FFE5EE"/>
              {/* Drawer */}
              <rect x="60" y="140" width="40" height="70" rx="4" fill="#FCBE2D"/>
              <rect x="65" y="150" width="30" height="10" rx="2" fill="#E8A825"/>
              <rect x="65" y="170" width="30" height="10" rx="2" fill="#E8A825"/>
              <rect x="65" y="190" width="30" height="10" rx="2" fill="#E8A825"/>
              {/* Lamp */}
              <rect x="75" y="90" width="10" height="50" fill="#E8A825"/>
              <ellipse cx="80" cy="80" rx="25" ry="15" fill="#5EC3FF"/>
              {/* Plant */}
              <rect x="310" y="170" width="35" height="40" rx="2" fill="#E76F51"/>
              <ellipse cx="327" cy="150" rx="25" ry="30" fill="#00B69B"/>
              {/* Books */}
              <rect x="100" y="115" width="20" height="25" fill="#FCBE2D"/>
              <rect x="105" y="110" width="20" height="25" fill="#00B69B"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

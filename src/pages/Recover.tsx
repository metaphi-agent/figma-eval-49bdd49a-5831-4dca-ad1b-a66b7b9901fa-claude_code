import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '../components/ui';

export default function Recover() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-surface rounded-[20px] p-10 shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src="./assets/icons/logo.svg" alt="Base" className="w-16 h-16" />
        </div>

        <h1 className="text-2xl font-bold text-text text-center mb-8">Recover</h1>

        {/* Form */}
        <form className="space-y-6">
          <Input
            label="Email Address"
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button type="submit" className="w-full" size="lg">
            Reset Your Password
          </Button>
        </form>

        <p className="text-center text-sm text-text-muted mt-6">
          Remember your password?{' '}
          <Link to="/login" className="text-primary hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

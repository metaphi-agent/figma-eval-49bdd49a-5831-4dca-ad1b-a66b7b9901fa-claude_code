import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '../components/ui';

export default function Confirm() {
  const [code, setCode] = useState(['', '', '', '', '', '']);

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-surface rounded-[20px] p-10 shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src="./assets/icons/logo.svg" alt="Base" className="w-16 h-16" />
        </div>

        <h1 className="text-2xl font-bold text-text text-center mb-4">Confirm</h1>
        <p className="text-sm text-text-muted text-center mb-8">
          We've sent a confirmation code to your email. Please enter it below.
        </p>

        {/* Code Input */}
        <form className="space-y-6">
          <div className="flex justify-center gap-3">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                className="w-12 h-14 text-center text-xl font-bold bg-background-alt rounded-[10px] border-none focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            ))}
          </div>

          <Button type="submit" className="w-full" size="lg">
            Confirm
          </Button>
        </form>

        <p className="text-center text-sm text-text-muted mt-6">
          Didn't receive the code?{' '}
          <button className="text-primary hover:underline">
            Resend
          </button>
        </p>

        <p className="text-center text-sm text-text-muted mt-4">
          <Link to="/login" className="text-primary hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
}

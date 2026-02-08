import { Link } from 'react-router-dom';
import { Button, Input } from '../components/ui';

export function Recover() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-[400px] bg-white p-8 rounded-[var(--radius-xl)] shadow-lg">
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12C4 12 6 8 12 8M12 8C18 8 20 12 20 12M12 8V4M8 6L12 8L16 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-text text-center mb-2">Recover Password</h1>
        <p className="text-sm text-text-muted text-center mb-8">
          Enter your email address and we'll send you a link to reset your password.
        </p>

        <div className="space-y-4 mb-6">
          <Input label="Email Address" type="email" placeholder="example@gmail.com" />
        </div>

        <Button className="w-full mb-6">Send Recovery Link</Button>

        <p className="text-center text-sm text-text-muted">
          Remember your password? <Link to="/login" className="text-primary hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}

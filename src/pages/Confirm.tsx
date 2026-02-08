import { Link } from 'react-router-dom';
import { Button } from '../components/ui';

export function Confirm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-[400px] bg-white p-8 rounded-[var(--radius-xl)] shadow-lg text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-green-light rounded-full flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 13L9 17L19 7" stroke="#00B69B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-text mb-2">Email Confirmed!</h1>
        <p className="text-sm text-text-muted mb-8">
          Your email has been verified successfully. You can now log in to your account.
        </p>

        <Link to="/login">
          <Button className="w-full">Go to Login</Button>
        </Link>
      </div>
    </div>
  );
}

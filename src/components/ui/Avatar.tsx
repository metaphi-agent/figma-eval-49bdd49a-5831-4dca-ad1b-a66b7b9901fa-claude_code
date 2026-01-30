import { HTMLAttributes, forwardRef } from 'react';

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'away';
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className = '', src, alt = '', size = 'md', status, ...props }, ref) => {
    const sizes = {
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-12 h-12',
      xl: 'w-16 h-16',
    };

    const statusSizes = {
      sm: 'w-2 h-2',
      md: 'w-2.5 h-2.5',
      lg: 'w-3 h-3',
      xl: 'w-4 h-4',
    };

    const statusColors = {
      online: 'bg-green',
      offline: 'bg-text-muted',
      away: 'bg-yellow',
    };

    return (
      <div ref={ref} className={`relative inline-flex ${className}`} {...props}>
        {src ? (
          <img
            src={src}
            alt={alt}
            className={`${sizes[size]} rounded-full object-cover`}
          />
        ) : (
          <div className={`${sizes[size]} rounded-full bg-primary-light flex items-center justify-center text-primary font-semibold`}>
            {alt?.charAt(0)?.toUpperCase() || '?'}
          </div>
        )}
        {status && (
          <span
            className={`absolute bottom-0 right-0 ${statusSizes[size]} ${statusColors[status]} rounded-full border-2 border-surface`}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export default Avatar;

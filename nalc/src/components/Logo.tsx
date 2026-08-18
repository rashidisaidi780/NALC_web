import logoImage from './assets/nalc_logo.png';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src={logoImage} 
        alt="NALC Enterprises Logo" 
        className="h-12 w-auto"
      />
    </div>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      {eyebrow && (
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
            dark ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-50 text-blue-700'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

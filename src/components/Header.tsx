import { ListTodo } from 'lucide-react';

export function Header() {
  return (
    <header className="relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-accent rounded-xl shadow-2xl mb-8 transform transition-all duration-500 hover:scale-[1.01] hover:shadow-primary/50">
      <div className="absolute inset-0 opacity-20">
        {/* Subtle background pattern or texture */}
        <svg className="absolute inset-0 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="grid-pattern" width="20" height="20" x="50%" y="50%" patternUnits="userSpaceOnUse">
              <path d="M0 0H20V20H0z" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)" />
        </svg>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <ListTodo className="h-16 w-16 text-white mb-4 animate-fade-in-up" />
        <h1 className="text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg animate-fade-in-up delay-100">
          Your Daily Focus
        </h1>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl animate-fade-in-up delay-200">
          Organize your tasks, boost your productivity, and conquer your day with clarity.
        </p>
      </div>
    </header>
  );
}

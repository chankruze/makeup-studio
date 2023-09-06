import { ThemeToggle } from '@/components/theme-toggle';

export default async function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <ThemeToggle />
    </div>
  );
}

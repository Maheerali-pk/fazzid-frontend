import { ThemeSelector } from "@/components/ThemeSelector";
import { TestCard } from "@/components/TestCard";

export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            Multi-Theme Demo
          </h1>
          <p className="text-lg text-foreground opacity-70">
            Switch between Light, Dark, and Glass themes to see the color system in action
          </p>
        </header>

        <div className="flex justify-center">
          <ThemeSelector />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <TestCard />
          <TestCard />
          <TestCard />
        </div>

        <div className="bg-secondary rounded-xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Theme Information</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <h3 className="font-medium text-foreground">Light Theme</h3>
              <p className="text-sm text-foreground opacity-70">
                Clean and minimal with white background and dark text
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-foreground">Dark Theme</h3>
              <p className="text-sm text-foreground opacity-70">
                Easy on the eyes with dark background and light text
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-foreground">Glass Theme</h3>
              <p className="text-sm text-foreground opacity-70">
                Modern glassmorphism with gradient background and transparency
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

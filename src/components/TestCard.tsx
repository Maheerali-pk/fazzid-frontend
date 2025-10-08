'use client';

import { useTheme } from '@/contexts/ThemeContext';

export function TestCard() {
	const { theme } = useTheme();

	return (
		<div className="max-w-md mx-auto bg-background border border-secondary rounded-xl shadow-lg p-6 space-y-4">
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-bold text-foreground">Theme Test Card</h2>
				<span className="text-sm text-foreground opacity-70">Current: {theme}</span>
			</div>

			<div className="space-y-3">
				<div className="p-3 bg-secondary rounded-lg">
					<p className="text-sm text-foreground">
						This is a secondary background area to test the theme colors.
					</p>
				</div>

				<div className="flex gap-2">
					<button className="px-4 py-2 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity">
						Primary Button
					</button>
					<button className="px-4 py-2 border border-foreground text-foreground rounded-md hover:bg-secondary transition-colors">
						Secondary Button
					</button>
				</div>

				<div className="text-sm text-foreground opacity-70">
					<p>Background: <code className="bg-secondary px-1 rounded">var(--background)</code></p>
					<p>Foreground: <code className="bg-secondary px-1 rounded">var(--foreground)</code></p>
					<p>Secondary: <code className="bg-secondary px-1 rounded">var(--secondary)</code></p>
				</div>
			</div>
		</div>
	);
}

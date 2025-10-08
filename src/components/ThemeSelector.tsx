'use client';

import { useTheme } from '@/contexts/ThemeContext';

export function ThemeSelector() {
	const { theme, setTheme } = useTheme();

	const themes = [
		{ value: 'light', label: 'Light', icon: '☀️' },
		{ value: 'dark', label: 'Dark', icon: '🌙' },
		{ value: 'glass', label: 'Glass', icon: '🔮' },
	] as const;

	return (
		<div className="flex gap-2 p-4 bg-secondary rounded-lg">
			<span className="text-sm font-medium text-foreground">Theme:</span>
			{themes.map(({ value, label, icon }) => (
				<button
					key={value}
					onClick={() => setTheme(value)}
					className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${theme === value
							? 'bg-foreground text-background'
							: 'bg-background text-foreground hover:bg-secondary'
						}`}
				>
					<span className="mr-1">{icon}</span>
					{label}
				</button>
			))}
		</div>
	);
}

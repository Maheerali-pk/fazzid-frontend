'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { GlobalContextProvider } from './GlobalContext';

type Theme = 'light' | 'dark' | 'glass';

interface ThemeContextType {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Helper function to safely get initial theme from localStorage
const getInitialTheme = (): Theme => {
	if (typeof window !== "undefined") {
		return (localStorage.getItem('theme') as Theme) || 'dark';
	}
	return 'dark';
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>(getInitialTheme());

	useEffect(() => {
		// Only access localStorage in browser environment
		if (typeof window !== "undefined") {
			setTheme((localStorage.getItem('theme') as Theme) || 'dark');
		}
	}, []);

	useEffect(() => {
		// Apply theme to document
		if (typeof window !== "undefined") {
			document.documentElement.setAttribute('data-theme', theme);
			localStorage.setItem('theme', theme);
		}
	}, [theme]);

	const value = {
		theme,
		setTheme,
	};

	return (
		<GlobalContextProvider>
			<ThemeContext.Provider value={value}>
				{children}
			</ThemeContext.Provider>
		</GlobalContextProvider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
}

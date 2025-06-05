import React, { createContext, useContext, useState, ReactNode } from 'react';

type ColorTheme = 'rose' | 'emerald' | 'indigo';

interface ThemeContextType {
  theme: {
    primary: string;
    secondary: string;
    gradient: string;
    bgGradient: string;
    darkGradient: string;
    text: string;
    lightText: string;
    veryLightText: string;
    bgLight: string;
    bgLighter: string;
    bgLightest: string;
    hover: string;
    error: string;
    errorBg: string;
    errorBorder: string;
    success: string;
    successBg: string;
    successBorder: string;
  };
  activeColorTheme: ColorTheme;
  setActiveColorTheme: (theme: ColorTheme) => void;
}

const colorThemes = {
  rose: {
    primary: "bg-rose-600 hover:bg-rose-700",
    secondary: "border-rose-600 text-rose-600 hover:bg-rose-50",
    gradient: "from-rose-600 to-pink-600",
    bgGradient: "from-rose-50 to-white",
    darkGradient: "from-rose-900 to-pink-900",
    text: "text-rose-600",
    lightText: "text-rose-100",
    veryLightText: "text-rose-200",
    bgLight: "bg-rose-100",
    bgLighter: "bg-rose-50",
    bgLightest: "bg-rose-100/50",
    hover: "hover:text-rose-600",
    error: "text-rose-600",
    errorBg: "bg-rose-50",
    errorBorder: "border-rose-300",
    success: "text-emerald-600",
    successBg: "bg-emerald-50",
    successBorder: "border-emerald-300",
  },
  emerald: {
    primary: "bg-emerald-600 hover:bg-emerald-700",
    secondary: "border-emerald-600 text-emerald-600 hover:bg-emerald-50",
    gradient: "from-emerald-600 to-teal-600",
    bgGradient: "from-emerald-50 to-white",
    darkGradient: "from-emerald-900 to-teal-900",
    text: "text-emerald-600",
    lightText: "text-emerald-100",
    veryLightText: "text-emerald-200",
    bgLight: "bg-emerald-100",
    bgLighter: "bg-emerald-50",
    bgLightest: "bg-emerald-100/50",
    hover: "hover:text-emerald-600",
    error: "text-rose-600",
    errorBg: "bg-rose-50",
    errorBorder: "border-rose-300",
    success: "text-emerald-600",
    successBg: "bg-emerald-50",
    successBorder: "border-emerald-300",
  },
  indigo: {
    primary: "bg-indigo-600 hover:bg-indigo-700",
    secondary: "border-indigo-600 text-indigo-600 hover:bg-indigo-50",
    gradient: "from-indigo-600 to-purple-600",
    bgGradient: "from-indigo-50 to-white",
    darkGradient: "from-indigo-900 to-purple-900",
    text: "text-indigo-600",
    lightText: "text-indigo-100",
    veryLightText: "text-indigo-200",
    bgLight: "bg-indigo-100",
    bgLighter: "bg-indigo-50",
    bgLightest: "bg-indigo-100/50",
    hover: "hover:text-indigo-600",
    error: "text-rose-600",
    errorBg: "bg-rose-50",
    errorBorder: "border-rose-300",
    success: "text-emerald-600",
    successBg: "bg-emerald-50",
    successBorder: "border-emerald-300",
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeColorTheme, setActiveColorTheme] = useState<ColorTheme>('rose');
  const theme = colorThemes[activeColorTheme];

  return (
    <ThemeContext.Provider value={{ theme, activeColorTheme, setActiveColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 
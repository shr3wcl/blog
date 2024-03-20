import { useEffect, useState } from "react";

const useDarkMode = () => {
    const [isDarkMode, setDarkMode] = useState<boolean>();

    const checkDarkModePreference = () => {
        if (typeof window !== "undefined") {
            const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            return prefersDarkMode;
        }
        return false; // Mặc định là light mode nếu không thể xác định được dark mode preference
    };

    useEffect(() => {
        const prefersDarkMode = checkDarkModePreference();
        setDarkMode(prefersDarkMode);
    }, []);

    const toggleDarkMode = (isCheck: boolean) => {
        localStorage.setItem("theme", isCheck ? "dark" : "light");
        setDarkMode(isCheck);
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (isDarkMode) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }
    }, [isDarkMode])

    return [isDarkMode, toggleDarkMode];
}

export default useDarkMode;

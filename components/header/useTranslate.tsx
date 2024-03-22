import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

const useTranslate = () => {
    const [isVietnamese, setVietnamese] = useState<String>();
    const t = useTranslation();

    const changeLanguage = (lng: string) => {
        t.i18n.language = lng;
    };

    const checkInitialLanguagePreference = () => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
            return storedLanguage === "vi" ? "vi" : "en"; 
        } else {
            if (typeof window !== "undefined") {
                const userLanguage = window.navigator.language;
                return userLanguage.startsWith("vi") ? "vi" : "en"; 
            }
            return "vi";
        }
    };

    useEffect(() => {
        const initialLanguage = checkInitialLanguagePreference();
        setVietnamese(initialLanguage);
    }, []);

    const toggleLanguage = (isVietnamese: String) => {
        localStorage.setItem("language", isVietnamese ? "vi" : "en");
        setVietnamese(isVietnamese);
        changeLanguage(isVietnamese ? 'vi' : 'en');
        // Redirect to the to /vi/... or /en/... based on the current
        window.location.href = `/${isVietnamese ? 'vi' : 'en'}/${window.location.pathname}`;
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (isVietnamese) {
                document.documentElement.classList.add("vi");
            } else {
                document.documentElement.classList.remove("vi");
            }
        }
    }, [isVietnamese])

    return [isVietnamese, toggleLanguage];
}

export default useTranslate;

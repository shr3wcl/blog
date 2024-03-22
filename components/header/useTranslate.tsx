import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

const useTranslate = () => {
    const [isVietnamese, setVietnamese] = useState<Boolean>();
    const t = useTranslation();

    const changeLanguage = (lng: string) => {
        t.i18n.language = lng;
    };

    const checkInitialLanguagePreference = () => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
            return storedLanguage === "vi"; 
        } else {
            if (typeof window !== "undefined") {
                const userLanguage = window.navigator.language;
                return userLanguage.startsWith("vi"); 
            }
            return true;
        }
    };

    useEffect(() => {
        const initialLanguage = checkInitialLanguagePreference() ;
        setVietnamese(initialLanguage);
    }, []);

    const toggleLanguage = (isVietnamese: Boolean) => {
        localStorage.setItem("language", isVietnamese ? "vi" : "en");
        setVietnamese(isVietnamese);
        changeLanguage(isVietnamese ? 'vi' : 'en');
        window.location.href = window.location.href.replace(isVietnamese ? "/en" : "/vi", isVietnamese ? "/vi" : "/en");
    }

    return [isVietnamese, toggleLanguage];
}

export default useTranslate;

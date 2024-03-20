import React, { useEffect, useRef, useState } from "react";

export type MappingType =
    | "pathname"
    | "url"
    | "title"
    | "og:title"
    | "issue-number"
    | "specific";

export type Theme =
    | "light"
    | "dark"
    | "preferred_color_scheme"
    | "dark_dimmed"
    | "transparent_dark";

interface ReactGiscusProps {
    repo: string;
    repoId: string;
    category: string;
    categoryId: string;
    dataMapping: MappingType;
    dataTerm?: () => string;
    issueNumber?: number;
    label?: string;
    theme: Theme;
}

const ReactGiscus: React.FC<ReactGiscusProps> = ({
    repo,
    repoId,
    category,
    categoryId,
    dataMapping,
    dataTerm,
    label,
    theme,
}) => {
    const [pending, setPending] = useState<boolean>(true);
    const reference = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scriptElement = document.createElement("script");
        scriptElement.src = "https://giscus.app/client.js";
        scriptElement.async = true;
        scriptElement.defer = true;
        scriptElement.setAttribute("data-repo", repo);
        scriptElement.setAttribute("data-repo-id", repoId);
        scriptElement.setAttribute("data-category", category);
        scriptElement.setAttribute("data-category-id", categoryId);
        scriptElement.setAttribute("data-mapping", dataMapping);
        if (dataMapping === "specific" && dataTerm) {
            scriptElement.setAttribute("data-term", dataTerm());
        }
        scriptElement.setAttribute("data-reactions-enabled", "1");
        scriptElement.setAttribute("data-emit-metadata", "0");
        scriptElement.setAttribute("data-theme", theme);
        scriptElement.setAttribute("data-lang", "en");
        scriptElement.setAttribute("cross-origin", "anonymous");
        if (label) {
            scriptElement.setAttribute("label", label);
        }
        scriptElement.onload = () => setPending(false);

        const timeout = setTimeout(() => {
            if (reference.current) {
                reference.current.appendChild(scriptElement);
            }
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };
    }, [
        repo,
        repoId,
        category,
        categoryId,
        dataMapping,
        dataTerm,
        label,
        theme,
    ]);

    return (
        <div ref={reference}>
            {pending && (
                <p className={"text-center text-blue-600"}>Loading Comments...</p>
            )}
        </div>
    );
};

export default ReactGiscus;

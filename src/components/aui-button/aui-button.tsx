import React from "react";


export interface AuiButtonProps {
    theme?: "light" | "dark" | "success" | "error" | "danger" | "allow";
    children?: string;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit";
}


export const AuiButton = ({children, className, theme = "light", ...props}: AuiButtonProps) => {

    function themeNameFalse() {
        switch (theme) {
            case "light": return "border-neutral-200 bg-white hover:bg-neutral-200 after:bg-neutral-300 text-black";
            case "error": return "border-red-600 bg-red-500 hover:bg-red-600 after:bg-red-700 text-white";
            case "danger": return "border-red-700 bg-red-600 hover:bg-red-700 after:bg-red-800 text-white";
            case "success": return "border-green-700 bg-green-600 hover:bg-green-700 after:bg-green-800 text-white";
            case "allow": return "border-green-600 bg-green-500 hover:bg-green-600 after:bg-green-700 text-white";
            case "dark": default: return "border-neutral-600 bg-neutral-500 hover:bg-neutral-600 after:bg-neutral-700 text-white";



        }
    }

    return (
        <div className={`${className} `}>
            <button className={`relative w-full h-full border-2   font-semibold px-4 py-0.5
                                after:w-[calc(100%+4px)] after:h-2  after:absolute after:-left-[2px] after:-bottom-2                         
                                active:-bottom-1.5 active:after:h-0.5 active:after:-bottom-0.5 ${themeNameFalse()}`}
                    {...props}>
                {children}
            </button>
        </div>
    )
}

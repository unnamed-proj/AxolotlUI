import React from "react";
export interface AuiButtonProps {
    theme?: "light" | "dark" | "success" | "error" | "danger" | "allow";
    children?: string;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit";
}
export declare const AuiButton: ({ children, className, theme, ...props }: AuiButtonProps) => React.JSX.Element;

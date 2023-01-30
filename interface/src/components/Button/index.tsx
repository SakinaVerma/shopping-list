import React from "react";
import { ButtonVariant } from "../../dataStructures";

type Props = {
    variant: ButtonVariant;
    children?: React.ReactNode;
    onClick?(args: any): any;
    onDoubbleClick?(args: any): any;
    disabled?: boolean;
};

export default function Button({ variant, onClick, onDoubbleClick, disabled, children }: Props) {
    return (
        <button
            className={`text-bold rounded border-2 p-2 ${
                variant === "primary" &&
                " border-purple-600 bg-purple-600 text-white hover:border-purple-700 hover:bg-purple-700 disabled:border-slate-400 disabled:bg-slate-400 disabled:hover:border-slate-400 disabled:hover:bg-slate-400 dark:disabled:border-slate-800 dark:disabled:bg-slate-800 dark:disabled:text-slate-600 "
            } ${
                variant === "secondary" &&
                " border-slate-600 bg-slate-600 text-white hover:border-slate-700 hover:bg-slate-700 disabled:border-slate-400 disabled:bg-slate-400 disabled:hover:border-slate-400 disabled:hover:bg-slate-400 dark:disabled:border-slate-800 dark:disabled:bg-slate-800 dark:disabled:text-slate-600 "
            } ${
                variant === "danger" &&
                " border-rose-600 bg-rose-600 text-white hover:border-rose-700 hover:bg-rose-700 disabled:border-slate-400 disabled:bg-slate-400 disabled:hover:border-slate-400 disabled:hover:bg-slate-400 dark:disabled:border-slate-800 dark:disabled:bg-slate-800 dark:disabled:text-slate-600 "
            } ${
                variant === "success" &&
                " border-green-600 bg-green-600 text-white hover:border-green-700 hover:bg-green-700 disabled:border-slate-400 disabled:bg-slate-400 disabled:hover:border-slate-400 disabled:hover:bg-slate-400 dark:disabled:border-slate-800 dark:disabled:bg-slate-800 dark:disabled:text-slate-600 "
            } ${
                variant === "primary-outline" &&
                " border-purple-600 text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:text-slate-100 disabled:border-slate-400  disabled:text-slate-400 disabled:hover:border-slate-400 disabled:hover:bg-inherit disabled:hover:text-slate-400 dark:disabled:border-slate-700 dark:disabled:text-slate-600 "
            } ${
                variant === "secondary-outline" &&
                " border-slate-600 text-slate-600 hover:border-slate-600 hover:bg-slate-600 hover:text-slate-100 disabled:border-slate-400  disabled:text-slate-400 disabled:hover:border-slate-400 disabled:hover:bg-inherit disabled:hover:text-slate-400 dark:disabled:border-slate-700 dark:disabled:text-slate-600 "
            } ${
                variant === "danger-outline" &&
                " border-rose-600 text-rose-600 hover:border-rose-600 hover:bg-rose-600 hover:text-slate-100 disabled:border-slate-400  disabled:text-slate-400 disabled:hover:border-slate-400 disabled:hover:bg-inherit disabled:hover:text-slate-400 dark:disabled:border-slate-700 dark:disabled:text-slate-600 "
            } ${
                variant === "success-outline" &&
                " border-green-600 text-green-600 hover:border-green-600 hover:bg-green-600 hover:text-slate-100 disabled:border-slate-400  disabled:text-slate-400 disabled:hover:border-slate-400 disabled:hover:bg-inherit disabled:hover:text-slate-400 dark:disabled:border-slate-700 dark:disabled:text-slate-600 "
            } ${
                variant === "primary-outline-animate" &&
                " border-purple-600 text-purple-600 transition-all duration-300 hover:border-purple-600 hover:bg-purple-600  hover:text-slate-100 disabled:border-slate-400 disabled:text-slate-400 disabled:hover:border-slate-400 disabled:hover:bg-inherit disabled:hover:text-slate-400 dark:disabled:border-slate-700 dark:disabled:text-slate-600"
            }`}
            disabled={disabled}
            onClick={onClick}
            onDoubleClick={onDoubbleClick}
        >
            {children}
        </button>
    );
}

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
                " border-sky-500 bg-sky-500 text-white hover:border-sky-700 hover:bg-sky-700 disabled:border-slate-400 disabled:bg-slate-400 disabled:hover:border-slate-400 disabled:hover:bg-slate-400 dark:disabled:border-slate-800 dark:disabled:bg-slate-800 dark:disabled:text-slate-500 "
            } ${
                variant === "secondary" &&
                " border-slate-500 bg-slate-500 text-white hover:border-slate-700 hover:bg-slate-700 disabled:border-slate-400 disabled:bg-slate-400 disabled:hover:border-slate-400 disabled:hover:bg-slate-400 dark:disabled:border-slate-800 dark:disabled:bg-slate-800 dark:disabled:text-slate-500 "
            } ${
                variant === "danger" &&
                " border-rose-500 bg-rose-500 text-white hover:border-rose-700 hover:bg-rose-700 disabled:border-slate-400 disabled:bg-slate-400 disabled:hover:border-slate-400 disabled:hover:bg-slate-400 dark:disabled:border-slate-800 dark:disabled:bg-slate-800 dark:disabled:text-slate-500 "
            } ${
                variant === "success" &&
                " border-green-500 bg-green-500 text-white hover:border-green-700 hover:bg-green-700 disabled:border-slate-400 disabled:bg-slate-400 disabled:hover:border-slate-400 disabled:hover:bg-slate-400 dark:disabled:border-slate-800 dark:disabled:bg-slate-800 dark:disabled:text-slate-500 "
            } ${
                variant === "primary-outline" &&
                " border-sky-500 text-sky-500 hover:border-sky-500 hover:bg-sky-500 hover:text-slate-100 disabled:border-slate-400  disabled:text-slate-400 disabled:hover:border-slate-400 disabled:hover:bg-inherit disabled:hover:text-slate-400 dark:disabled:border-slate-700 dark:disabled:text-slate-500 "
            } ${
                variant === "secondary-outline" &&
                " border-slate-500 text-slate-500 hover:border-slate-500 hover:bg-slate-500 hover:text-slate-100 disabled:border-slate-400  disabled:text-slate-400 disabled:hover:border-slate-400 disabled:hover:bg-inherit disabled:hover:text-slate-400 dark:disabled:border-slate-700 dark:disabled:text-slate-500 "
            } ${
                variant === "danger-outline" &&
                " border-rose-500 text-rose-500 hover:border-rose-500 hover:bg-rose-500 hover:text-slate-100 disabled:border-slate-400  disabled:text-slate-400 disabled:hover:border-slate-400 disabled:hover:bg-inherit disabled:hover:text-slate-400 dark:disabled:border-slate-700 dark:disabled:text-slate-500 "
            } ${
                variant === "success-outline" &&
                " border-green-500 text-green-500 hover:border-green-500 hover:bg-green-500 hover:text-slate-100 disabled:border-slate-400  disabled:text-slate-400 disabled:hover:border-slate-400 disabled:hover:bg-inherit disabled:hover:text-slate-400 dark:disabled:border-slate-700 dark:disabled:text-slate-500 "
            } ${
                variant === "primary-outline-animate" &&
                " border-sky-500 text-sky-500 transition-all duration-300 hover:border-sky-500 hover:bg-sky-500  hover:text-slate-100 disabled:border-slate-400 disabled:text-slate-400 disabled:hover:border-slate-400 disabled:hover:bg-inherit disabled:hover:text-slate-400 dark:disabled:border-slate-700 dark:disabled:text-slate-500"
            }`}
            disabled={disabled}
            onClick={onClick}
            onDoubleClick={onDoubbleClick}
        >
            {children}
        </button>
    );
}

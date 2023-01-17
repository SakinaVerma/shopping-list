export type TodoType = {
    id: string;
    title: string;
    status: "todo" | "done";
};

export type ButtonVariant =
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "primary-outline"
    | "secondary-outline"
    | "danger-outline"
    | "success-outline"
    | "primary-outline-animate";

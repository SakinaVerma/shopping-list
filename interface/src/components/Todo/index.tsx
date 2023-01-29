type Props = {
    children: React.ReactNode;
};

export default function Todo({ children }: Props) {
    return <div className="flex justify-between rounded bg-slate-800 p-3">{children}</div>;
}

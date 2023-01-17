type Props = {
    children: React.ReactNode;
};

export default function Todo({ children }: Props) {
    return <div className="flex justify-between gap-x-1">{children}</div>;
}

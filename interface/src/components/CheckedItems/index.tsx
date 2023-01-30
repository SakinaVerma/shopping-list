import { useEffect, useState } from "react";
import { FaAngleRight, FaRedo, FaTrash } from "react-icons/fa";
import { useDeleteTodo, useTodos, useUpdateTodo } from "../../hooks/useTodo";
import Button from "../Button";
import Todo from "../Todo";

type Props = {
    completedTodosCount: number;
    setCompletedTodosCount(args: number): void;
};

export default function CheckedItems({ completedTodosCount, setCompletedTodosCount }: Props) {
    const [showCompleted, setShowCompleted] = useState<boolean>(false);
    //const [completedTodosCount, setCompletedTodosCount] = useState<number>(0);

    const { data: todos } = useTodos();
    const deleteTodo = useDeleteTodo();
    const updateTodo = useUpdateTodo();

    // // Count number of total todos and completed todos.
    // useEffect(() => {
    //     if (todos !== undefined) {
    //         let count = 0;
    //         for (const todo of todos) {
    //             if (todo.status === "done") {
    //                 count++;
    //             }
    //         }

    //         setCompletedTodosCount(count);
    //     }
    // }, [todos]);

    return (
        <div className={`${completedTodosCount === 0 && "hidden"}`}>
            <div
                className={`${
                    !showCompleted && "border-slate-600 text-slate-600"
                } mb-4 mt-12 flex items-center justify-between border-t py-4`}
                onClick={() => setShowCompleted(!showCompleted)}
            >
                <h1 className="text-2xl">{completedTodosCount + " Checked Items"}</h1>
                <button className={`${showCompleted && "rotate-90"} p-2 text-2xl transition-all duration-150`}>
                    <FaAngleRight />
                </button>
            </div>
            <div className={`${!showCompleted && "hidden"} flex flex-col gap-y-4 transition-opacity duration-1000`}>
                {todos &&
                    todos.map((todo) => (
                        <>
                            {todo.status === "done" && (
                                <div
                                    className={`flex w-full items-center rounded border border-slate-800 hover:border-green-600`}
                                >
                                    <Todo key={todo.id}>
                                        <p className={`text-xl line-through`}>{todo.title}</p>
                                        <div className="flex gap-x-2">
                                            <Button
                                                variant="secondary"
                                                onClick={() => {
                                                    (todo.status = "todo"), updateTodo.mutate(todo);
                                                    setCompletedTodosCount(completedTodosCount - 1);
                                                }}
                                            >
                                                <FaRedo />
                                            </Button>
                                            <Button variant="danger" onClick={() => deleteTodo.mutate(todo.id)}>
                                                <FaTrash />
                                            </Button>
                                        </div>
                                    </Todo>
                                </div>
                            )}
                        </>
                    ))}
            </div>
        </div>
    );
}

import { useEffect, useState } from "react";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
import { TodoType } from "../../dataStructures";
import { useDeleteTodo, useTodos, useUpdateTodo } from "../../hooks/useTodo";
import Button from "../Button";
import Todo from "../Todo";
import TodoEditor from "../TodoEditor";

type Props = {
    completedTodosCount: number;
    setCompletedTodosCount(args: number): void;
};

export default function TodoItems({ completedTodosCount, setCompletedTodosCount }: Props) {
    const [editId, setEditId] = useState<string>("");
    const [newTodo, setNewTodo] = useState<TodoType>({
        id: "",
        title: "",
        status: "todo",
    });

    const { data: todos } = useTodos();
    const deleteTodo = useDeleteTodo();
    const updateTodo = useUpdateTodo();

    useEffect(() => {
        if (todos !== undefined) {
            let count = 0;
            for (const todo of todos) {
                if (todo.status === "done") {
                    count++;
                }
            }

            setCompletedTodosCount(count);
        }
    }, [todos]);

    return (
        <>
            <div className="my-4">
                <h1 className="text-4xl">Shopping List</h1>
            </div>
            <div className="flex flex-col gap-y-4">
                {todos &&
                    todos.map((todo) => (
                        <>
                            {todo.status === "todo" && (
                                <>
                                    {todo.id === editId ? (
                                        <TodoEditor todo={todo} setEditId={setEditId} />
                                    ) : (
                                        <div
                                            className={`flex w-full items-center rounded border border-slate-800 hover:border-green-600`}
                                        >
                                            <Todo key={todo.id}>
                                                <p className={`text-xl`}>{todo.title}</p>
                                                <div className="flex gap-x-2">
                                                    <Button
                                                        variant="secondary"
                                                        onClick={() => {
                                                            setEditId(todo.id);
                                                            setNewTodo(todo);
                                                        }}
                                                    >
                                                        <FaEdit />
                                                    </Button>
                                                    <Button
                                                        variant="success"
                                                        onClick={() => {
                                                            (todo.status = "done"), updateTodo.mutate(todo);
                                                            setCompletedTodosCount(completedTodosCount + 1);
                                                        }}
                                                    >
                                                        <FaCheck />
                                                    </Button>
                                                    {/* <Button variant="danger" onClick={() => deleteTodo.mutate(todo.id)}>
                                                        <FaTrash />
                                                    </Button> */}
                                                </div>
                                            </Todo>
                                        </div>
                                    )}
                                </>
                            )}
                        </>
                    ))}
            </div>
        </>
    );
}

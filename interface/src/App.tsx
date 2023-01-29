import Button from "./components/Button";
import Todo from "./components/Todo";
import { useAddTodo, useDeleteTodo, useTodos, useUpdateTodo } from "./hooks/useTodo";
import { FaAngleDown, FaAngleRight, FaCheck, FaEdit, FaPlus, FaRedo, FaTimes, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { makeid } from "./utils/random-string";
import { TodoType } from "./dataStructures";

function App() {
    const [add, setAdd] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState<TodoType>({
        id: "",
        title: "",
        status: "todo",
    });
    const [showCompleted, setShowCompleted] = useState<boolean>(false);
    const [totalTodos, setTotalTodos] = useState<number>(0);
    const [completedTodosCount, setCompletedTodosCount] = useState<number>(0);

    const { data: todos } = useTodos();
    const addTodo = useAddTodo();
    const deleteTodo = useDeleteTodo();
    const updateTodo = useUpdateTodo();

    // Count number of total todos and completed todos.
    useEffect(() => {
        if (todos !== undefined) {
            setTotalTodos(todos.length);

            let count = 0;
            for (const todo of todos) {
                if (todo.status === "done") {
                    count++;
                }
            }

            setCompletedTodosCount(count);
        }
    }, [todos]);

    function resetNewTodo() {
        setNewTodo({
            id: "",
            title: "",
            status: "todo",
        });
    }

    function handleAddNewTodo() {
        if (newTodo.id === "") {
            addTodo.mutate({ ...newTodo, id: makeid(20) });
        } else {
            updateTodo.mutate(newTodo);
        }
        resetNewTodo();
        setAdd(false);
    }

    return (
        <div className="flex min-h-screen w-full flex-col items-center gap-y-4 bg-gray-900 p-4 text-white">
            <div className="min-h-[400px] w-full max-w-lg">
                <div className="my-4">
                    <h1 className="text-4xl">Shopping List</h1>
                </div>
                <div className="flex flex-col gap-y-4">
                    {todos &&
                        todos.map((todo) => (
                            <>
                                {todo.status === "todo" && (
                                    <Todo key={todo.id}>
                                        <p className={`text-xl`}>{todo.title}</p>
                                        <div className="flex gap-x-2">
                                            <Button
                                                variant="primary"
                                                onClick={() => {
                                                    (todo.status = "done"), updateTodo.mutate(todo);
                                                    setCompletedTodosCount(completedTodosCount + 1);
                                                }}
                                            >
                                                <FaCheck />
                                            </Button>
                                            <Button
                                                variant="secondary"
                                                onClick={() => {
                                                    setAdd(true);
                                                    setNewTodo(todo);
                                                }}
                                            >
                                                <FaEdit />
                                            </Button>
                                            <Button variant="danger" onClick={() => deleteTodo.mutate(todo.id)}>
                                                <FaTrash />
                                            </Button>
                                        </div>
                                    </Todo>
                                )}
                            </>
                        ))}
                </div>
                <div className={`${!add && "hidden"} my-4 flex items-center rounded border border-slate-300`}>
                    <input
                        type="text"
                        className="h-10 w-full bg-inherit px-2 text-inherit outline-none"
                        value={newTodo.title}
                        onChange={(event) => setNewTodo({ ...newTodo, title: event.target.value })}
                    />
                    <div className={`${!add && "hidden"} flex gap-x-1 p-1`}>
                        <Button variant="success" onClick={() => handleAddNewTodo()}>
                            <FaCheck />
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => {
                                setNewTodo({ ...newTodo, title: "" });
                                setAdd(false);
                            }}
                        >
                            <FaTimes />
                        </Button>
                    </div>
                </div>
                <div className={`${add && "hidden"} my-4`}>
                    <Button variant="primary" onClick={() => setAdd(true)}>
                        <FaPlus />
                    </Button>
                </div>
                <div className={`${completedTodosCount === 0 && "hidden"}`}>
                    <div
                        className="mb-4 mt-12 flex items-center justify-between border-t py-4"
                        onClick={() => setShowCompleted(!showCompleted)}
                    >
                        <h1 className="text-2xl">{completedTodosCount + " Checked Items"}</h1>
                        <button
                            className={`${showCompleted && "rotate-90"} p-2 text-2xl transition-transform duration-500`}
                        >
                            <FaAngleRight />
                        </button>
                    </div>
                    <div
                        className={`${
                            !showCompleted && "hidden"
                        } flex flex-col gap-y-4 transition-opacity duration-1000`}
                    >
                        {todos &&
                            todos.map((todo) => (
                                <>
                                    {todo.status === "done" && (
                                        <Todo key={todo.id}>
                                            <p className={`text-xl line-through`}>{todo.title}</p>
                                            <div className="flex gap-x-2">
                                                <Button
                                                    variant="primary"
                                                    onClick={() => {
                                                        (todo.status = "todo"), updateTodo.mutate(todo);
                                                        setCompletedTodosCount(completedTodosCount - 1);
                                                    }}
                                                >
                                                    <FaRedo />
                                                </Button>
                                                <Button
                                                    variant="secondary"
                                                    onClick={() => {
                                                        setAdd(true);
                                                        setNewTodo(todo);
                                                    }}
                                                >
                                                    <FaEdit />
                                                </Button>
                                                <Button variant="danger" onClick={() => deleteTodo.mutate(todo.id)}>
                                                    <FaTrash />
                                                </Button>
                                            </div>
                                        </Todo>
                                    )}
                                </>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

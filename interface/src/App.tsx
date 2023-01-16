import Button from "./components/Button";
import Todo from "./components/Todo";
import { useAddTodo, useDeleteTodo, useTodos, useUpdateTodo } from "./hooks/useTodo";
import { FaCheck, FaEdit, FaPlus, FaRedo, FaTimes, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { makeid } from "./utils/random-string";
import { TodoType } from "./dataStructures";

function App() {
    const getTodos = useTodos();
    const [add, setAdd] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState<TodoType>({
        id: "",
        title: "",
        status: "todo",
    });
    const addTodo = useAddTodo();
    const deleteTodo = useDeleteTodo();
    const updateTodo = useUpdateTodo();

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
        <div className="flex min-h-screen w-full flex-col gap-y-4 bg-gray-900 p-4 text-white">
            <div className="">
                <h1 className="text-4xl">Shopping List</h1>
            </div>
            <div className="flex flex-col gap-y-2">
                {getTodos.data &&
                    getTodos.data.map((todo) => (
                        <Todo key={todo.id}>
                            <p className={`${todo.status === "done" && "line-through"} text-xl`}>{todo.title}</p>
                            <div className="flex gap-x-2">
                                {todo.status === "todo" ? (
                                    <Button
                                        variant="primary"
                                        onClick={() => {
                                            (todo.status = "done"), updateTodo.mutate(todo);
                                        }}
                                    >
                                        <FaCheck />
                                    </Button>
                                ) : (
                                    <Button
                                        variant="primary"
                                        onClick={() => {
                                            (todo.status = "todo"), updateTodo.mutate(todo);
                                        }}
                                    >
                                        <FaRedo />
                                    </Button>
                                )}
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
                    ))}
            </div>
            <div className={`${!add && "hidden"} flex items-center rounded border border-slate-300`}>
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
            <div className={`${add && "hidden"}`}>
                <Button variant="primary" onClick={() => setAdd(true)}>
                    <FaPlus />
                </Button>
            </div>
        </div>
    );
}

export default App;

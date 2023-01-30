import { useEffect, useState } from "react";
import { FaCheck, FaPlus, FaTimes } from "react-icons/fa";
import { TodoType } from "../../dataStructures";
import { useAddTodo, useUpdateTodo } from "../../hooks/useTodo";
import { makeid } from "../../utils/random-string";
import Button from "../Button";
import Todo from "../Todo";

type Props = {
    todo?: TodoType;
    setEditId?(args: string): void;
};

export default function TodoEditor({ todo, setEditId }: Props) {
    const [add, setAdd] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState<TodoType>({
        id: "",
        title: "",
        status: "todo",
    });

    const addTodo = useAddTodo();
    const updateTodo = useUpdateTodo();

    function resetNewTodo() {
        setNewTodo({
            id: "",
            title: "",
            status: "todo",
        });
    }

    useEffect(() => {
        if (todo !== undefined) {
            setNewTodo(todo);
            setAdd(true);
        }
    }, []);

    function handleAddNewTodo() {
        if (newTodo.id === "") {
            addTodo.mutate({ ...newTodo, id: makeid(20) });
        } else {
            updateTodo.mutate(newTodo);
        }
        resetNewTodo();
        setAdd(false);
        setEditId && setEditId("");
    }

    return (
        <>
            <div className={`flex w-full items-center rounded border border-purple-500`}>
                <Todo>
                    <input
                        type="text"
                        className="w-full bg-inherit text-xl text-inherit outline-none"
                        value={newTodo.title}
                        placeholder="Add item"
                        onChange={(event) => setNewTodo({ ...newTodo, title: event.target.value })}
                    />
                    <div className={`flex gap-x-2`}>
                        <Button variant={newTodo.id === "" ? "primary" : "success"} onClick={() => handleAddNewTodo()}>
                            {newTodo.id === "" ? <FaPlus /> : <FaCheck />}
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => {
                                setNewTodo({ ...newTodo, title: "" });
                                setAdd(false);
                                setEditId && setEditId("");
                            }}
                        >
                            <FaTimes />
                        </Button>
                    </div>
                </Todo>
            </div>
            {/* 
            <div className={`${add && "hidden"} my-3 flex justify-end`}>
                <Button variant="primary" onClick={() => setAdd(true)}>
                    <FaPlus />
                </Button>
            </div> */}
        </>
    );
}

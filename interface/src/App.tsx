import { useEffect, useState } from "react";
import CheckedItems from "./components/CheckedItems";
import TodoEditor from "./components/TodoEditor";
import TodoItems from "./components/TodoItems";
import { useTodos } from "./hooks/useTodo";

function App() {
    const [completedTodosCount, setCompletedTodosCount] = useState<number>(0);

    const { data: todos } = useTodos();

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
        <div className="flex min-h-screen w-full flex-col items-center gap-y-4 bg-gray-900 p-4 text-white">
            <div className="flex min-h-[400px] w-full max-w-lg flex-col gap-y-4">
                <TodoItems completedTodosCount={completedTodosCount} setCompletedTodosCount={setCompletedTodosCount} />
                <TodoEditor />
                <CheckedItems
                    completedTodosCount={completedTodosCount}
                    setCompletedTodosCount={setCompletedTodosCount}
                />
            </div>
        </div>
    );
}

export default App;

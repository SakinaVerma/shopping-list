import { AxiosResponse } from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { TodoType } from "../dataStructures";
import { axiosInstance } from "../utils/axios-interceptors";

function getTodos(): Promise<AxiosResponse<TodoType[]>> {
    return axiosInstance.get("todos");
}

function addTodo(todo: TodoType) {
    return axiosInstance.post("todo", todo);
}

function updateTodo(todo: TodoType) {
    return axiosInstance.put("todo", todo);
}

function deleteTodo(id: string) {
    return axiosInstance.delete(`todo/${id}`);
}

export function useTodos() {
    return useQuery("todos", getTodos, {
        select: (data): TodoType[] => {
            return data.data;
        },
        cacheTime: 0,
        staleTime: 0,
    });
}

export function useAddTodo() {
    const queryClient = useQueryClient();
    return useMutation(addTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries("todos");
        },
    });
}

export function useUpdateTodo() {
    const queryClient = useQueryClient();
    return useMutation(updateTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries("todos");
        },
    });
}

export function useDeleteTodo() {
    const queryClient = useQueryClient();
    return useMutation(deleteTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries("todos");
        },
    });
}

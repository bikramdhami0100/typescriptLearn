type TodoList = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};
declare function fetchApi(): Promise<TodoList[]>;

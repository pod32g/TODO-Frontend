interface ITodo {
    id: string,
    title: string,
    date: string,
    content: string,
    status: "completed" | "todo"
}

export default ITodo
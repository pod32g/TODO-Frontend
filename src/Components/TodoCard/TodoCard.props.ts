import ITodo from "../../Util/Types/TodoInfo";

interface ITodoCardProps extends ITodo {
    className?: string,
    onEdit: () => void
}

export default ITodoCardProps
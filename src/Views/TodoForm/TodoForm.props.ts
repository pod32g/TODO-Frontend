import ITodo from "../../Util/Types/TodoInfo";

interface ITodoFormProps {
    show: boolean,
    onClose: () => void,
    el?: ITodo
}

export default ITodoFormProps
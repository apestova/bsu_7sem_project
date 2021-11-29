import { TodoItem } from "./TodoItem";

export const TodosList = ({ todos }) => {
    return (
        <div className="todos-list">
            {todos && todos.map((todo, key) => <TodoItem key={key} todo={todo} position={key} />)}
        </div>
    );
};

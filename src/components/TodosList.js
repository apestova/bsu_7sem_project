import { IconButton } from "@material-ui/core";
import { CheckCircle, CheckCircleOutline, Delete } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { changeIsCompleted, deleteTodo } from "../actions/todos";

export const TodosList = ({ todos }) => {
    const dispatch = useDispatch();

    return (
        <div className="todos-list">
            {todos && todos.map((todo, key) =>
                <div key={key} className="todos-list__item">
                    {todo.text}
                    <div className="todos-list__item__options">
                        <IconButton onClick={() => dispatch(changeIsCompleted(key))}>
                            {todo.isCompleted ? <CheckCircle style={{ color: "green" }} /> : <CheckCircleOutline style={{ color: "red" }} />}
                        </IconButton>
                        <IconButton onClick={() => dispatch(deleteTodo(key))} style={{ color: "black" }}>
                            <Delete />
                        </IconButton>
                    </div>
                </div>
            )}
        </div>
    );
}

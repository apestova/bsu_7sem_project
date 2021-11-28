import { addTodo } from "../actions/todos";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../selectors/selectors";

export const MainPage = () => {
    const dispatch = useDispatch();
    const todos = useSelector(getTodos);

    return (
        <>
            <Button onClick={() => dispatch(addTodo({
                text: "WWWWWWWWWWWWWWWWWWWWWWWWWWW",
                isCompleted: false
            }))} >add todo</Button>
            {todos && todos.map((todo, key) =>
                <div key={key}>
                    {todo.text}
                    {String(todo.isCompleted)}
                </div>
            )}
        </>
    );
}

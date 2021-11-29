import { addTodo } from "../actions/todos";
import { Button, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../selectors/selectors";
import { TodosList } from "../components/TodosList";
import { useState } from "react";

export const MainPage = () => {
    const dispatch = useDispatch();
    const todos = useSelector(getTodos);
    const [newTodo, setNewTodo] = useState("");
    const [newTodoError, setNewTodoError] = useState(false);
    const addButtonError = newTodo.length > 40 || newTodo.length < 1;

    const onInputChange = (event) => {
        const newValue = event.target.value;
        if(newValue.length > 40 || newValue.length < 1)
            setNewTodoError(true);
        else
            setNewTodoError(false);

        setNewTodo(newValue);
    };

    const onSubmit = () => {
        setNewTodo("");
        dispatch(addTodo({ text: newTodo, isCompleted: false }));
    };

    const onAddEnterPress = (e) => {
        if (e.key === "Enter" && !newTodoError)
            onSubmit();
    };

    return (
        <div className="main-page">
            <div className="new-todo">
                <TextField
                    className="new-todo__input"
                    error={newTodoError}
                    value={newTodo}
                    placeholder="New ToDo(max. 40 chars)"
                    variant="outlined"
                    onChange={onInputChange}
                    onKeyPress={onAddEnterPress}
                />
                {addButtonError ?
                    <Button id="add-button" disabled style={{ backgroundColor: "darkgray", color: "white" }}>
                        New todo
                    </Button> :
                    <Button id="add-button" onClick={onSubmit}>New todo</Button>
                }
            </div>
            <TodosList todos={todos} />
        </div>
    );
}

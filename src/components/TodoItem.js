import { IconButton, TextField } from "@material-ui/core";
import { changeIsCompleted, deleteTodo, editTodo } from "../actions/todos";
import { CheckCircle, CheckCircleOutline, Close, Delete, Done } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const TodoItem = ({ todo, position }) => {
    const dispatch = useDispatch();
    const [isEditMode, setIsEditMode] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const [editTodoError, setEditTodoError] = useState(false);

    const addEditMode = () => {
        setIsEditMode(true);
        setEditText(todo.text);
    };

    const onEditChange = (event) => {
        const newValue = event.target.value
        if(newValue.length > 40 || newValue.length < 1)
            setEditTodoError(true);
        else
            setEditTodoError(false);

        setEditText(newValue);
    };

    const onEditSubmit = () => {
        dispatch(editTodo({ text: editText, position }));
        setIsEditMode(false);
    };

    const removeEditMode = () => {
        setEditText(todo.text);
        setEditTodoError(false);
        setIsEditMode(false);
    };

    const onEditCancel = () => {
        removeEditMode();
    };

    const onChangeIsCompleted = () => {
        dispatch(changeIsCompleted(position));
        removeEditMode();
    };

    const onDelete = () => {
        dispatch(deleteTodo(position));
        removeEditMode();
    };

    return (
        <div key={position} className="todos-list__item">
            <div className="todos-list__item__text" onClick={addEditMode}>
                {isEditMode ?
                    <TextField
                        className="edit-mode"
                        error={editTodoError}
                        placeholder={todo.text}
                        value={editText}
                        variant="outlined"
                        onChange={onEditChange}
                    />
                    : todo.text
                }
            </div>
            <div className="todos-list__item__options">
                {isEditMode &&
                    <>
                        {editTodoError ?
                            <IconButton disabled style={{ color: "darkgray" }}>
                                <Done />
                            </IconButton> :
                            <IconButton onClick={onEditSubmit} style={{ color: "black" }}>
                                <Done />
                            </IconButton>
                        }
                        <IconButton onClick={onEditCancel} style={{ color: "black" }}>
                            <Close />
                        </IconButton>
                    </>
                }
                <IconButton onClick={onChangeIsCompleted}>
                    {todo.isCompleted ? <CheckCircle style={{ color: "green" }} /> : <CheckCircleOutline style={{ color: "red" }} />}
                </IconButton>
                <IconButton onClick={onDelete} style={{ color: "black" }}>
                    <Delete />
                </IconButton>
            </div>
        </div>
    );
}
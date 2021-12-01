import React from "react";
import { TodoItem } from "./TodoItem";

export const TodosList = ({ todos }) => {
    let uncompletedCounter = 0;
    let completedCounter = 0;

    todos.forEach((todo) => {
        if (todo.isCompleted)
            completedCounter++;
        else
            uncompletedCounter++;
    })

    return (
        <div className="todos-list">
            {!todos.length &&
                <h1 className="todos-list__info">There are no tasks</h1>
            }
            {(!!completedCounter && !!!uncompletedCounter) &&
                <h1 className="todos-list__info">You've done everything</h1>
            }
            {!!uncompletedCounter &&
                <div className="todos-list__uncompleted">
                    {todos.map((todo, key) => {
                        if (!todo.isCompleted)
                            return <TodoItem key={key} todo={todo} position={key} />
                    })}
                </div>
            }
            {!!completedCounter &&
                <div className="todos-list__completed">
                    {todos.map((todo, key) => {
                        if (todo.isCompleted)
                            return <TodoItem key={key} todo={todo} position={key} />
                    })}
                </div>
            }
        </div>
    );
};

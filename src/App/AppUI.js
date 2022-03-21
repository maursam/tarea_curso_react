import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoContext } from "../TodoContext";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from '../Modal';
import {TodoForm} from '../TodoForm';
import {TodoLoading} from '../TodoLoading';

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    return (
    <React.Fragment>
        <TodoCounter  />
        <TodoSearch  />

        <TodoList >
            {loading && <TodoLoading />}
            {error && <p />}
            {(!loading && !searchedTodos.length) && <p />}

            {searchedTodos.map( todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}     
            />
            ) )}
        </TodoList>
        {openModal && (
            <Modal >
                <TodoForm></TodoForm>
            </Modal>
        )}

        <CreateTodoButton 
            setOpenModal={setOpenModal}
        />
    </React.Fragment>
    );
}

export {AppUI};
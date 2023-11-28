"use client";
import React, { useState } from "react";
import styles from "./Todo.module.css";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <div className={styles.input}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Write Text here . . ."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <br />
      <div className={styles.list}>
        {todos.map((todo, index) => (
          <div className={styles.item} key={index}>
            <p>{todo}</p>
            <button onClick={() => removeTodo(index)}>X</button>
          </div>
        ))}
      </div>
      <br />
      <div className={styles.total}>
        <h3>
          <span>Total:</span> {todos.length}
        </h3>
      </div>
    </div>
  );
}

export default Todo;

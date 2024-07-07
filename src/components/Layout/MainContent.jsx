import React, { useState, useEffect } from "react";
import Todos from "../Todos/Todos.jsx";
import axios from "axios";

const MainContent = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function fetchTodos() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(({ data }) => setTodos(data));
  }, []);

  return (
    <div>
      <Todos todoList={todos} />
    </div>
  );
};

export default MainContent;

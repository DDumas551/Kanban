import React, { createContext, useState } from "react";

export const Context = createContext();

export function AppProvider(props) {
  const [todo, setTodo] = useState([
    { id: 1, task: "Run upside down", priority: 8 },
  ]);
  const [inProgress, setInProgress] = useState([]);
  const [inReview, setInReview] = useState([]);
  const [done, setDone] = useState([]);

  return (
    <Context.Provider
      value={{
        todo,
        setTodo,
        inProgress,
        setInProgress,
        inReview,
        setInReview,
        done,
        setDone,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

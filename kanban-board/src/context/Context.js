import React, { createContext, useState } from "react";

export const Context = createContext();

export function AppProvider(props) {
  // const ees = window.localStorage.getItem("employees");
  // console.log(ees);
  const [todo, setTodo] = useState([
    { id: 1617329216594, task: "Run upside down", priority: 8, assigned: "Me" },
  ]);
  const [inProgress, setInProgress] = useState([]);
  const [inReview, setInReview] = useState([]);
  const [done, setDone] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [employees, setEmployees] = useState([]);

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
        modalOpen,
        setModalOpen,
        employees,
        setEmployees,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

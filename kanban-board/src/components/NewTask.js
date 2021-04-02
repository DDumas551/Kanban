import React, { useContext, useState, useEffect } from "react";
import { Context } from "../context/Context";

export default function NewTask() {
  const {
    modalOpen,
    setModalOpen,
    todo,
    setTodo,
    employees,
    setEmployees,
  } = useContext(Context);

  const [newTask, setNewTask] = useState("");
  const [newEmployee, setNewEmployee] = useState("");

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    if (!window.localStorage.getItem("employees")) {
      window.localStorage.setItem("employees", employees);
    }
  }, [setEmployees, todo, employees]);

  return (
    <div className="modal" style={{ display: modalOpen ? "block" : "none" }}>
      <div className="modal-content">
        <div className="modal-title">Add a Task</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="newTask">New Task: </label>
          <input
            id="newTask"
            name="newTask"
            type="text"
            placeholder="New Task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <br />
          <label htmlFor="priority">Priority: </label>
          <select id="priority" name="priority">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={4}>4</option>
            <option value={8}>8</option>
          </select>
          <br />
          <label htmlFor="dropdown">Assigned to: </label>
          <select id="dropdown" name="dropdown">
            {employees.map((e) => {
              return (
                <option key={e} value={e}>
                  {e}
                </option>
              );
            })}
          </select>
          <br />
          <label>New Employee: </label>
          <input
            id="newEmployee"
            name="newEmployee"
            type="text"
            placeholder="New Employee"
            value={newEmployee}
            onChange={(e) => setNewEmployee(e.target.value)}
          />
          <div className="button-row">
            <button onClick={(e) => toggleModal(e)}>Close</button>
            <button
              type="submit"
              onClick={() => {
                if (newTask) {
                  var date = Date.now();
                  var assigned = document.querySelector("#dropdown").value;
                  var prio = document.querySelector("#priority").value;
                  setTodo((todo) => [
                    ...todo,
                    {
                      id: date,
                      task: newTask,
                      priority: prio,
                      assigned: assigned,
                    },
                  ]);
                  setNewTask("");
                  toggleModal();
                }
              }}
              disabled={!newTask || false}
            >
              Submit
            </button>
            <button
              type="submit"
              disabled={!newEmployee}
              onClick={
                () => {
                  if (newEmployee) {
                    if (!employees.includes(newEmployee)) {
                      setEmployees((employees) => [...employees, newEmployee]);
                      setNewEmployee("");
                    }
                  }
                }
                //   ,
                // () => {
                //   window.localStorage.setItem("employees", employees);
                //   }
              }
            >
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

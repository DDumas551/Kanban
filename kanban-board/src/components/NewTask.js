import React, { useContext, useState } from "react";
import { Context } from "../context/Context";

export default function NewTask() {
  const { modalOpen, setModalOpen, employees, todo, setTodo } = useContext(
    Context
  );

  const [newTask, setNewTask] = useState("");

  const toggleModal = (e) => {
    setModalOpen(!modalOpen);
  };

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
          <br />
          <div className="button-row">
            <button onClick={(e) => toggleModal(e)}>Close</button>
            <button
              type="submit"
              onClick={() => {
                var date = Date.now();
                var assigned = document.querySelector("#dropdown").value;
                setTodo((todo) => [
                  ...todo,
                  { id: date, task: newTask, priority: 8, assigned: assigned },
                ]);
                setNewTask("");
                toggleModal();
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

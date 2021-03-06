import React, { useContext } from "react";
import { Context } from "../context/Context";
import moment from "moment";

export default function TaskCard({ item, title }) {
  const {
    todo,
    setTodo,
    inProgress,
    setInProgress,
    inReview,
    setInReview,
    done,
    setDone,
  } = useContext(Context);

  let cardBackground;
  switch (item.priority) {
    case "1":
      cardBackground = "red";
      break;
    case "2":
      cardBackground = "orange";
      break;
    case "4":
      cardBackground = "yellow";
      break;
    case "8":
      cardBackground = "white";
      break;
    default:
      cardBackground = "white";
      break;
  }

  const moveTaskForward = (title, task) => {
    switch (title) {
      case "To Dos":
        console.log(todo);
        setTodo(todo.filter((item) => item.id !== task.id));
        setInProgress((inProgress) => [...inProgress, task]);
        break;
      case "In Progress":
        setInProgress(inProgress.filter((item) => item.id !== task.id));
        setInReview((inReview) => [...inReview, task]);
        break;
      case "In Review":
        setInReview(inReview.filter((item) => item.id !== task.id));
        setDone((done) => [...done, task]);
        break;
      case "Done":
        break;
      default:
        break;
    }
  };
  const moveTaskBackward = (title, task) => {
    switch (title) {
      case "To Dos":
        break;
      case "In Progress":
        setInProgress(inProgress.filter((item) => item.id !== task.id));
        setTodo((todo) => [...todo, task]);
        break;
      case "In Review":
        setInReview(inReview.filter((item) => item.id !== task.id));
        setInProgress((inProgress) => [...inProgress, task]);
        break;
      case "Done":
        setDone(done.filter((item) => item.id !== task.id));
        setInReview((inReview) => [...inReview, task]);
        break;
      default:
        break;
    }
  };

  const deleteTask = (title, task) => {
    switch (title) {
      case "To Dos":
        setTodo(todo.filter((item) => item.id !== task.id));
        break;
      case "In Progress":
        setInProgress(inProgress.filter((item) => item.id !== task.id));
        break;
      case "In Review":
        setInReview(inReview.filter((item) => item.id !== task.id));
        break;
      case "Done":
        setDone(done.filter((item) => item.id !== task.id));
        break;
      default:
        break;
    }
  };

  return (
    <div className="task-card" style={{ backgroundColor: cardBackground }}>
      <div className="task-content">
        <div className="task-text" style={{ fontSize: "25px" }}>
          {item.task}
        </div>
        <div style={{ fontSize: "12px" }}>Assigned to: {item.assigned}</div>
        <div style={{ fontSize: "12px" }}>
          Created: {moment(item.id).format("LL")}
        </div>
        <div className="task-buttons">
          <div
            className="delete-button"
            onClick={() => deleteTask(title, item)}
            style={{ color: item.priority === "1" ? "black" : "red" }}
          >
            Delete
          </div>
          {title !== "To Dos" ? (
            <div
              className="back-button"
              onClick={() => moveTaskBackward(title, item)}
            >
              Prev Step
            </div>
          ) : (
            <div
              className="back-button"
              style={{ color: "rgb(220, 220, 220)" }}
            >
              Prev Step
            </div>
          )}
          {title !== "Done" ? (
            <div
              className="next-button"
              onClick={() => moveTaskForward(title, item)}
            >
              Next Step
            </div>
          ) : (
            <div
              className="next-button"
              style={{ color: "rgb(220, 220, 220)" }}
            >
              Next Step
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

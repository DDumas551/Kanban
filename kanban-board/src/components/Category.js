import React, { useContext } from "react";
import { Context } from "../context/Context";
import TaskCard from "./TaskCard";

export default function Category({ title }) {
  const { todo, inProgress, inReview, done } = useContext(Context);

  const renderContent = (title) => {
    switch (title) {
      case "To Dos":
        return todo.map((item) => {
          return <TaskCard key={item.id} item={item} title={title} />;
        });
      case "In Progress":
        return inProgress.map((item) => {
          return <TaskCard key={item.id} item={item} title={title} />;
        });
      case "In Review":
        return inReview.map((item) => {
          return <TaskCard key={item.id} item={item} title={title} />;
        });
      case "Done":
        return done.map((item) => {
          return <TaskCard key={item.id} item={item} title={title} />;
        });

      default:
        break;
    }
  };

  return (
    <div className="column">
      <div className="column-title">{title}</div>
      <hr />
      <div className="column-contents">{renderContent(title)}</div>
    </div>
  );
}

import React, { useContext } from "react";
import { Context } from "../context/Context";

export default function NewTaskButton() {
  const { modalOpen, setModalOpen } = useContext(Context);

  return (
    <div className="new-task" onClick={() => setModalOpen(!modalOpen)}>
      new task
    </div>
  );
}

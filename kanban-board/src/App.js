import "./App.css";
import React from "react";
import { AppProvider } from "./context/Context";
import Category from "./components/Category";
import NewTask from "./components/NewTask";
import NewTaskButton from "./components/NewTaskButton"

function App() {
  // const { modalOpen, setModalOpen } = useContext(Context);

  return (
    <div className="App">
      <AppProvider>
        <div className="title-container">
          <div className="app-title">S O O D</div>
          <NewTaskButton />
        </div>
        <div className="app-container">
          <Category title="To Dos" />
          <Category title="In Progress" />
          <Category title="In Review" />
          <Category title="Done" />
          <NewTask />
        </div>
      </AppProvider>
    </div>
  );
}

export default App;

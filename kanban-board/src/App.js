import "./App.css";
import React from "react";
import { AppProvider } from "./context/Context";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <div className="title-container">
          <div className="app-title">S O O D</div>
          <div className="new-task">new task</div>
        </div>
        <div className="app-container">
          <Category title="To Dos" />
          <Category title="In Progress" />
          <Category title="In Review" />
          <Category title="Done" />
        </div>
      </AppProvider>
    </div>
  );
}

export default App;

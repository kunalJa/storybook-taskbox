import React from "react";
import "./App.css";

import { defaultTasks } from "./components/TaskList.stories";
import { actions } from "./components/Task.stories";
import InboxScreen from "./components/InboxScreen";
import PageContext from "./contexts/PageContext";

const App = () => {
  return (
    <PageContext.Provider value={{ tasks: defaultTasks, actions: actions }}>
      <InboxScreen />
    </PageContext.Provider>
  );
};

export default App;

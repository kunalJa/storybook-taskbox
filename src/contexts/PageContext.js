import React from "react";

const PageContext = React.createContext({
  tasks: [],
  actions: {
    onArchiveTask: console.log("onArchiveTask"),
    onPinTask: console.log("onPinTask")
  }
});

export default PageContext;

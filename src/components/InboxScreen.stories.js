import React from "react";
import { storiesOf } from "@storybook/react";

import InboxScreen from "./InboxScreen";
import PageContext from "../contexts/PageContext";
import { withPinnedTasks } from "./TaskList.stories";
import { actions } from "./Task.stories";

storiesOf("InboxScreen", module)
  .addDecorator(story => (
    <PageContext.Provider value={{ tasks: withPinnedTasks, actions: actions }}>
      {story()}
    </PageContext.Provider>
  ))
  .add("default", () => <InboxScreen />)
  .add("error", () => <InboxScreen error="Error Message" />);

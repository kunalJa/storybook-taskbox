import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Task from "./Task";

export const task = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  onArchiveTask: action("onArchiveTask"),
  onPinTask: action("onPinTask")
};

export const states = ["TASK_INBOX", "TASK_PINNED", "TASK_ARCHIVED"];

let stories = storiesOf("Task", module);

states.forEach(state => {
  const story_name = state.split("_")[1].toLowerCase();
  stories.add(story_name, () => (
    <Task task={{ ...task, state: state }} {...actions} />
  ));
});

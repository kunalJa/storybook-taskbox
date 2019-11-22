import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs/react";

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

stories.addDecorator(withKnobs);
stories.addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>);

states.forEach(state => {
  const story_name = state.split("_")[1].toLowerCase();
  stories.add(story_name, () => (
    <Task task={object("task", { ...task, state: state })} {...actions} />
  ));
});

const longTitle = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not`;

stories.add("long title", () => (
  <Task task={{ ...task, title: longTitle }} {...actions} />
));

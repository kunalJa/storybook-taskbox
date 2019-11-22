import React, { useContext } from "react";
import PropTypes from "prop-types";

import Task from "./Task";
import PageContext from "../contexts/PageContext";

const LoadingRow = () => {
  return (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
};

const TaskList = ({ loading, tasks, actions }) => {
  if (loading) {
    return (
      <div className="list-item">
        {tasks.map(task => (
          <LoadingRow key={task.id} />
        ))}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  const tasksInOrder = [
    ...tasks.filter(task => task.state === "TASK_PINNED"),
    ...tasks.filter(task => task.state !== "TASK_PINNED")
  ];

  return (
    <div className="list-items">
      {tasksInOrder.map(task => (
        <Task key={task.id} task={task} {...actions} />
      ))}
    </div>
  );
};

TaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

TaskList.defaultProps = {
  loading: false
};

const ContextualTaskList = ({ loading }) => {
  const { tasks, actions } = useContext(PageContext);
  return <TaskList loading={loading} tasks={tasks} actions={actions} />;
};

ContextualTaskList.propTypes = {
  loading: PropTypes.bool
};

ContextualTaskList.defaultProps = {
  loading: false
};

export default ContextualTaskList;
export { TaskList };

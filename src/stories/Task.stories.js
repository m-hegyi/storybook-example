import React from 'react';

import Task from '../components/Task';

export default {
  title: 'Task',
  component: Task
};

const task = {
  id: 1,
  title: 'Make the perfect design.'
};

export const Empty = () => {
  return (
    <Task 
      task={{ title: '' }}
    />
  );
}

export const Active = () => (
  <Task 
    task={task}
  />
);

export const Finished = () => (
  <Task 
    task={task}
    checked
  />
);

export const All = () => (
  <>
    <Task task={{ title: '' }}/>
    <Task task={task} />
    <Task task={task} checked />
  </>
)
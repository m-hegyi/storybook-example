import React from 'react';
import clsx from 'clsx';

import style from './Task.module.css';

export default function Task({ task: {id, title}, checked = false }) {
  return (
    <div className={clsx(style.container, !title && style.inactiveContainer, checked && style.finishedContainer)}>
      <input type="checkbox" className={style.checkbox} checked={checked} />
      <input type="text" value={title} className={style['text-input']} placeholder="Create new task" />
    </div>
  );
}
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenAlt } from '@fortawesome/free-solid-svg-icons';

import './TodoItem.css';

const TodoItem = ({ title, removeTodo, updateTodo }) => {
  const [isupdate, setUpdate] = useState(false);
  const [inputVal, setInputVal] = useState(title);
  let input;

  return (
    <div className="todo_item">
      <div className="todo_item_content">
        <div
          className="todo_item_title"
          onClick={() => setUpdate(true)}
        >
          {
            isupdate ?
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onBlur={() => setUpdate(false)}
                ref={el => input = el}
                autoFocus
              /> : <span>{title}<span className="font-awesome-icon_wrapper"><FontAwesomeIcon icon={faPenAlt} size="xs" className="font-awesome-icon_left_margin" /></span></span>
          }
        </div>
        <div className="todo_item_time">Created at:{'' + new Date().toLocaleDateString()}</div>
      </div>
      <div className="todo_item_footer">
        <button
          className="todo_update_btn"
          onClick={() => updateTodo(title, inputVal)}
        >Update</button>
        <button
          className="todo_delete_btn"
          onClick={() => {
            removeTodo(title)
          }}
        >Delete</button>
      </div>
    </div>
  )
}

export default TodoItem

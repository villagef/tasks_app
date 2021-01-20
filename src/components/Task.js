import React from 'react'

export default function Task({task, handleCheck, isDone}) {
    return (
        <li key={task.id}>
            <label>
                <input type="checkbox" onChange={handleCheck} id={task.id} defaultChecked={isDone}/>
                {task.text}
            </label>
      </li>
    )
}

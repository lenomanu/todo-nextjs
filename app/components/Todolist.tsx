import { ITask } from "@/types/task"

interface TodoListProps {
  tasks: ITask[],
}

import React from 'react'
import Task from "./Task"

const Todolist: React.FC<TodoListProps> = ({tasks}) => {
  console.log(tasks)
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Task</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map(task => (
         <Task key={task.id} task = {task}/>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default Todolist



"use client"

import { ITask } from '@/types/task'
import React, { FormEventHandler, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import { deleteTodo, editTodo } from '@/api';

interface TaskPros{
    task: ITask
}
const Task: React.FC<TaskPros> = ({task}) => {
  const router = useRouter();
  const[openModeOpenlEdit, setModelOpenEdit] = useState<boolean>(false);
  const[openModeOpenlDelete, setModelOpenDelete] = useState<boolean>(false);
  const[taskToEdit, settaskToEdit] = useState<string>(task.task);

  const handleOnSubmitEditTodo:FormEventHandler<HTMLFormElement> = async (e)=>{
    e.preventDefault()
    await editTodo({
      id: task.id,
      task: taskToEdit,
    })
    setModelOpenEdit(false)
    router.refresh()

  }
  const handleOnSubmitDeleteTodo:FormEventHandler<HTMLFormElement> = async (e)=>{
    e.preventDefault()
    await deleteTodo(task.id)
    setModelOpenEdit(false)
    router.refresh()

  }
  return (
        <tr key={task.id}>
           <td className='text-base'>{task.task}</td>
           <td className='flex text-xl gap-5'>
           <FaEdit  onClick={()=>setModelOpenEdit(true)}cursor='pointer' className='text-blue-400' />

           <Modal modalOpen = {openModeOpenlEdit} setModalOpen={setModelOpenEdit}>
                <form onSubmit={handleOnSubmitEditTodo}>
                  <h3 className="font-bold text-lg text-red-600 ">Edit Todo Item</h3>
                  <div className="modal-action">
                    <input value = {taskToEdit}  onChange= {(e)=> settaskToEdit(e.target.value)}type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <button type='submit'className="btn">Edit</button>
                  </div>
                </form>
          </Modal>
           <MdDelete onClick={()=>setModelOpenDelete(true)} cursor='pointer' className='text-red-400'/>
           <Modal modalOpen = {openModeOpenlDelete} setModalOpen={setModelOpenDelete}>
                <form onSubmit={handleOnSubmitDeleteTodo}>
                  <h3 className="font-bold text-lg">Are you sure you want to delete?</h3>
                  <div className="modal-action">
                    <input value = {taskToEdit}  readOnly onChange= {(e)=> settaskToEdit(e.target.value)}type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <button type='submit'className="btn">Delete</button>
                  </div>
                </form>
          </Modal>
           </td>
         </tr>
    
  )
}

export default Task

"use client"
import { v4 as uuidv4 } from 'uuid';
import { FaPlus } from "react-icons/fa6";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";


function Addtask() {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const[newTodoValue, setNewTodoValue] = useState<string>('')


  const handleOnSubmitNewTodo:FormEventHandler<HTMLFormElement> = async (e)=>{
    e.preventDefault()
    setNewTodoValue('')
    await addTodo({
      id: uuidv4(),
      task: newTodoValue,
    })
    setModalOpen(false)
    router.refresh()

  }

  return (
    <div>
      <button onClick={()=>setModalOpen(true) } className=" btn btn-primary w-full ">Add new TODO Item <FaPlus /> </button>
      <Modal modalOpen = {modalOpen} setModalOpen={setModalOpen}>
       <form onSubmit={handleOnSubmitNewTodo}>
        <h3 className="font-bold text-lg">Add New Todo Item</h3>
        <div className="modal-action">
          <input value = {newTodoValue}  onChange= {(e)=> setNewTodoValue(e.target.value)}type="text" placeholder="Type here" className="input input-bordered w-full" />
          <button type='submit'className="btn">Add</button>
        </div>
       </form>
      </Modal>
    </div>
  )
}
 
export default Addtask

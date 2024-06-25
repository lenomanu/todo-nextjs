import Image from "next/image";
import Addtask from "./components/Addtask";
import Todolist from "./components/Todolist";
import { getAllTodos } from "@/api";

export default  async function Home() {
  const tasks = await getAllTodos();
  
  return (
    <main>
      <div className="max-w-4xl mx-auto mt-4 text-center ">
        <h1 className=" font-bold ">TODO APP</h1>
        <Addtask/>
        <Todolist tasks={tasks}/>
      </div>
      
    </main>
  );
}

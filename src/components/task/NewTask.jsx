import { useDispatch } from "react-redux";
import { deleteTask,fetchEditTask } from "../../services/redux/todoSlice";


const options=[
  {key:"blue",value:"blue"},
  {key:"red",value:"red"},
  {key:"green",value:"green"},
  {key:"yellow",value:"yellow"},
  {key:"purple",value:"purple"}
]

function NewTask({task}) {
  //const {task,id,status,category}=task
  const dispatch=useDispatch()

  const handleDeleteTask= (id) => {
    dispatch(deleteTask({
        id
    }))
}
const handleTikTask=(id,status)=>{
  dispatch(fetchEditTask({id:id,data:{status:!status}}))

}
const handlEditColor=(newCategory,id)=>{
  dispatch(fetchEditTask({id:id,data:{category:newCategory}}))
}

  return (
    <div className="flex justify-between border-b py-2">
      <div className="flex gap-4 items-center">
        {
          task.status?
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="green"
          className="w-6 h-6 cursor-pointer"
          onClick={()=>handleTikTask(task.id,task.status)}
          
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        :
        <span className="w-5 h-5  border-2   rounded-full cursor-pointer"
          onClick={()=>handleTikTask(task.id,task.status)}
        >

        </span>
        }
       
        
        <div>{task.task}</div>
      </div>

      <div className="flex gap-2 items-center ">
        <div>
          <select className={`border p-2 rounded-md text-${task.category}-500 `}
            value={task.category}
            onChange={
              (e)=>handlEditColor(e.target.value,task.id)
              
                //dispatch she
            }
          >
            {/* <option value={`${task.category}`}>Select a color:</option> */}
            <option value="red" className="text-red-500">red</option>
            <option value="blue" className="text-blue-500">blue</option>
            <option value="green" className="text-green-500">green</option>
            {/* <option value="" className="">nothing</option> */}
            <option value="yellow" className="text-yellow-500">yellow</option>
           

          </select>
        </div>
        <div onClick={() => handleDeleteTask(task.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="red"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default NewTask;

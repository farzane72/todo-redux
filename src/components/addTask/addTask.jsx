//import Button from "../buttons/button";
//import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTask, fetchAddTask } from "../../services/redux/todoSlice";

function AddTask(props) {
  const { newTask } = useSelector((store) => store.todo);
  const dispatch = useDispatch();
  
  function handleSubmit(e) {
    e.preventDefault();
    // if (e.key === "Enter") {
    //   dispatch(fetchAddTask(newTask));
    // }
    dispatch(fetchAddTask({newTask}));
    // selectedTask
    //   ? dispatch(edit({id:selectedTask.id,data:selectedTask.task}))
    //   : newTask !== ""
    //   ? dispatch(submit({id:new Date().toISOString(),task:newTask,status:false}))
    //   : toast(" You didn't enter any word! ");
  }
  // fo form bode  onSubmit={(e) => handleSubmit2(e)}
  return (
    <div className="p-4 border rounded-sm ">
      <form className="flex flex-col gap-4 relative" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className=" w-full p-4 bg-gray-100 outline-none "
          placeholder="Whats needs to be done?"
          value={newTask || ""}
          
          onChange={
            (e) => {
              dispatch(addTask(e.target.value));
            }
            // dispatch(addTask({id:new Date(),task:e.target.value,status:false}))
          }
        />
        {newTask && (
          <button className="absolute right-2 top-4 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        )}
      </form>
    </div>
  );
}

export default AddTask;

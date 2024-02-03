import Color from "../filter-color/Color";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { filter,markAllDone,deleteAllDone } from "../../services/redux/todoSlice";
const options = [
  { key: "blue", value: "blue" },
  { key: "red", value: "red" },
  { key: "green", value: "green" },
  { key: "yellow", value: "yellow" },

];

function Footer() {
  const {activeTasks} =useSelector((store) => store.todo);
  const dispatch = useDispatch();

  const handleDone=()=>{
    dispatch(filter("done"))
  }
  const handleActive=()=>{
    dispatch(filter("active"))
  }
  const handleAll=()=>{
    dispatch(filter("all"))
  }
  const handleMarkAllDone=()=>{
    dispatch(markAllDone())
  }
  const handleDeleteAllDone=()=>{
    dispatch(deleteAllDone())
  }
  

  return (
    <footer className=" absolute bottom-2 left-0 right-0 ">
      <div className="">
        <div className=" flex justify-around p-4">
          <div className="flex flex-col gap-2">
            <p className="text-center text-xl">Actions</p>

            <button className="p-2 rounded bg-blue-500 text-white"
            onClick={handleMarkAllDone}
            >
              Mark All Complited
            </button>
            <button className="p-2 rounded bg-blue-700 text-white"
              onClick={handleDeleteAllDone}
            >
              Clear Complited
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-center text-xl">Remaining Todoes</p>
            <p className="text-center "> {activeTasks.length} items left</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-center text-xl">Filter by Status</p>
            <button className=""  onClick={handleAll}>All</button>
            <button className=""  onClick={handleActive}>Active</button>
            <button className=""  onClick={handleDone}>Complete</button>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-center text-xl">Filter by Color</p>
            {options.map((item) => (
              <Color key={item.key} color={item.value} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

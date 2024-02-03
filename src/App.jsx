// import ToDo from "./toDo/toDo"
import NewTask from "./components/task/newTask";
import List from "./components/list/list";
import Footer from "./components/footer/Footer";
import AddTask from "./components/addTask/addTask";
import {
  fetchAllTodoes,
  fetchActiveTasks,
} from "./services/redux/todoSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const { tasks, statusTasks, colors } = useSelector((store) => store.todo);
  const dispatch = useDispatch();
  let strFilter = colors.join("&category=");
  useEffect(() => {
    dispatch(fetchActiveTasks());

    //  dispatch(done())
    statusTasks === "all" && dispatch(fetchAllTodoes({ params: "" }));
    statusTasks === "done" &&
      dispatch(fetchAllTodoes({ params: `?status=true` }));
    statusTasks === "active" &&
      dispatch(fetchAllTodoes({ params: `?status=false` }));

    (statusTasks === "blue" ||
      statusTasks === "red" ||
      statusTasks === "green" ||
      statusTasks === "yellow") &&
      // dispatch(fetchAllTodoes({ params: `?category=green&category=red` }));
      dispatch(fetchAllTodoes({ params: `?category=${strFilter}` }));

    // statusTasks === "blue" &&
    //   dispatch(fetchAllTodoes({ params: `?category=blue` }));
    // statusTasks === "red" &&
    //   dispatch(fetchAllTodoes({ params: `?category=red` }));
    // statusTasks === "green" &&
    //   dispatch(fetchAllTodoes({ params: `?category=green` }));
    // statusTasks === "yellow" &&
    //   dispatch(fetchAllTodoes({ params: `?category=yellow` }));
  }, [dispatch, statusTasks]);

  return (
    
    <>
      <header>
        <p className="text-center text-red-500 text-3xl my-8">Todoes</p>
      </header>
      <div className=" flex flex-col  items-center align-middle justify-center ">
        <div className="container sm:container sm:mx-auto ">
          <main className="">
            
            <AddTask />
            <List />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

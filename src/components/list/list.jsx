
import Title from "../title/title";

import { useSelector } from "react-redux";
import NewTask from "../task/newTask";

function List() {
  const { tasks, statusTasks } = useSelector((store) => store.todo);

  return (
    <div className="mt-4 p-4 w-full h-[300px] overflow-auto touch-pan-y">
      {tasks.length === 0 && statusTasks === "done" && (
        <Title>You didn't do anything</Title>
      )}
      {tasks.length === 0 && statusTasks === "active" && (
        <Title>You did all your tasks</Title>
      )}
      {tasks.length === 0 && statusTasks === "all" && (
        <Title>You didn't enter any task</Title>
      )}

     
        {tasks.map((task) => (
          <NewTask task={task} key={task.id} />
        ))}
      
    </div>
  );
}

export default List;

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { filter,chooseColor,removeColor } from "../../services/redux/todoSlice";

function Color({ color }) {
  const dispatch = useDispatch();

  const { colors } = useSelector((store) => store.todo);


  const handleChooseColor = () => {
    
    dispatch(chooseColor(color))

  };
  const handleChangeColor = () => {
    dispatch(removeColor(color))
  
  };


  return (
    <div>
      <div className="flex items-center  gap-2">
        {
       // statusTasks === `${color}` ? (
          colors.includes(color,0)?(
          <div className="w-6 h-6 border rounded flex items-center justify-center"
            onClick={handleChangeColor}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </div>
        ) : (
          <div className="w-6 h-6 border rounded flex items-center justify-center"
          onClick={handleChooseColor}
          ></div>
        )}

        <div className={`w-8 h-6 border rounded bg-${color}-500`}></div>
        <p className="">{color}</p>
      </div>
    </div>
  );
}

export default Color;

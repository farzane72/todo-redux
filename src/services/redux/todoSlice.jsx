import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  newTask: null,
  tasks: [],
  statusTasks: "all",
  colors: [],
  activeTasks: [],
  loading: false,


  // selectedTask: null,
  // isSubmit: false,
  isModal: "",
 // selectedId: 0,

};
//-------------------------------------------------------------------------------------------------
//const array=category.map(()=>{})
//category=blue&category=green
//-----------------
export const fetchAllTodoes = createAsyncThunk(
  "todo/fetchAllTodoes",
  async ({ params }, thunkAPI) => {
    // console.log("test api");
    const res = await axios.get(`http://localhost:3000/todos/${params}`);
    return res.data;
  }
);
// export const fetchFilterStatusTodoes = createAsyncThunk(
//   "todo/fetchFilterStatusTodoes",
//   async ({endPoint}, thunkAPI) => {
//     // console.log("test api");
//     const res = await axios.get(`http://localhost:3000/todoes/${endPoint}`);
//     return res.data;
//   }
// );

export const fetchActiveTasks = createAsyncThunk(
  "todo/fetchActiveTasks",
  async (Arg, thunkAPI) => {
    // console.log("test api");
    const res = await axios.get(`http://localhost:3000/todos?status=false`);
    return res.data;
  }
);

export const deleteTask = createAsyncThunk(
  "todo/deleteTask",
  async ({ id }, thunkAPI) => {
    const res = await axios.delete(`http://localhost:3000/todos/${id}`);
    return {
      data: res.data,
      id,
    };
  }
);
export const fetchAddTask = createAsyncThunk(
  "todo/fetchAddTask",
  async ({ newTask }, thunkAPI) => {
    const res = await axios.post("http://localhost:3000/todos", {
      task: newTask,
      status: false,
      category: "blue",
    });

    return res.data;
  }
);

export const fetchEditTask = createAsyncThunk(
  "todo/fetchEditTask",
  async ({ id, data }, thunkAPI) => {
    const res = await axios.patch(`http://localhost:3000/todos/${id}`, data);
    console.log(res.data);
    return res.data;
  }
);

//----------------------------------------------------------------------------------------------------------
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask(state, action) {
      state.newTask = action.payload;
    },
    filter(state, action) {
      state.statusTasks = action.payload;
    },
    chooseColor(state, action) {
      state.colors = [...state.colors, action.payload];
      state.statusTasks = action.payload;
      // state.statusTasks="filterColor"
    },
    removeColor(state, action) {
      const newArray = [];

      for (let i = 0; i < state.colors.length; i++) {
        if (state.colors[i] !== action.payload) {
          newArray.push(state.colors[i]);
        }
      }
      state.colors = [...newArray];
      if (state.colors.length === 0) state.statusTasks = "all";
      else state.statusTasks = action.payload;
      // state.statusTasks="filterColor"
    },
    markAllDone(state, action) {
      state.tasks = state.tasks.map((item) => item.status === false ? {...item,status:true}: item)
    },
    deleteAllDone(state, action) {
      state.tasks = state.tasks.filter((item) => item.status === false && item )
    },

    
  },
  
  extraReducers: (builder) =>
    builder

      //------------------------------get----------------------------------------------------------------------------
      .addCase(fetchAllTodoes.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchAllTodoes.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchAllTodoes.rejected, (state, action) => {
        state.loading = false;
        // state.errors = action.payload
      })
      //------------------------------delete----------------------------------------------------------------------------

      .addCase(deleteTask.pending, (state, action) => {})
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteTask.rejected, (state, action) => {
        // state.errors = action.payload
      })
      //------------------------------add----------------------------------------------------------------------------

      .addCase(fetchAddTask.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchAddTask.fulfilled, (state, action) => {
        state.tasks = [...state.tasks, action.payload];
        state.newTask = "";
        state.loading = false;
      })
      .addCase(fetchAddTask.rejected, (state, action) => {
        // state.errors = action.payload
      })

      //------------------------------edit----------------------------------------------------------------------------
      .addCase(fetchEditTask.pending, (state, action) => {
        //state.loading=true
      })
      .addCase(fetchEditTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
        //state.newTask=""
        //state.loading=false
      })
      .addCase(fetchEditTask.rejected, (state, action) => {
        // state.errors = action.payload
      })
      //-----------------------------------ActivesTasks-------------------------------------------------------------------------

      .addCase(fetchActiveTasks.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchActiveTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.activeTasks = action.payload;
      })
      .addCase(fetchActiveTasks.rejected, (state, action) => {
        state.loading = false;
      }),
});
//{task:action.payload,status:false,category:"blue",id:new Date().toISOString()}]

export const {
  addTask,
  filter,
  removeColor,
  markAllDone,
  deleteAllDone,
  chooseColor,
  modal,
  active,

  edit,
  select,
  done,
  
  all,
 error,
 loading,
 
  
} = todoSlice.actions;
export default todoSlice.reducer;

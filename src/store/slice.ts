import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { habits } from "../data";
import { IHabitProps } from "../types";

interface IInitialState {
  habits: IHabitProps[];
  arr: any;
}

const initialState: IInitialState = {
  habits: habits,
  arr: ["777"],
};

export const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<IHabitProps>) => {
      //   state.habits = [...state.habits, action.payload]; // oldSchool
      state.habits.push(action.payload);
    },
    deleteHabit: (state, action: PayloadAction<Number>) => {
      state.habits = state.habits.filter(
        (habit) => habit.id !== action.payload
      );
    },
    pushToArr: (state, action: PayloadAction<String>) => {
      state.arr.push(action.payload);
    },
  },
});

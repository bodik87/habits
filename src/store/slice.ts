import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHabitProps } from "../components/Habit";
import { habits } from "../data";

interface IInitialState {
  habits: IHabitProps[];
}

const initialState: IInitialState = {
  habits: habits,
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
  },
});

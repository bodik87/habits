import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { habits } from "../data";
import { IHabitProps } from "../types";

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
      state.habits.push(action.payload);
    },
    deleteHabit: (state, action: PayloadAction<Number>) => {
      state.habits = state.habits.filter(
        (habit) => habit.id !== action.payload
      );
    },
    addCheckedDay: (state, action: PayloadAction<any>) => {
      state.habits.map((habit) =>
        habit.id === action.payload.id
          ? habit.checkedDays.push(action.payload.date)
          : habit
      );
    },
    deleteCheckedDay: (state, action: PayloadAction<any>) => {
      state.habits.map((habit) =>
        habit.id === action.payload.id &&
        habit.checkedDays.includes(action.payload.date)
          ? (habit.checkedDays = habit.checkedDays.filter(
              (item) => item !== action.payload.date
            ))
          : habit
      );
    },
  },
});

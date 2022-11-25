import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const registers: any[] = [];

export const symptSlice = createSlice({
  name: 'test',
  initialState: {
    status: 'ok',
    registers,
  },
  reducers: {
    addRegister: (state, action: PayloadAction<any>) => {
      state.registers.push(action.payload);
    },
  },
});

export const { addRegister } = symptSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

const resumeSlice = createSlice({
  name: 'resume',
  initialState: {
    url: null,
  },
  reducers: {
    uploadResume: (state, action) => {
      state.url = action.payload;
    },
  },
});

export const { uploadResume } = resumeSlice.actions;
export default resumeSlice.reducer;

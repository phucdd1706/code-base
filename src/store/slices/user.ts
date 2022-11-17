// THIRD-PARTY IMPORTS
import { createSlice } from '@reduxjs/toolkit';

// PROJECT IMPORTS
import { DefaultRootStateProps } from '~/types';

const initialState: DefaultRootStateProps['user'] = {
  users: [],
  pageCount: 0,
  currentPage: 1,
  error: null
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
});

export default slice.reducer;

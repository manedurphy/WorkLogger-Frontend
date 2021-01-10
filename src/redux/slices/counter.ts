import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
}

interface CounterAction {
    payload: CounterState;
}

const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        update: (state: CounterState, action: CounterAction) => {
            return {
                ...state,
                value: action.payload.value,
            };
        },
    },
});

export default CounterSlice.reducer;

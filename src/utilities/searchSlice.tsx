import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface SearchState {
    [key: string]: string[]
}

const initialState: SearchState = {}

export const searchslice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        cacheResult: (state, action: PayloadAction<SearchState>) => {
            return { ...state, ...action.payload }
        },
      
    }
})

export const { cacheResult } = searchslice.actions
export default searchslice.reducer
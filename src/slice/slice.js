import {createSlice} from '@reduxjs/toolkit'

const initialState={
    users:[],
}

const userRedux=createSlice({
    name:"users",
    initialState,
    reducers:{
        setUsers:(state,action)=>{
            state.users=action.payload
        }
    }
})
export const {setUsers} =userRedux.actions;
export default userRedux.reducer;
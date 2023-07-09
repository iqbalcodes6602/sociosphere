import { Palette } from "@mui/icons-material";
import {createSlice} from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState={
    mode:"light",
    user: null,
    token:null,
    posr:[],
}

export const authSlice= createSlice({
    name:"auth",
    initialState,
    reducers:{
         setMode:(state)=>{
            state.mode=state.mode==="light" ? "dark" : "ligth";
         },
         setLogin:(state,action)=>{
            state.user=action.payload.user;
            state.token=action.payload.token;
         },
         setLogout:(state)=>{
            state.user=null;
            state.token=null;
         }, 
         setFriends:(state,action)=>{
            if(state.user){
                state.user.friends=action.payload.friends;
            }
            else{
                console.error("user friends non-existent :(")
            }
         },
         setPosts:(state,action)=>{
            state.posts=action.payload.pots;
         },
         setPost:(state,action)=>{
            const updatePosts=state.post.map((post)=>{
                if(post._id===action.payload.post._id)return action.payload.post;
                return post;
            });
            state.post=updatePosts;
         }
    }
})


export const{setMode,setLogin,setLogout,setFriends,setPost,setPosts}=authSlice.actions;

export default authSlice.reducer;

import {profileAPI} from "../api/api";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';



let initialState = {
    PostsData: [
        {id: '1', message: "Ubi est talis ausus?", likesCount: "15"},
        {id: '2', message: "Ho-ho-ho! urchin of madness?", likesCount: "125"},
        {id: '3', message: "Never rob a woodchuck?", likesCount: "515"},
        {id: '4', message: "Ho-ho-ho! death of punishment?", likesCount: "22"}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            }

            return {
                ...state,
                PostsData: [...state.PostsData, newPost],
                newPostText: '',
            }
/*            let stateCopy = {...state};
            stateCopy.PostsData = [...state.PostsData]
            stateCopy.PostsData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;*/}
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
 /*            let stateCopy = {...state};
             stateCopy.newPostText = action.newText;
            return stateCopy;}*/
             default: return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}


export default profileReducer;
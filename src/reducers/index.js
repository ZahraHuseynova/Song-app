import { combineReducers } from "redux";

const songReducer =()=>{
    return [
        {title:'No Scrubs',duration:'4:05'},
        {title:'A little thing gave you away',duration:'5:02'},
        {title:'All stars',duration:'3:30'},
        {title:'Numb',duration:'2:05'},

    ]
};

const selectedSongReducer =(selectedSong=null,action)=>{
    if(action.type=== 'SELECT_SONG') {
        return action.payload;
    }
    return selectedSong;

}

export default combineReducers({
    songs:songReducer,
    selectedSong:selectedSongReducer
});
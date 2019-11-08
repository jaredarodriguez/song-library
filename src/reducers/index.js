import { combineReducers } from 'redux'; 

const songsReducer = () => {
    return [
        { title: 'Lithium', duration: '4:16'},
        { title: 'No Quarter', duration: '7:03'},
        { title: 'Macarena', duration: '2:30'},
        { title: 'Feel Good Hit of the Summer', duration: '2:43'}
    ];
}; 

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong; 
}

export default combineReducers({
    songs: songsReducer, 
    selectedSong: selectedSongReducer, 
})
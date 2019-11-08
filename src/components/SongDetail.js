import React from 'react'; 
import { connect } from 'react-redux'; 

const SongDetail = ({ song }) => {
    return <div>{song.title}</div>
}

const mapStateToProps = (state) => {
   return { mySelectedSong: state.selectedSong }
}
export default connect(mapStateToProps)(SongDetail); 
import { Link } from "react-router-dom";
import SongRow from "./SongRow";

export default function SongList(props) {
  return (
    <div>
      <h2>All trending songs</h2>

      {props.songs.map(song =>
        <Link key={song.id} to={`song/${song.id}`}><SongRow song={song}></SongRow></Link>
      )}
      <h3>Please select a song to navigate to the song detail page.</h3>
    </div>
  )
}

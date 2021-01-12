
import {
    Link,
} from "react-router-dom";
import SongRow from "./SongRow";

function OtherSongs({ songs, author }) {
    if (songs && songs.length > 0) {

        return songs.map(s => <div key={s.id}><Link to={`/song/${s.id}`}><SongRow song={s}></SongRow></Link></div>)
    }
    else return <div>{author} has only one song in this system.</div>
}

export default OtherSongs
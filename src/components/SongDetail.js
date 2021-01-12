
import {
  useParams,
} from "react-router-dom";
import OtherSongs from "./OtherSongs";

const SongDetail = ({ songs }) => {
  let { songId } = useParams();

  let songDetail = songs.find(s => s.id === songId);
  let otherSongs = songs.filter(s => s.author === songDetail.author && s.id !== songDetail.id)

  return <div>
    <h3>Title: {songDetail.title}</h3>
    <h3>Author:{songDetail.author} </h3>
    <h3>Published at: {songDetail.publishedDate}</h3>
    <p>Short lyric:</p>
    <p className="lyrics">{songDetail.lyric} </p>
    { }
    <div>Other available songs of <b>{songDetail.author}</b>:</div>
    <OtherSongs songs={otherSongs} author={songDetail.author} />
  </div>;
}

export default SongDetail
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import './App.css';
import externalSongs from './songs'

const songs = [...externalSongs].sort((a, b) => new Date(a.publishedDate) - new Date(b.publishedDate))
function App() {
  const [author, setAuthor] = useState("");
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul className="horizontal">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/authors">Add new song</Link>
              </li>
              {/* <li>
                <Link to="/users">Users</Link>
              </li> */}
              <li>
                <Link to="/songs">Songs</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/authors">
              <Authors />
            </Route>
            <Route path="/author/:authorId">
              <AuthorDetail />
            </Route>
            <Route path="/songs">
              <Songs songs={songs} />
            </Route>
            <Route path={`/song/:songId`}>
              <Song songs={songs} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;


function Home() {
  return <h2>Welcome to the middle checkpoint!</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
function Songs(props) {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();
  console.log('props', props)
  return (
    <div>
      <h2>All trending songs</h2>

      {props.songs.map(song =>
        <Link key={song.id} to={`song/${song.id}`}><SongRow song={song}></SongRow></Link>
      )}

      {/* The Songs page has its own <Switch> with more routes
          that build on the /songs URL path. You can think of the
          2nd <Route> here as an "index" page for all songs, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={path}>
          <h3>Please select a song to navigate to the song detail page.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Song({ songs }) {
  // let { topicId } = useParams();
  // let location = useLocation();
  let { songId } = useParams();

  let songDetail = songs.find(s => s.id === songId);
  let otherSongs = songs.filter(s => s.author === songDetail.author && s.id !== songDetail.id)
  // console.log('songDetail', songDetail)
  // console.log('otherSongs', otherSongs)
  // console.log('songs', songs)
  return <div>
    <h3>Title: {songDetail.title}</h3>
    <h3>Author:{songDetail.author} </h3>
    <h3>Published at: {songDetail.publishedDate}</h3>
    <p>Short lyric:</p>
    <p className="lyrics">{songDetail.lyric} </p>
    {}
    <div>Other available songs of {songDetail.author}:</div>
    <OtherSongs songs={otherSongs} author={songDetail.author} />
  </div>;
}

function OtherSongs({ songs, author }) {
  if (songs && songs.length > 0) {

    return songs.map(s => <div key={s.id}><Link to={`/song/${s.id}`}><SongRow song={s}></SongRow></Link></div>)
  }
  else return <div>{author} has only one song in this system.</div>
}

function SongRow({ song }) {
  return <div className="song-row">{song.title} - {song.author} </div>
}

function Authors() {
  var authors = [...new Set(songs.map(s => s.author))]
  return <div>{authors.map(author => <div key={author}>{author}</div>)}</div>;
}
function AuthorDetail({ authorDetail }) {
  return <h2>AuthorDetail</h2>;
}
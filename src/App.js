import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import AddSong from './components/AddSong';
import SongDetail from './components/SongDetail';
import SongList from './components/SongList';
// import externalSongs from './songs'
import { useSelector } from 'react-redux';

// const sortedSong = [...externalSongs].sort((a, b) => new Date(a.publishedDate) - new Date(b.publishedDate))
function App() {
  const songListFromStore = useSelector(state => state.songs.songList)
  // const [currentSongs, setSongs] = useState(songListFromStore);

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
                <Link to="/add-song">Add new song</Link>
              </li>
              <li>
                <Link to="/songs">Songs</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/add-song">
              <AddSong />
            </Route>
            <Route path="/songs">
              <SongList songs={songListFromStore} />
            </Route>
            <Route path={`/song/:songId`}>
              <SongDetail songs={songListFromStore} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return <h2>Welcome to the middle checkpoint!</h2>;
}

export default App;

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
import externalSongs from './songs'

const sortedSong = [...externalSongs].sort((a, b) => new Date(a.publishedDate) - new Date(b.publishedDate))
function App() {

  const [currentSongs, setSongs] = useState(sortedSong);

  const handleAddSong = (newSong) => {
    setSongs([newSong, ...currentSongs])
  }

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
              <AddSong onAddSong={handleAddSong}/>
            </Route>
            <Route path="/songs">
              <SongList songs={currentSongs} />
            </Route>
            <Route path={`/song/:songId`}>
              <SongDetail songs={currentSongs} />
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

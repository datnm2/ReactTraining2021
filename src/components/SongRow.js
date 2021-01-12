import React from 'react'

export default function SongRow({ song }) {
  return <div className="song-row">{song.title} - {song.author} </div>
}

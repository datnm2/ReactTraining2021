import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function AddSong({ onAddSong }) {
    const [songName, setSongName] = useState("");
    const [singerName, setSingerName] = useState("");
    const [lyric, setLyric] = useState("");
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (songName && singerName && lyric) {
            const newId = uuidv4()
            onAddSong({
                id: newId,
                author: singerName,
                title: songName,
                lyric: lyric,
                publishedAt: new Date().toISOString()
            })
            history.push(`/song/${newId}`)
        } else {
            alert('Please input all the fields!')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Hello! You are adding the song Name: `<b>{songName}</b>` of singer: `<b>{singerName}</b>` </h1>
                <p>Enter the song name:</p>
                <input
                    type='text'
                    name='songName'
                    onChange={e => setSongName(e.target.value)}
                />
                <p>Enter the singer name:</p>
                <input
                    type='text'
                    name='singerName'
                    onChange={e => setSingerName(e.target.value)}
                />
                <p>Enter the short lyric:</p>
                <input
                    type='text'
                    name='lyric'
                    onChange={e => setLyric(e.target.value)}
                />
                <div><input type='submit' disabled={!songName || !singerName || !lyric} /></div>
            </form>
        </div>
    )
}


function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        // eslint-disable-next-line 
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}
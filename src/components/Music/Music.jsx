import React from 'react';
import './Music.css'; // Assuming you have a CSS file for Music component styles

const Music = () => {
    const albums = [
        {
            title: 'Album One',
            cover: '/assets/images/album1.jpg',
            tracks: [
                { title: 'Track 1', url: 'https://link-to-track1.com' },
                { title: 'Track 2', url: 'https://link-to-track2.com' },
                { title: 'Track 3', url: 'https://link-to-track3.com' },
            ],
        },
        {
            title: 'Album Two',
            cover: '/assets/images/album2.jpg',
            tracks: [
                { title: 'Track 1', url: 'https://link-to-track1.com' },
                { title: 'Track 2', url: 'https://link-to-track2.com' },
                { title: 'Track 3', url: 'https://link-to-track3.com' },
            ],
        },
    ];

    return (
        <div className="music-section">
            <h2>Music</h2>
            <div className="albums">
                {albums.map((album, index) => (
                    <div className="album" key={index}>
                        <img src={album.cover} alt={`${album.title} Cover`} className="album-cover" />
                        <h3>{album.title}</h3>
                        <ul className="track-list">
                            {album.tracks.map((track, trackIndex) => (
                                <li key={trackIndex}>
                                    <a href={track.url} target="_blank" rel="noopener noreferrer">
                                        {track.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Music;
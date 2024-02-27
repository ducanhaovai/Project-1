import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
Album.propTypes = {
    album: PropTypes.object.isRequired,

};

function Album({ album }) {
    return (
        <div className='album'>
            <div className='album_thumbnailUrl'>
                <img src={album.thumbnailUrl} />
            </div>
            <p className='album_name'>{album.name}</p>

        </div>
    );
}

export default Album;
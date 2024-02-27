import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc Lofi Chill Gây Nghiện',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/5/4/9/45493e859cde749c75fb4377c14d0db3.jpg'
        },
        {
            id: 2,
            name: 'EDM Việt Gây Nghiện',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/c/e/9/8ce9abbbdb04cd95262082d923a0f7dd.jpg'
        },
        {
            id: 3,
            name: 'Nhạc Trẻ Vinahouse',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/d/5/c/fd5cc75f10ef7e068d299b91ba16e5e5.jpg'
        },
    ]
    return (
        <div>
            <h2> Co the ban thich</h2>
            <AlbumList albumList={albumList} />

        </div>
    );
}

export default AlbumFeature;
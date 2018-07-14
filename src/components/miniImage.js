import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

const MiniImage = ({imgSrc, imgAlt}) => {
    return (
        <figure>
            <img
                className = 'miniImage br bs' 
                src = {imgSrc}
                alt = {imgAlt}
            />
            <figcaption>{imgAlt}</figcaption>
        </figure>
    );
}

MiniImage.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired
}

export default MiniImage;
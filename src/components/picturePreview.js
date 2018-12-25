import React, { Component } from 'react';

const PreviewPicture = (props) => {
    const { pictureUrl } = props;
    return(
        <img width="150" height="150" src={pictureUrl} />
    )
}

export default PreviewPicture
import React from 'react';

const ImageViewer = ({ imageId }) => {
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <img
                src={`https://picsum.photos/id/${imageId}/350/350`}
                alt={``}
            />
        </div>
    );
};

export default ImageViewer;

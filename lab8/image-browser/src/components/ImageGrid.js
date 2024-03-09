import React from 'react';

// Example images IDs, you can replace these with dynamic data
const imageIds = Array.from({ length: 30 }, (_, i) => i + 1);

const ImageGrid = ({ onSelectImage }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {imageIds.map((id) => (
                <img
                    key={id}
                    src={`https://picsum.photos/id/${id}/50/50`}
                    alt={''}
                    onClick={() => onSelectImage(id)}
                    style={{ margin: '5px', cursor: 'pointer' }}
                />
            ))}
        </div>
    );
};

export default ImageGrid;

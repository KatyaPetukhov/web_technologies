import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ImageGrid from './components/ImageGrid';
import ImageViewer from './components/ImageViewer';


function App() {
  const [selectedImageId, setSelectedImageId] = useState(null);

  return (
    <div>
      <ImageGrid onSelectImage={setSelectedImageId} />
      {selectedImageId && <ImageViewer imageId={selectedImageId} />}
    </div>
  );
}


export default App;

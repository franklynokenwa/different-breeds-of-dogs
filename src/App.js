import React,{useState, useEffect} from 'react'

import './App.css';

function App() {
  const api = "https://dog.ceo/api/breed/hound/images";

  const [imageUrls, setImageUrls] = useState([])

  useEffect(() => {
    fetch(api)
    .then(response => response.json())
    .then(data => setImageUrls(data.message))

  }, [])

  return (
    <div className="grid-container" >
      {
        imageUrls.map((imageUrl) => {
          return(
            <div>
              <img className="grid-item" src={imageUrl} alt="" />
            </div>
          )
        })
      }
    </div>
  );
}

export default App;

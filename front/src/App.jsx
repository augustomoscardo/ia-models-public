import { useState } from 'react'
import './App.css'

function App() {
  const [imgSrc, setImgSrc] = useState(null)
  const [caption, setCaption] = useState("<Caption>")
  // https://cdn.britannica.com/47/233847-050-BF9D7855/Boxer-dog-face.jpg

  function generateCaption() {
    setCaption("New Captio")
  }

  return (
    <>
      <h1>Caption Generator</h1>
      <div className='url-form'>
        <input type="text" onChange={(e) => setImgSrc(e.target.value)} />
        <button onClick={generateCaption}>Generate</button>
      </div>
      <div className='captioned-image'>
        <img src={imgSrc} alt="" height={200} />
        <span>{caption}</span>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { generateCaption, translateCaption } from './models/api'

function App() {
  const [imgSrc, setImgSrc] = useState(null)
  const [caption, setCaption] = useState("<Caption>")
  const [captionPTBR, setCaptionPTBR] = useState("<Caption PT-BR>")
  // https://images.unsplash.com/photo-1442605527737-ed62b867591f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym94ZXIlMjBkb2d8ZW58MHx8MHx8fDA%3D

  async function addCaption() {
    setCaption("Gerando legenda...")
    const caption = await generateCaption(imgSrc)
    setCaption(caption[0].generated_text)
    
    setCaptionPTBR("Traduzindo legenda...")
    const captionPTBR = await translateCaption(caption)
    setCaptionPTBR(captionPTBR[0].translated_text)
  }

  return (
    <>
      <h1>Caption Generator</h1>
      <div className='url-form'>
        <input type="text" onChange={(e) => setImgSrc(e.target.value)} />
        <button onClick={addCaption}>Generate</button>
      </div>
      <div className='captioned-image'>
        <img src={imgSrc} alt="" height={200} />
        <span>{caption}</span>
        <span>{captionPTBR}</span>
      </div>
    </>
  )
}

export default App

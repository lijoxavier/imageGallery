import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Upload from './components/Upload/Upload'
import ImgGallery from './components/imgGallery/ImgGallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ImgGallery/>
    </>
  )
}

export default App

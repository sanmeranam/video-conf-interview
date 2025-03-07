import { useEffect, useState } from 'react'
import './App.css'
import VideoPage from './container/VideoPage'

function App() {
  const [roomId, setRoomId] = useState(null)

  useEffect(() => {
    // get usl params
    const urlParams = new URLSearchParams(window.location.search)
    const myParam = urlParams.get('roomId')
    if (myParam) {
      setRoomId(myParam)
    }
  }, [])

  return (
    <>
      {roomId ? <VideoPage roomId={roomId} /> : <p>Room ID not found</p>}
      {/* <LiveKit/> */}
      {/* <MediasoupVideoCall/> */}
    </>
  )
}

export default App

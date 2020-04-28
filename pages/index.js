import { useState } from 'react'
import { useRouter } from 'next/router' 

function makeid(length=4) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

export default function Home() {
  const [roomId, setRoomId] = useState('')
  const router = useRouter()

  return (
    <>
      <div className="hero is-medium is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">Kuestions</h1>
            <p className="subtitle is-4">Easy questions and answers for online conference teaching.</p>
            <div className="field has-addons">
              <div className="control" style={{ width: '100%' }}>
                <input value={roomId} onChange={e => setRoomId(e.target.value)} className="input" type="text" placeholder="Enter your room id" />
              </div>
            </div> 

            <button onClick={e => {router.push('/' + roomId)}} type='submit' className="button is-info">
              Go to room
            </button>
          </div>
        </div>
      </div>

      <div className="hero is-medium is-light">
        <div className="hero-body">
          <div className="container">
            <h2 className="subtitle is-3">How it works</h2>
            <p style={{ maxWidth: '50rem' }}>
              Every class has a "Room code", a passcode which directs students and teachers to their room. There, students can ask questions and the teacher can see them in real time.<br /><br />
              Students can join either by clicking a link or entering the code.
            </p>
          </div>
        </div>
      </div>

      <div className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <h2 className="subtitle is-4">Create a new room</h2>
            <button onClick={e => {router.push('/' + makeid())}} type='submit' className="button is-info">
              Go to your new room
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

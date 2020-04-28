import { Field, Control, Label, Input } from 'react-bulma-components'
import useQuestion from '../util/useQuestion'
import { useState } from 'react'

const AddQuestion = ({ roomid }) => {
  const { addQuestion } = useQuestion(roomid)
  const [question, setQuestion] = useState('')

  return (
    <div className="hero is-light">
      <div className="hero-body">
        <div className="container" style={{ padding: '0 8px' }}>
          <h2 className="subtitle">Submit a question</h2>
          <form onSubmit={e => {
            e.preventDefault();
            addQuestion({ title: question })
          }}>
            <div className="field has-addons">
              <div className="control" style={{ width: '100%' }}>
                <input onChange={e => setQuestion(e.target.value)} value={question} className="input" type="text" placeholder="Enter your question" />
              </div>
              <div className="control">
                <button type='submit' className="button is-info">
                  Send to room
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddQuestion
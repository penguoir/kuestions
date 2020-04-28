import { Field, Control, Label, Input } from 'react-bulma-components'
import useQuestion from '../util/useQuestion'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import * as Latex from 'react-latex'

const AddQuestion = ({ roomid }) => {
  const { loading, addQuestion } = useQuestion(roomid)
  const [question, setQuestion] = useState('')
  const [isLatex, setIsLatex] = useState(false)

  return (
    <>
      <Head>
        <link
          href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="hero is-light">
        <div className="hero-body">
          <div className="container" style={{ padding: '0 8px' }}>
            <h2 className="subtitle">Submit a question</h2>
            <form onSubmit={e => {
              e.preventDefault();
              addQuestion({ title: question, advanced: isLatex })
            }}>
              <div className="field">
                <div className="control" style={{ width: '100%' }}>
                  <textarea style={{ height: '5rem' }} onChange={e => setQuestion(e.target.value)} value={question} className="input" type="text" placeholder="Enter your question" />
                </div>
              </div>
              <div className="field">
                <label className="checkbox">
                  <input type="checkbox" checked={isLatex} onChange={e => setIsLatex(e.target.checked)} />
                  Use advanced formatting (TeX)
                </label>
              </div>
              <button type='submit' className={`button is-info is-pulled-right ${loading && 'is-loading'}`}>
                Send to room
              </button>
            </form>

            {isLatex ? (
              <>
                <h4>Preview</h4>
                <Latex>{question}</Latex>
              </>
            ) : <></>}
          </div>
        </div>
      </div>
    </>
  )
}

export default AddQuestion
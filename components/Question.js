import { Card, Button } from 'react-bulma-components'
import useQuestion from '../util/useQuestion'
import * as moment from 'moment'
import * as Latex from 'react-latex'
import { useState } from 'react'
import useInterval from '@use-it/interval'

const Question = ({ snapshot }) => {
  const [ago, setAgo] = useState('')
  const { updateQuestion, removeQuestion } = useQuestion(snapshot.data().roomid)
  const isAnswered = snapshot.data().isAnswered

  useInterval(() => {
    setAgo(moment(snapshot.data().timestamp.toDate()).fromNow())
  }, 1000)

  return (
    <div className="column is-one-third">
      <Card style={{
          backgroundColor: isAnswered && '#eee',
          boxShadow: isAnswered && 'none'
      }}>
        <Card.Content style={{ textDecoration: isAnswered ? 'line-through' : 'none' }}>
          <p>
            {snapshot.data().advanced ? (
              <Latex>
                {snapshot.data().title}
              </Latex>
            ) : (
              snapshot.data().title
            )}
          </p>
          <small>Asked {ago}</small>
        </Card.Content>
        <Card.Footer>
          <Card.Footer.Item
            onClick={e => updateQuestion(snapshot.id, { isAnswered: true })}
            renderAs='a'
          >
            <span>Answered</span>
          </Card.Footer.Item>
          <Card.Footer.Item
            onClick={e => removeQuestion(snapshot.id)}
            renderAs='a'
          >
            <span className="is-danger">Remove</span>
          </Card.Footer.Item>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default Question

import { Card, Button } from 'react-bulma-components'
import useQuestion from '../util/useQuestion'

const Question = ({ snapshot }) => {
    const { updateQuestion, removeQuestion } = useQuestion(snapshot.data().roomid)
    const isAnswered = snapshot.data().isAnswered

    return (
        <div className="column is-one-third">
            <Card style={{
                backgroundColor: isAnswered && '#eee',
                boxShadow: isAnswered && 'none'
            }}>
                <Card.Content style={{ textDecoration: isAnswered ? 'line-through' : 'none' }}>
                    {snapshot.data().title}
                </Card.Content>
                <Card.Footer>
                    <Card.Footer.Item
                        onClick={e => updateQuestion(snapshot.id, { isAnswered: true })}
                        renderAs='a'
                        href='#'
                    >
                        Mark as answered
                    </Card.Footer.Item>
                    <Card.Footer.Item
                        onClick={e => removeQuestion(snapshot.id)}
                        renderAs='a'
                    >
                        <span className="is-danger">Remove question</span>
                    </Card.Footer.Item>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Question

import { Container } from 'react-bulma-components'

const Questions = (props) => {
    return (
        <Container style={{ margin: '1rem auto', padding: '1rem 8px' }}>
            <h2 className="subtitle">Questions</h2>
            <div className="columns">
                {props.children}
            </div>
        </Container>
    )
}

export default Questions

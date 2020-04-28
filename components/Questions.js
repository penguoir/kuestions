import { Container } from 'react-bulma-components'

const Questions = (props) => {
  return (
    <section className="section">
      <Container>
        <h2 className="subtitle">Questions</h2>
        {!(props.children && props.children.length) && (
            <div className="notification is-danger">
              No questions.
            </div>
        )}
        <div className="columns is-multiline">
          {props.children}
        </div>
      </Container>
    </section>
  )
}

export default Questions

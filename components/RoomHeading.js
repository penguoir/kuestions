
import { Container, Heading, Hero } from 'react-bulma-components'

const RoomHeading = ({ roomid, questions }) => {
    return (
      <Hero size="medium" color="primary">
        <Hero.Body>
          <Container>
            <Heading>
              Your room code is <span className="tag is-large">{roomid}</span>
            </Heading>
            {(questions && questions.length) ? (
              <Heading subtitle size={4}>
                {questions.length} question(s)
              </Heading>
            ) : (
              <Heading subtitle size={4}>
                No questions
              </Heading>
            )}
          </Container>
        </Hero.Body>
      </Hero>
    )
}

export default RoomHeading

import { Container, Heading, Hero } from 'react-bulma-components'

const RoomHeading = ({ roomid, questions }) => {
    return (
      <Hero size="medium" color="primary">
        <Hero.Body>
          <Container>
            <Heading>
              Your room code is <em>{roomid}</em>
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

            <br />

            <Heading size={4} style={{ marginBottom: '.5rem' }}>
              Students can join through this link:
            </Heading>
            <input onFocus={e => e.target.select()} className="input" readOnly value={"https://kuestions.now.sh/" + roomid} type="text"/>
          </Container>
        </Hero.Body>
      </Hero>
    )
}

export default RoomHeading
import { useRouter } from 'next/router'
import useQuestions from '../util/useQuestions'
import RoomHeading from '../components/RoomHeading'
import Question from '../components/Question'
import Questions from '../components/Questions'
import AddQuestion from '../components/AddQuestion'
import Layout from '../components/Layout'

const RoomPage = () => {
  const router = useRouter()
  const roomid = router.query.roomid
  const { questions, error } = useQuestions(roomid)
  
  return (
    <Layout>
      <RoomHeading roomid={roomid} questions={questions} />
      <AddQuestion roomid={roomid} />

      <Questions>
        {questions && questions.map(question => (
          <Question key={question.id} snapshot={question} />
        ))}
      </Questions>
    </Layout>
  )
}

export default RoomPage

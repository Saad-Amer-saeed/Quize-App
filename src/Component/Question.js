import Options from "./Options";
import { useSelector } from "react-redux";
function Question() {
  const { questions, index, answer } = useSelector((store) => store.questions);
  const question = questions[index];
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} answer={answer} />
    </div>
  );
}

export default Question;

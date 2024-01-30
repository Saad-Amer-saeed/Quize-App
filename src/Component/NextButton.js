import { useSelector, useDispatch } from "react-redux";
import { finish, nextQuestion } from "./questionsSlice";

function NextButton() {
  const dispatch = useDispatch();
  const { questions, index, answer } = useSelector((store) => store.questions);
  const numQuestions = questions.length;
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button className="btn btn-ui" onClick={() => dispatch(nextQuestion())}>
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button className="btn btn-ui" onClick={() => dispatch(finish())}>
        Finish
      </button>
    );
}

export default NextButton;

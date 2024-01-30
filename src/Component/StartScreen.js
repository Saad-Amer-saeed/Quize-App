import { useDispatch, useSelector } from "react-redux";
import { start } from "./questionsSlice";
function StartScreen() {
  const { questions } = useSelector((store) => store.questions);
  const numQuestions = questions.length;
  const dispatch = useDispatch();

  return (
    <div className="start">
      <h2>Welcome to The English Test!</h2>
      <h3>{numQuestions} questions to test your English mastery</h3>
      <button className="btn btn-ui" onClick={() => dispatch(start())}>
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;

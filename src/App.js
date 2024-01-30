// import "./App.css";
import Header from "./Component/Header";
import { Main } from "./Component/Main";
import StartScreen from "./Component/StartScreen";
import Loader from "./Component/Loader";
import Error from "./Component/Error";
import { useEffect } from "react";
import { dataReceived, dataFailed } from "./Component/questionsSlice";
import { useDispatch, useSelector } from "react-redux";
import Progress from "./Component/Progress";
import Question from "./Component/Question";
import Timer from "./Component/Timer";
import Footer from "./Component/Footer";
import NextButton from "./Component/NextButton";
import FinishScreen from "./Component/FinishScreen";

function App() {
  const dispatch = useDispatch();
  const { status } = useSelector((store) => store.questions);

  useEffect(function () {
    fetch("http://localhost:8090/questions")
      .then((res) => res.json())
      .then((data) => dispatch(dataReceived(data)))
      .catch((err) => dispatch(dataFailed()));
  }, []);

  return (
    <div className="App">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}

        {status === "active" && (
          <>
            <Progress />

            <Question />

            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App;

import { useEffect } from "react";
import { tick } from "./questionsSlice";
import { useSelector, useDispatch } from "react-redux";
function Timer() {
  const { secondsReaminig } = useSelector((store) => store.questions);

  const dispatch = useDispatch();

  const mins = Math.floor(secondsReaminig / 60);
  const seconds = secondsReaminig % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch(tick());
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;

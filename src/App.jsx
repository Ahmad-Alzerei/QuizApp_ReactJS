import Quiz from "./components/pages/Quiz";
import { jsQuizz } from "./data/constants";
const App = () => {
  return (
    <>
      <Quiz questions={jsQuizz.questions} />
    </>
  );
};

export default App;

import { useState } from "react";
import Reviews from "./Components/Reviews";
import reviews from "./data.js";

const App = () => {
  const [indexOfMan, setIndexOfMan] = useState(0);
  const forwardIndex = () => {
    indexOfMan === 3 ? setIndexOfMan(0) : setIndexOfMan(indexOfMan + 1);
  };
  const previousIndex = () => {
    indexOfMan === 0 ? setIndexOfMan(3) : setIndexOfMan(indexOfMan - 1);
  };
  const surpriseMe = () => {
    setIndexOfMan(Math.floor(Math.random() * (4 - 0)) + 0);
  };
  return (
    <main className="flex justify-center align-middle h-screen bg-[#F7FAFC]">
      <Reviews
        review={reviews[indexOfMan]}
        changeFunc={[previousIndex, forwardIndex, surpriseMe]}
      />
    </main>
  );
};
export default App;

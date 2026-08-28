import { DemoOne } from "./demo";
import { Agentation } from "agentation";
import "./App.css";

function App() {
  return (
    <>
      <DemoOne />
      {import.meta.env.DEV && <Agentation />}
    </>
  );
}

export default App;

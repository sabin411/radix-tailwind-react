// packages
import { Route, Routes } from "react-router-dom";

// screens
import ToolbarDemo from "./Screens/Toolbar";
import AccordionDemo from "./Screens/Accordion";

function App() {
  return (
    <Routes>
      <Route path="accordion" element={<AccordionDemo />} />
      <Route path="tool-bar" element={<ToolbarDemo />} />
    </Routes>
  );
}

export default App;

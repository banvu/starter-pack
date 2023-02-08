import Page from "scenes/page/index.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/page" replace />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

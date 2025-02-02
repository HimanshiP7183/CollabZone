import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Chat from "./pages/Chat";
import Groups1 from "./pages/Groups1";
import Calendar from "./pages/Calendar";
import Quiz from "./pages/Quiz";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Chat />}></Route>
          <Route path="/calendar" exact element={<Calendar />}></Route>
          <Route path="/groups" exact element={<Groups1 />}></Route>
          <Route path="/quiz" exact element={<Quiz />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

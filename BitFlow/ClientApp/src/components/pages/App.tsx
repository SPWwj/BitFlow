/** @format */

import { Routes, Route } from "react-router-dom";
import About from "./about/About";
import Layout from "./Layout";
import Scheduler from "./scheduler/Scheduler";
import TicTacToe from "./tic_tac_toe/TicTacToe";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TicTacToe />} />
        <Route path="/scheduler/:room" element={<Scheduler />} />
        <Route path="/scheduler" element={<Scheduler />} />
        <Route path="/about" element={<About />} />
        <Route path="/tic_tac_toe" element={<TicTacToe />} />
      </Route>
    </Routes>
  );
}

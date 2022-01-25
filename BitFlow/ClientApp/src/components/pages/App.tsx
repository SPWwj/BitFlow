/** @format */

import { Routes, Route } from "react-router-dom"
import About from "./about/About"
import Layout from "./Layout"
import ES1103 from "./Path/CS1231S"
import CS1231S from "./Path/CS1231S"
import CS2030S from "./Path/CS2030S"
import CS2100 from "./Path/CS2100"
import MA1521 from "./Path/MA1521"
import Scheduler from "./scheduler/Scheduler"
import TicTacToe from "./tic_tac_toe/TicTacToe"
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CS1231S />} />
        <Route path="/scheduler/:room" element={<Scheduler />} />
        <Route path="/scheduler" element={<Scheduler />} />
        <Route path="/about" element={<About />} />
        <Route path="/tic_tac_toe" element={<TicTacToe />} />
        <Route path="/ma1521" element={<MA1521 />} />
        <Route path="/cs1231s" element={<CS1231S />} />
        <Route path="/cs2100" element={<CS2100 />} />
        <Route path="/cs2030s" element={<CS2030S />} />
        <Route path="/es1103" element={<ES1103 />} />
      </Route>
    </Routes>
  )
}

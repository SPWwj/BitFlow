/** @format */

import { useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Board from "./Board";
import styles from "./TicTacToe.module.css";
import wrongMark from "../../../images/wrongMark.png";
import circle from "../../../images/circle.png";

function TicTacToe() {
  const [result, setResult] = useState("");
  const [showResultModal, setShowResultModal] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);
  type BoardHandle = React.ElementRef<typeof Board>;
  const [playerX, setPlayerX] = useState("");
  const [playerO, setPlayerO] = useState("");
  const [score, setScore] = useState([0, 0]);
  const [name, setName] = useState(["X", "O"]);
  const refName = useRef(["X", "O"]);
  refName.current = name;
  const refScore = useRef([0, 0]);
  refScore.current = score;
  const refResultModal = useRef<BoardHandle>(null);
  const [status, setStatus] = useState("xxx");
  const refStatus = useRef("");
  refStatus.current = status;
  const resetBoard = (r: boolean) => {
    if (r) {
      refResultModal.current?.reset();
    }
    setShowResultModal(false);
  };
  const resetScore = () => {
    setScore([0, 0]);
  };
  function saveName() {
    setName([playerX, playerO]);
    refResultModal.current?.update();
    setScore([0, 0]);
    setShowNameModal(false);
  }

  return (
    <div className={styles.tic_tac_toe}>
      <h1 className={styles.header}>TIC TAC TOE</h1>
      <div className={`d-flex ${styles.board_section}`}>
        <div className="pr-5 mr-5">
          <h2 className="text-center"> {name[0]} </h2>
          <h5 className="text-center">
            <img
              className={`${styles.img_square} xturn pb-1`}
              alt="x"
              src={wrongMark}
            />
            Score:<span className="text-center"> {score[0]} </span>
          </h5>
        </div>
        <Board
          setStatus={setStatus}
          refName={refName}
          refScore={refScore}
          ref={refResultModal}
          showResult={setShowResultModal}
          showWinner={setResult}
        />

        <div className="ml-5 pl-5">
          <h2 className="text-center"> {name[1]} </h2>
          <h5 className="text-center pb-1">
            <img
              alt="o"
              className={`${styles.img_square} oturn pb-1`}
              src={circle}
            />
            Score:<span className="text-center"> {score[1]} </span>
          </h5>
        </div>
      </div>
      <h3>{status}</h3>

      <div className="mt-4 text-center">
        <Button
          size="sm"
          variant="warning"
          className="mr-4"
          onClick={() => resetBoard(true)}>
          Reset Board
        </Button>
        <Button
          size="sm"
          variant="warning"
          className="mr-4"
          onClick={resetScore}>
          Reset Score
        </Button>
        <Button
          size="sm"
          variant="danger"
          onClick={() => setShowNameModal(true)}>
          Edit / Remove Players
        </Button>
      </div>
      <Modal
        centered
        show={showResultModal}
        aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header className="text-center">
          <Modal.Title>{result}</Modal.Title>
        </Modal.Header>

        <Modal.Footer className="text-center">
          <Button onClick={() => resetBoard(false)} variant="warning">
            Cancel
          </Button>
          <Button onClick={() => resetBoard(true)} variant="warning">
            Another Round
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showNameModal} onHide={() => setShowNameModal(true)}>
        <Modal.Header className="text-center">
          <Modal.Title>Player Roster</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex">
            <Form.Control
              type="text"
              placeholder="Player1"
              value={playerX}
              onChange={(e) => setPlayerX(e.target.value)}
            />
            <Button
              variant="danger"
              className="ml-2"
              onClick={() => setPlayerX("")}>
              X
            </Button>
          </div>
          <div className="d-flex mt-4">
            <Form.Control
              type="text"
              placeholder="Player2"
              value={playerO}
              onChange={(e) => setPlayerO(e.target.value)}
            />
            <Button
              variant="danger"
              className="ml-2"
              onClick={() => setPlayerO("")}>
              X
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer className="text-center">
          <Button
            variant="warning"
            type="submit"
            onClick={() => setShowNameModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" onClick={saveName}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TicTacToe;

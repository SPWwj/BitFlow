/** @format */
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import Square from "./Square";
import styles from "./TicTacToe.module.css";

type BoardProps = {
  showResult: (x: boolean) => void;
  showWinner: (x: string) => void;
  refScore: React.MutableRefObject<number[]>;
  refName: React.MutableRefObject<string[]>;
  setStatus: (x: string) => void;
};
export type BoardHandle = {
  reset: () => void;
  end: () => void;
  update: () => void;
};
const Board: React.ForwardRefRenderFunction<BoardHandle, BoardProps> = (
  { showResult, showWinner, refScore, refName, setStatus },
  forwardedRef
) => {
  const [squares, setSquares] = useState(Array<string | null>(9).fill(null));
  const [X, setX] = useState(true);
  const [toggleStatus, setToggleStatus] = useState(false);
  const winner = calculateWinner(squares);
  useEffect(() => {
    if (winner) {
      let result = "";
      if (winner === "X") {
        refScore.current[0]++;
        result = "Winner: " + refName.current[0];
      } else if (winner === "O") {
        refScore.current[1]++;
        result = "Winner: " + refName.current[1];
      } else {
        result = "Draw";
      }

      showResult(true);
      showWinner(result);
      setStatus(result);

      setSquares((squares) => squares.map((s) => (s === null ? "Check" : s)));
    } else {
      setStatus(`Player ${X ? refName.current[0] : refName.current[1]} Turn`);
    }
  }, [
    winner,
    showResult,
    showWinner,
    X,
    refScore,
    refName,
    setStatus,
    toggleStatus,
  ]);

  const renderSquare = (i: number) => {
    return <Square value={squares[i]!} onClick={() => handleClick(i)} />;
  };

  const handleClick = (i: number) => {
    const squareArray = squares.slice();
    if (squareArray[i] === null && squareArray[i] !== "Check") {
      squareArray[i] = X ? "X" : "O";
      setSquares(squareArray);
      setX(!X);
    } else {
      alert("Can't do that");
    }
  };

  function calculateWinner(squares: (string | null)[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        // squares[a] &&
        // squares[a] === squares[b] &&
        // squares[a] === squares[c]
        squares[a] === squares[b] &&
        squares[a] === squares[c] &&
        !(squares[a] === null || squares[a] === "Check")
      ) {
        return squares[a];
      }
    }
    if (!squares.some((s) => s === null)) {
      return "Draw";
    }

    return null;
  }
  useImperativeHandle(forwardedRef, () => ({
    reset() {
      setSquares(Array<string | null>(9).fill(null));
    },
    end() {
      setSquares(squares.map((s) => (s === null ? "Check" : s)));
    },
    update() {
      setToggleStatus(!toggleStatus);
    },
  }));

  return (
    <div className={styles.board}>
      <div className={styles.board_row}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={styles.board_row}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={styles.board_row}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default forwardRef(Board);

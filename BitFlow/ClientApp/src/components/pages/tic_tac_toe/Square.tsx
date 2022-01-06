/** @format */
import wrongMark from "../../../images/wrongMark.png";
import circle from "../../../images/circle.png";
import white from "../../../images/white.png";
import styles from "./TicTacToe.module.css";
import checkMark from "../../../images/checkMark.png";

export type SquareProps = {
  value: string;
  onClick: () => void;
};

function Square(props: SquareProps) {
  return (
    <div className={styles.square}>
      <img
        className={styles.img_square}
        onClick={() => props.onClick()}
        src={
          props.value === "X"
            ? wrongMark
            : props.value === "O"
            ? circle
            : props.value === "Check"
            ? checkMark
            : white
        }
        alt={props.value}
        title={props.value}></img>
    </div>
  );
}

export default Square;

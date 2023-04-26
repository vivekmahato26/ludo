import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/dice.scss";
export default function Dice() {
  const diceRef = useRef(null);
  const dispatch = useDispatch();
  // const player = useSelector(state => state.Player);
  const player = {
    currentName: "yellow"
  }
  // TODO: Add Player Slice
  const rollDice = () => {
    const res = getRandomNumber(1, 6)
    diceRef.current.dataset.roll = res;
    dispatch({
      roll: res,
      playing: true,
      player : player.currentName
    })
  };
  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <div className="container">
      <div className="dice" onClick={rollDice}>
        <ol
          ref={diceRef}
          className="die-list even-roll"
          data-roll="1"
          id="die-1"
        >
          <li className="die-item" data-side="1">
            <span className="dot"></span>
          </li>
          <li className="die-item" data-side="2">
            <span className="dot"></span>
            <span className="dot"></span>
          </li>
          <li className="die-item" data-side="3">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </li>
          <li className="die-item" data-side="4">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </li>
          <li className="die-item" data-side="5">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </li>
          <li className="die-item" data-side="6">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </li>
        </ol>
      </div>
    </div>
  );
}

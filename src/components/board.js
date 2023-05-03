import React, { useEffect, useRef, useState } from "react";
import { AiFillStar } from "react-icons/ai";


import "../styles/board.scss";
import boardData from "../utils/board";
import { useDispatch, useSelector } from "react-redux";
import { rollDiceEvent } from "../redux/slice/dice";
import { movePiece, selectPiece } from "../redux/slice/piece";
const yellowImg = require("../assets/yellow.png");
const redImg = require("../assets/red.png");
const blueImg = require("../assets/blue.png");
const greenImg = require("../assets/green.png");
export default function Board() {
  const diceState = useSelector((state) => state.Dice);
  const pieceState = useSelector((state) => state.Piece);
  const [prevMove, setPrevMove] = useState(null);
  const player = {
    currentName: "yellow",
  };
  const checkOpenPieces = (currentPlayer) => {
    return pieceState[currentPlayer].filter((e) => e.open);
  };
  const dispatch = useDispatch();
  const { boardArr, finalMoves } = boardData;
  const boardRef = useRef({
    Moves: [
      // { elementRef, type, currentCords,safe
      // }
    ],
  });
  const startMove = () => {
    if (diceState.playing) {
      dispatch(movePiece({ ref: "y1", move: diceState.roll, turn: "yellow" }));
    }
  };
  useEffect(() => {
    if (diceState.roll !== null) {
      startMove();
    }
  }, [diceState]);
  useEffect(() => {
    if (diceState.playing) {
      const currentPlayer = pieceState["yellow"];
      const currentPiece = currentPlayer.filter((e) => e.ref == "y1");
      const moveTo = finalMoves[currentPiece[0].currentPos];
      dispatch(rollDiceEvent({ ...diceState, playing: false }));
      // console.log(moveTo);
      // console.log(boardArr);
      const destElement = boardRef ? boardRef.current.Moves.filter(e => e.cords.x == moveTo.cords.x && e.cords.y == moveTo.cords.y) : null;
      console.log(destElement);
      if(destElement.length && destElement[0].element) {
        // destElement[0].element.style.backgroundColor="yellow";
        if(prevMove) {
          let temp = prevMove.childNodes[0].childNodes;
          if(temp.length >1) {
            temp[1].remove();
          } else {
            temp[0].remove();
          }
        }
        const img = document.createElement("img");
        img.setAttribute("src",yellowImg);
        img.setAttribute("height",20)
        img.style.position = "absolute";
        destElement[0].element.childNodes[0].appendChild(img)
        setPrevMove(destElement[0].element)
      }
    }
  }, [pieceState]);
  const handleSelect = (e) => {
    let ref = e.target.dataset.ref;
    dispatch(selectPiece({ref, turn:"yellow"}))
  }
  return (
    <div>
      <p>Co-ordinates Format :- j,i</p>
      <div className="board-container">
        <div className="blueCoins">
          <div>
            <img src={blueImg} />
          </div>
          <div>
            <img src={blueImg} />
          </div>
          <div>
            <img src={blueImg} />
          </div>
          <div>
            <img src={blueImg} />
          </div>
        </div>
        <div className="redCoins">
          <div>
            <img src={redImg} />
          </div>
          <div>
            <img src={redImg} />
          </div>
          <div>
            <img src={redImg} />
          </div>
          <div>
            <img src={redImg} />
          </div>
        </div>
        <div className="yellowCoins">
          <div>
            <img onClick={handleSelect} data-ref="y1" src={yellowImg} />
          </div>
          <div>
            <img onClick={handleSelect} data-ref="y2" src={yellowImg} />
          </div>
          <div>
            <img onClick={handleSelect} data-ref="y3" src={yellowImg} />
          </div>
          <div>
            <img onClick={handleSelect} data-ref="y4" src={yellowImg} />
          </div>
        </div>
        <div className="greenCoins">
          <div>
            <img src={greenImg} />
          </div>
          <div>
            <img src={greenImg} />
          </div>
          <div>
            <img src={greenImg} />
          </div>
          <div>
            <img src={greenImg} />
          </div>
        </div>
        {boardArr.map((e) => {
          return (
            <div
              className="box"
              style={e.style}
              key={e.cords.x + "," + e.cords.y}
              ref={(el) => {
                if (e.movable) {
                  const data = {
                    element: el,
                    cords: e.cords,
                    type: e.type,
                    safe: e.safe,
                  };
                  boardRef.current.Moves.push(data);
                }
              }}
            >
              <div>
                {e.safe && (
                  <AiFillStar
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                      fontSize: "1.5rem",
                      color: "#8e44ad",
                    }}
                  />
                )}
                {/* {e.type == "normal" && !e.safe && (
                  <p>{e.cords.x + "," + e.cords.y}</p>
                )} */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

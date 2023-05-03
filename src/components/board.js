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
  // const [currPiece,setCurrentPiece] = useState({});
  const currentRef = useRef({});
  

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
    // console.log(currPiece);
    console.log(currentRef);
    if (diceState.playing) {
      let ref = currentRef.current.ref;
      let turn = currentRef.current.turn;
    
      dispatch(
        movePiece({
          ref,
          move: diceState.roll,
          turn,
        })
      )
     
    }
  };

  const temp = () => {
    let ref = currentRef.current.ref;
    let turn = currentRef.current.turn;
    const currentPlayer = pieceState[turn];
     
      const currentPiece = currentPlayer.filter(
        (e) => e.ref == ref
      );
      console.log(currentPiece);
      const moveTo = finalMoves[currentPiece[0].currentPos];
      console.log(moveTo);
      const destElement = boardRef
        ? boardRef.current.Moves.filter(
            (e) => e.cords.x == moveTo.cords.x && e.cords.y == moveTo.cords.y
          )
        : null;
      console.log(destElement);
      if (destElement.length && destElement[0].element) {
        const img = document.createElement("img");
        const currentPiece = () => {
          if (turn == "yellow") return yellowImg;
          if (turn == "blue") return blueImg;
          if (turn == "red") return redImg;
          if (turn == "green") return greenImg;
        };
        img.setAttribute("src", currentPiece());
        img.setAttribute("height", 20);
        img.dataset.ref = ref;
        img.dataset.color = turn;
        img.style.position = "absolute";
        destElement[0].element.childNodes[0].appendChild(img);
        setPrevMove(destElement[0].element);
        img.addEventListener("click", handleSelect);
      }
      dispatch(rollDiceEvent({ playing: false }));
  }
  useEffect(() => {
    if (diceState.roll !== null) {
     temp()
    }
  }, [pieceState.selectedPiece]);
  useEffect(() => {
    // if (diceState.playing) {
    //   const currentPlayer = pieceState[currentRef.current.turn];
    //   console.log(currentPlayer);
    //   const currentPiece = currentPlayer.filter((e) => e.ref == currentRef.current.ref);
    //   const moveTo = finalMoves[currentPiece[0].currentPos];
    //   dispatch(rollDiceEvent({ ...diceState, playing: false }));
    //   // console.log(moveTo);
    //   // console.log(boardArr);
    //   const destElement = boardRef ? boardRef.current.Moves.filter(e => e.cords.x == moveTo.cords.x && e.cords.y == moveTo.cords.y) : null;
    //   console.log(destElement);
    //   if(destElement.length && destElement[0].element) {
    //     const img = document.createElement("img");
    //     const currentPiece = () => {
    //       if(currentRef.current.turn == "yellow") return yellowImg;
    //       if(currentRef.current.turn == "blue") return blueImg;
    //       if(currentRef.current.turn == "red") return redImg;
    //       if(currentRef.current.turn == "green") return greenImg;
    //     }
    //     img.setAttribute("src",currentPiece());
    //     img.setAttribute("height",20)
    //     img.dataset.ref = ref;
    //     img.dataset.color = currentRef.current.turn;
    //     img.style.position = "absolute";
    //     destElement[0].element.childNodes[0].appendChild(img)
    //     setPrevMove(destElement[0].element)
    //     img.addEventListener("click", handleSelect);
    //   }
    // }
  }, [ ]);
  const handleSelect = (e) => {
    e.target.remove();
    let ref = e.target.dataset.ref;
    let turn = e.target.dataset.color;
    currentRef.current = {ref,turn}
    // setCurrentPiece({ref,turn})
    dispatch(selectPiece({ ref, turn }));
    setTimeout(() => startMove(), 100);
  };
  return (
    <div>
      <p>Co-ordinates Format :- j,i</p>
      <div className="board-container">
        <div className="blueCoins">
          <div>
            <img
              onClick={handleSelect}
              data-color="blue"
              data-ref="b1"
              src={blueImg}
            />
          </div>
          <div>
            <img
              onClick={handleSelect}
              data-color="blue"
              data-ref="b2"
              src={blueImg}
            />
          </div>
          <div>
            <img
              onClick={handleSelect}
              data-color="blue"
              data-ref="b3"
              src={blueImg}
            />
          </div>
          <div>
            <img
              onClick={handleSelect}
              data-color="blue"
              data-ref="b4"
              src={blueImg}
            />
          </div>
        </div>
        <div className="redCoins">
          <div>
            <img
              onClick={handleSelect}
              data-color="red"
              data-ref="r1"
              src={redImg}
            />
          </div>
          <div>
            <img
              onClick={handleSelect}
              data-color="red"
              data-ref="r2"
              src={redImg}
            />
          </div>
          <div>
            <img
              onClick={handleSelect}
              data-color="red"
              data-ref="r3"
              src={redImg}
            />
          </div>
          <div>
            <img
              onClick={handleSelect}
              data-color="red"
              data-ref="r4"
              src={redImg}
            />
          </div>
        </div>
        <div className="yellowCoins">
          <div>
            <img
              onClick={handleSelect}
              data-color="yellow"
              data-ref="y1"
              src={yellowImg}
            />
          </div>
          <div>
            <img
              onClick={handleSelect}
              data-color="yellow"
              data-ref="y2"
              src={yellowImg}
            />
          </div>
          <div>
            <img
              onClick={handleSelect}
              data-color="yellow"
              data-ref="y3"
              src={yellowImg}
            />
          </div>
          <div>
            <img
              onClick={handleSelect}
              data-color="yellow"
              data-ref="y4"
              src={yellowImg}
            />
          </div>
        </div>
        <div className="greenCoins">
          <div>
            <img
              onClick={handleSelect}
              data-color="green"
              data-ref="g1"
              src={greenImg}
            />
          </div>
          <div>
            <img
              onClick={handleSelect}
              data-color="green"
              data-ref="g2"
              src={greenImg}
            />
          </div>
          <div>
            <img
              onClick={handleSelect}
              data-color="green"
              data-ref="g3"
              src={greenImg}
            />
          </div>
          <div>
            <img
              onClick={handleSelect}
              data-color="green"
              data-ref="g4"
              src={greenImg}
            />
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

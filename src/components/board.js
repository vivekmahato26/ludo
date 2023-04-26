import React, { useRef } from "react";
import { AiFillStar } from "react-icons/ai";

import "../styles/board.scss";
import boardData from "../utils/board";

export default function Board() {
    const {boardArr} = boardData;
    const boardRef = useRef({
      Moves: [
        // { elementRef, type, currentCords,safe

        // }
      ],
    })
  return (
    <div>
      <p>Co-ordinates Format :- j,i</p>
      <div className="board-container">
        <div className="blueCoins">
          <div>
            <img src={require("../assets/blue.png")}/>
          </div>
          <div>
            <img src={require("../assets/blue.png")}/>
          </div>
          <div>
            <img src={require("../assets/blue.png")}/>
          </div>
          <div>
            <img src={require("../assets/blue.png")}/>
          </div>
        </div>
        <div className="redCoins">
           <div>
            <img src={require("../assets/red.png")}/>
          </div>
          <div>
            <img src={require("../assets/red.png")}/>
          </div>
          <div>
            <img src={require("../assets/red.png")}/>
          </div>
          <div>
            <img src={require("../assets/red.png")}/>
          </div>
        </div>
        <div className="yellowCoins">
           <div>
            <img src={require("../assets/yellow.png")}/>
          </div>
          <div>
            <img src={require("../assets/yellow.png")}/>
          </div>
          <div>
            <img src={require("../assets/yellow.png")}/>
          </div>
          <div>
            <img src={require("../assets/yellow.png")}/>
          </div>
        </div>
        <div className="greenCoins">
           <div>
            <img src={require("../assets/green.png")}/>
          </div>
          <div>
            <img src={require("../assets/green.png")}/>
          </div>
          <div>
            <img src={require("../assets/green.png")}/>
          </div>
          <div>
            <img src={require("../assets/green.png")}/>
          </div>
        </div>
        {boardArr.map((e) => {
          return (
            <div
              className="box"
              style={e.style}
              key={e.cords.x + "," + e.cords.y}
              ref={el => {
                  if(e.movable) {
                    const data = {
                      element: el,
                      cords: e.cords,
                      type: e.type,
                      safe: e.safe
                    }
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
                {e.type == "normal" && !e.safe && (
                  <p>{e.cords.x + "," + e.cords.y}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

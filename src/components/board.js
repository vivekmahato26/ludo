import React from "react";
import { AiFillStar } from "react-icons/ai";

import "../styles/board.scss";
import boardData from "../utils/board";

export default function Board() {
    const {boardArr} = boardData
  return (
    <div>
      <p>Co-ordinates Format :- j,i</p>
      <div className="board-container">
        {boardArr.map((e) => {
          return (
            <div
              className="box"
              style={e.style}
              key={e.cords.x + "," + e.cords.y}
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

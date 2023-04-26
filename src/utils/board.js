const colors = {
  blue: "#6a89cc",
  yellow: "#fad390",
  red: "#ff7675",
  green: "#b8e994",
  home: "#0a3d62",
  blueHome: "#4a69bd",
  redHome: "#e55039",
  greenHome: "#78e08f",
  yellowHome: "#f6b93b",
};
const boardArr = [];
const legalMoves = [];
const bl = [],
  br = [],
  tl = [],
  tr = [],
  rb = [],
  rt = [],
  lb = [],
  lt = [],
  redHM = [],
  greenHM = [],
  yellowHM = [],
  blueHM = [];
for (let i = 1; i < 16; i++) {
  for (let j = 1; j <= 15; j++) {
    let safe = false;
    let type = "normal";
    let border = true;
    let style = {};
    let movable = true;
    if (i <= 6 && j <= 6) {
      type = "blue";
      border = false;
      movable = false;
      style = {
        backgroundColor: colors.blue,
        border: "none",
      };
    }
    if (i >= 10 && j <= 6) {
      type = "yellow";
      border = false;
      movable = false;
      style = {
        backgroundColor: colors.yellow,
        border: "none",
      };
    }
    if (i <= 6 && j >= 10) {
      type = "red";
      border = false;
      movable = false;
      style = {
        backgroundColor: colors.red,
        border: "none",
      };
    }
    if (i >= 10 && j >= 10) {
      type = "green";
      border = false;
      movable = false;
      style = {
        backgroundColor: colors.green,
        border: "none",
      };
    }
    if (i >= 7 && j >= 7 && i <= 9 && j <= 9) {
      type = "home";
      border = false;
      movable = false;
      style = {
        backgroundColor: colors.home,
        border: "none",
      };
    }
    if (i == 7 && j == 2) {
      type = "blueHome";
      legalMoves.push({
        cords: {
          x: j,
          y: i,
        },
        type,
        border,
        safe,
        style,
      });
      safe = true;
      style = {
        backgroundColor: colors.blueHome,
      };
    }
    if (i == 8 && j >= 2 && j <= 6) {
      type = "blueHome";
      style = {
        backgroundColor: colors.blueHome,
      };
      blueHM.push({
        cords: {
          x: j,
          y: i,
        },
        type,
        border,
        safe,
        style,
      });
    }
    if (i == 2 && j == 9) {
      type = "redHome";
      legalMoves.push({
        cords: {
          x: j,
          y: i,
        },
        type,
        border,
        safe,
        style,
      });
      safe = true;
      style = {
        backgroundColor: colors.redHome,
      };
    }
    if (j == 8 && i >= 2 && i <= 6) {
      type = "redHome";
      style = {
        backgroundColor: colors.redHome,
      };
      redHM.push({
        cords: {
          x: j,
          y: i,
        },
        type,
        border,
        safe,
        style,
      });
    }
    if (i == 9 && j == 14) {
      type = "greenHome";
      legalMoves.push({
        cords: {
          x: j,
          y: i,
        },
        type,
        border,
        safe,
        style,
      });
      safe = true;
      style = {
        backgroundColor: colors.greenHome,
      };
    }
    if (i == 8 && j >= 10 && j <= 14) {
      type = "greenHome";
      style = {
        backgroundColor: colors.greenHome,
      };
      greenHM.push({
        cords: {
          x: j,
          y: i,
        },
        type,
        border,
        safe,
        style,
      });
    }
    if (i == 14 && j == 7) {
      type = "yellowHome";
      legalMoves.push({
        cords: {
          x: j,
          y: i,
        },
        type,
        border,
        safe,
        style,
      });
      safe = true;
      style = {
        backgroundColor: colors.yellowHome,
      };
    }
    if (j == 8 && i >= 10 && i <= 14) {
      type = "yellowHome";
      style = {
        backgroundColor: colors.yellowHome,
      };
      yellowHM.push({
        cords: {
          x: j,
          y: i,
        },
        type,
        border,
        safe,
        style,
      });
    }
    if (i == 3 && j == 7) {
      safe = true;
    }
    if (i == 7 && j == 13) {
      safe = true;
    }
    if (i == 13 && j == 9) {
      safe = true;
    }
    if (i == 9 && j == 3) {
      safe = true;
    }
    boardArr.push({
      cords: {
        x: j,
        y: i,
      },
      type,
      border,
      safe,
      style,
      movable,
    });

    if (j == 7 && i <= 6) {
      tl.push({
        cords: {
          x: j,
          y: i,
        },
        type,
        border,
        safe,
        style,
      });
    }
    if (j == 9 && i <= 6) {
      tr.push({
        cords: {
          x: j,
          y: i,
        },
        type,
        border,
        safe,
        style,
      });
    }
    if (i == 9 && j <= 6) {
      lb.push({
        cords: {
          x: j,
          y: i,
        },
        type,
        border,
        safe,
        style,
      });
    }
    if (i == 7 && j <= 6) {
      lt.push({
        cords: {
          x: j,
          y: i,
        },
        type,
        border,
        safe,
        style,
      });
    }
    if (i == 7 && j <= 15 && j >= 10) {
      rt.push({
        cords: {
          x: j,
          y: i,
        },
        type,
        border,
        safe,
        style,
      });
    }
    if (i == 9 && j <= 15 && j >= 10) {
      rb.push({
        cords: {
          x: j,
          y: i,
        },
        type,
        border,
        safe,
        style,
      });
    }
    if (j == 7 && i <= 15 && i >= 10) {
      bl.push({
        cords: {
          x: j,
          y: i,
        },
        type,
        border,
        safe,
        style,
      });
    }
    if (j == 9 && i <= 15 && i >= 10) {
      br.push({
        cords: {
          x: j,
          y: i,
        },
        type,
        border,
        safe,
        style,
      });
    }
  }
}

const tempArr = boardArr.filter((e) => e.type == "normal");
legalMoves.push(...tempArr);
const tempArr2 = legalMoves.filter((e) => {
  if (e.cords.x == 1 && e.cords.y == 8) {
    return true;
  } else if (e.cords.x == 8 && e.cords.y == 15) {
    return true;
  } else if (e.cords.x == 15 && e.cords.y == 8) {
    return true;
  } else if (e.cords.x == 8 && e.cords.y == 1) {
    return true;
  }
  return false;
});
tl.sort((a, b) => b.cords.y - a.cords.y);
tr.sort((a, b) => a.cords.y - b.cords.y);
rt.sort((a, b) => a.cords.x - b.cords.x);
rb.sort((a, b) => b.cords.x - a.cords.x);
lb.sort((a, b) => b.cords.x - a.cords.x);
lt.sort((a, b) => a.cords.x - b.cords.x);
br.sort((a, b) => a.cords.y - b.cords.y);
bl.sort((a, b) => b.cords.y - a.cords.y);
tl.push(tempArr2[0]);
rt.push(tempArr2[2]);
br.push(tempArr2[3]);
lb.push(tempArr2[1]);
const finalMoves = [...bl, ...lb, ...lt, ...tl, ...tr, ...rt, ...rb, ...br];

redHM.sort((a, b) => a.cords.x - b.cords.x);
blueHM.sort((a, b) => a.cords.y - b.cords.y);
greenHM.sort((a, b) => b.cords.y - a.cords.y);
yellowHM.sort((a, b) => b.cords.x - a.cords.x);

export default { boardArr, finalMoves, redHM, greenHM, yellowHM, blueHM };

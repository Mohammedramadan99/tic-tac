import { useEffect, useState } from "react";
import { matrix } from "./matrix";

export const gameBoard = (function () {
  const extendedMode = localStorage.getItem('extendedMode')
  
  
  const _n = 3; // write 10 in extendedMode

  let _board = matrix(_n, _n);

  function setField(col, row, char) {
    _board.setElement(col, row, char);
  }

  function getField(col, row) {
    return _board.getElement(col, row);
  }

  function erase() {
    _board.fillUp("");
  }

  function getN() {
    return _n;
  }

  function getBoard() {
    return _board.getMatrix();
  }

  erase();
  return { getN, setField, getField, erase, getBoard };
})();
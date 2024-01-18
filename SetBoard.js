class SetBoard {
  board;
  context;
  boardWidth = 380;
  boardHight = 600;

  setBoardSize() {
    this.board = document.getElementById("board");
    this.board.height = this.boardHight;
    this.board.width = this.boardWidth;
    this.context = this.board.getContext("2d");
  }

  getWidth() {
    return this.boardWidth;
  }
  getHeight() {
    return this.boardHight;
  }

  getContext() {
    return this.context;
  }
}
export { SetBoard };

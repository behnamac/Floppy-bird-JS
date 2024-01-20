import { SpriteSetter } from "./SpriteSetter.js";
import { SetBoard } from "./SetBoard.js";

let setBoard = new SetBoard();
setBoard.setBoardSize();
var context = setBoard.getContext();

const spriteSetter = new SpriteSetter();
const pipe = spriteSetter.createPipe();
const velocityX = -2;
let pipeArray = [];

requestAnimationFrame(update);

function update() {
  requestAnimationFrame(update);
  for (let i = 0; i < pipeArray.length; i++) {
    let pipe = pipeArray[i];
    pipe.x += velocityX;
    context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);
  }
}

function pipesMove() {
  let TopPipe = {
    img: pipe.pipeIMG,
    x: pipe.pipeX,
    y: pipe.pipeY,
    width: pipe.pipeWidth,
    height: pipe.pipeHeight,
    passed: false,
  };
  pipeArray.push(TopPipe);
}
setInterval(pipesMove, 1500);

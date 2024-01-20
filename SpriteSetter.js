import { DrawSprite } from "./DrawSprite.js";
import { SetBoard } from "./SetBoard.js";

let bird;
let setBoard = new SetBoard();
setBoard.setBoardSize();
let boardWidth = setBoard.getWidth();
let boardHight = setBoard.getHeight();
let context = setBoard.getContext();

class SpriteSetter {
  createBird() {
    let birdWidth = 34;
    let birdHeight = 24;
    let birdX = boardWidth * 0.125;
    let birdY = boardHight * 0.5;

    bird = new Image();
    bird.src = "./Assets/bird.png";
    let birdObj = new DrawSprite(birdX, birdY, birdWidth, birdHeight);
    bird.onload = () => {
      context.drawImage(
        bird,
        birdObj.x,
        birdObj.y,
        birdObj.width,
        birdObj.height
      );
    };
    return bird;
  }

  CreateMountains() {
    let mountainWidth = boardWidth * 1.5;
    let mountainHeight = boardHight * 0.25;
    let mountainX = 0;
    let mountainY = boardHight * 0.75;

    let mountainIMG = new Image();
    mountainIMG.src = "./Assets/Mountain.png";
    let mountain = new DrawSprite(
      mountainX,
      mountainY,
      mountainWidth,
      mountainHeight
    );
    mountainIMG.onload = () => {
      context.drawImage(
        mountainIMG,
        mountain.x,
        mountain.y,
        mountain.width,
        mountain.height
      );
    };
  }

  createClouds() {
    // let coulds = [];
    let couldWidth = 100;
    let couldsHeight = 50;
    let couldsX = boardWidth * 0.12;
    let couldsY = boardHight * 0.5;

    let couldsIMG = new Image();
    couldsIMG.src = "./Assets/Cloud1.png";
    let could = new DrawSprite(couldsX, couldsY, couldWidth, couldsHeight);
    couldsIMG.onload = () => {
      context.drawImage(couldsIMG, could.x, could.y, could.width, could.height);
    };
  }

  createPipe() {
    let pipeWidth = 30;
    let pipeHeight = 300;
    let pipeX = boardWidth;
    let pipeY = boardHight * 0.001;

    let pipeIMG = new Image();
    pipeIMG.src = "./Assets/pipe.png";
    let pipe = new DrawSprite(pipeX, pipeY, pipeWidth, pipeHeight);
    pipeIMG.onload = () => {
      context.drawImage(pipeIMG, pipe.x, pipe.y, pipe.width, pipe.height);
    };
    let pipeObj = { pipeX, pipeY, pipeIMG, pipeWidth, pipeHeight };
    return pipeObj;
  }
}

export { SpriteSetter };

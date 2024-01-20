import { SpriteSetter } from "./SpriteSetter.js";

let spriteSetter = new SpriteSetter();

window.onload = () => {
  createSprites();
};

//#region Create Sprites
function createSprites() {
  spriteSetter.createClouds();
  spriteSetter.CreateMountains();
  spriteSetter.createBird();
  spriteSetter.createPipe();
}
//#endregion

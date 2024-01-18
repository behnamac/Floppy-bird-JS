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
}
//#endregion

requestAnimationFrame(update);

function update() {
  requestAnimationFrame(update);
}

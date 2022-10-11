import Characterfeatures from "./types";

class Character implements Characterfeatures {
  isAlive = true;
  tvShow = "Juego de Tronos";

  constructor(public name: string, public family: string, public age: number) {}

  communicate() {
    return `${this.name} dice: `;
  }

  characterDies() {
    this.isAlive = false;
  }
}

export default Character;

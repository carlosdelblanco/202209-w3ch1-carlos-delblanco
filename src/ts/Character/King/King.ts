import Character from "../Character";
import KingFeatures from "./types";

class King extends Character implements KingFeatures {
  constructor(
    name: string,
    family: string,
    age: number,
    public regnalYearsKing: number
  ) {
    super(name, family, age);
  }

  communicate() {
    return `${super.communicate()} you are going to die`;
  }
}

export default King;

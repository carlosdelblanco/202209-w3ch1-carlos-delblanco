interface Characterfeatures {
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
  tvShow: string;
  communicate: () => string;
  characterDies: () => void;
}

export default Characterfeatures;

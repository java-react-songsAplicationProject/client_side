export enum Genre {
  ROCK,
  POP,
  RAP,
  CLASSICAL,
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  genre: Genre;
  length: number;
  price: number;
}

export enum Genre{ROCK, POP, RAP, CLASSICAL}

export class Song{
    constructor(public id:string,public title:string,public artist:string,
        public genre:Genre,public length:number ,public price:number
        ){  }
}



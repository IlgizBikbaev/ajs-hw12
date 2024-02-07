import Buyable from "./buyable";

export default class Movie implements Buyable {
        constructor(
            readonly id: number,
            readonly title: string,
            readonly year: number,
            readonly country: string[],
            readonly slogan: string,
            readonly genres: string[],
            readonly time: string,
            readonly price: number,
        ) { }
}
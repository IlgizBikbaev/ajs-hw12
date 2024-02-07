import Buyable from './buyable';

export default class MusicAlbum implements Buyable {
    constructor(
        readonly id: number,
        readonly title: string,
        readonly author: string,
        readonly price: number,
    ) { }
}
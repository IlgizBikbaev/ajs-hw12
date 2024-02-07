import Cart from '../service/cart';
import Book from '../domain/book';
import Movie from '../domain/movie';
import MusicAlbum from '../domain/musicAlbum';

const cart = new Cart();
const movie1 = new Movie(250, "August Rush", 2007,
    ['США', 'Южная Корея'], 'Невероятное путешествие со скоростью звука',
    ['Драма', 'музыка', 'семейный'], '109 минут', 300)

const movie2 = new Movie(318, "Song for a Raggy Boy", 2003,
    ['Ирландия', 'Дания', 'Великобритания', 'Испания'],
    'В доме Господа они нашли...Ад', ['Драма'], '94 минуты', 500); 

test('new card should be empty', () => {
    const cart = new Cart();
    expect(cart.items.length).toBe(0);
});

test('add cart Movies', () => {
    cart.add(movie1);
    cart.add(movie2);
    expect(cart.items.length).toBe(2);
});

test('getItems', ()=> {
    cart.add(movie1);
    cart.add(movie2);

    const res = [
        {
            id: 250,
            name: 'August Rush',
            year: 2007,
            country: ['США', 'Южная Корея'],
            slogan: 'Невероятное путешествие со скоростью звука',
            genres: ['Драма', 'музыка', 'семейный'],
            time: '109 минут',
            price: 300,
        },
        {
            id: 318,
            name: 'Song for a Raggy Boy',
            year: 2003,
            country: ['США', 'Южная Корея'],
            slogan: 'В доме Господа они нашли...Ад',
            genres: ['Драма'],
            time: '94 минуты',
            price: 500,
        }
    ];

    const items = cart.getItems();
    expect(items).toEqual(res)
});

test('calculatePrice', () => {
    cart.add(movie1);
    cart.add(movie2);

    const sum = cart.calculatePrice();
    expect(sum).toBe(800);
});

test('discountedPrice', () => {
    cart.add(movie1);
    cart.add(movie2);
    const discountPrise = cart.discountedPrice(10);
    expect(discountPrise).toBe(720);
});

test('delete Element', () => {
    const res = [
        {
            id: 250,
            name: 'August Rush',
            year: 2007,
            country: ['США', 'Южная Корея'],
            slogan: 'Невероятное путешествие со скоростью звука',
            genres: ['Драма', 'музыка', 'семейный'],
            time: '109 минут',
            price: 300,
        }
    ];

    cart.deleteEl(318)
    expect(cart.getItems()).toEqual(res);
});
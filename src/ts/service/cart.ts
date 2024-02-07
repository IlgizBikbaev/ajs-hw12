import Buyable from "../domain/buyable";

export default class Cart {
    items: Buyable[] = [];

    add(item: Buyable): void {
        this.items.push(item);
    }

    getItems(): Buyable[] {
        return [...this.items];
    }

    calculatePrice(): number {
        if(this.items === undefined || this.items.length === 0) {
            return 0;
        }
        return this.items.reduce((acc, curr) => { return acc + curr.price; }, 0);
    }

    discountedPrice(discount:number): number {
        const sumPrices = this.calculatePrice();
        return sumPrices * (1 - (discount / 100));
    }

    deleteEl(id: number): void {
         this.items = this.items.filter((item: Buyable) => item.id !== id);
        }
}
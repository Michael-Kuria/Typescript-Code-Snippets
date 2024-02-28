export type Product = {
    id: number, 
    name: string,
    description: string, 
    category: string, 
    price: number
};

export class OrderLine {
    constructor(public product: Product, public quantity: number){}

    get total() : number{
        return this.product.price * this.quantity;
    }
}


export class Order{
    private lines = new Map<number, OrderLine>();

    constructor(initialLines?: OrderLine[]){
        if(initialLines){
            initialLines.forEach(item => this.lines.set(item.product.id, item));
        }
    }

    public addProduct(product: Product, quantity: number): void{
        if(this.lines.has(product.id)){
            if(quantity === 0){
                this.removeProduct(product.id);
            }else{
                this.lines.get(product.id)!.quantity += quantity;
            }
        }else{
            this.lines.set(product.id, new OrderLine(product, quantity));
        }
    }

    public removeProduct(id: number): void{
        this.lines.delete(id);
    }

    get orderLines(): OrderLine[]{
        return [... this.lines.values()];
    }

    get productCount(): number{
        return this.orderLines.reduce((total, item) => total += 1, 0);
    }

    get total(): number{
        return this.orderLines.reduce((total, item) => total += item.total, 0);
    }

}
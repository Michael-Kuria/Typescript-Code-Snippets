import { Product, Order } from "./data/Entities";


export class DomDisplay {
    props: {
        products: Product[],
        order: Order
    }

    getContent(): HTMLElement{
        let elem = document.createElement("h3");
        elem.innerText = this.getElementText();
        elem.classList.add("bg-primary", "text-center", "text-white", "p-2");
        return elem;
    }

    getElementText(): string{
        return `${this.props.products.length}  Products, order total: $${this.props.order.total}`;
    }
}
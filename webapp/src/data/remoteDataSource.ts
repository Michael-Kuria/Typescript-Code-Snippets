import { AbstractDataSource } from "./AbstractDataSource";
import { Product, Order } from "./Entities";
import Axios from "axios";



const baseURL = "http://localhost:4600";

const urls = {
    products: `${baseURL}/products`,
    orders:`${baseURL}/orders`
}


export class RemoteDataSource extends AbstractDataSource{
    protected loadProducts(): Promise<Product[]> {
        return Axios.get(urls.products).then(response => response.data);
    }
    storeOrder(): Promise<number> {
        let orderData = {
            lines: [...this.order.orderLines.values()].map(ol => ({
                productId: ol.product.id,
                productName: ol.product.name,
                quantity: ol.quantity
            }))
        }

        return Axios.post(urls.orders, orderData).then(response => response.data.id)
    }
    
}


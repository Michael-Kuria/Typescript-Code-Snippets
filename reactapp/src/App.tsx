import React, { FunctionComponent, useState } from "react";
import { Product, Order } from "./data/entities";
import { ProductList } from "./productList";

let testData: Product[] = [1, 2, 3, 4, 5].map((num) => ({
  id: num,
  name: `Prod${num}`,
  category: `Cat${num % 2}`,
  description: `Product ${num}`,
  price: 100,
}));

interface Props {}

const App: FunctionComponent<Props> = () => {
  const [order, setOrder] = useState(new Order());

  const getCategories = (): string[] => {
    return [...new Set(testData.map((p) => p.category))];
  };

  const addToOrder = (product: Product, quantity: number) => {
    setOrder((prevOrder) => {
      const updatedOrder = new Order(prevOrder.orderLines);
      updatedOrder.addProduct(product, quantity);
      return updatedOrder;
    });
  };

  return (
    <div className="App">
      <ProductList
        products={testData}
        categories={getCategories()}
        order={order}
        addToOrder={addToOrder}
      />
    </div>
  );
};

export default App;

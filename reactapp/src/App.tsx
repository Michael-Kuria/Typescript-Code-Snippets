import React, { FunctionComponent, useEffect, useState } from "react";
// import { Product, Order } from "./data/entities";
// import { ProductList } from "./productList";
import { dataStore } from "./data/dataStore";
import { Provider } from "react-redux";
import { HttpHandler } from "./data/httpHandler";
import { addProduct } from "./data/actionCreators";
import { ConnectedProductList } from "./data/productListConnector";

// let testData: Product[] = [1, 2, 3, 4, 5].map((num) => ({
//   id: num,
//   name: `Prod${num}`,
//   category: `Cat${num % 2}`,
//   description: `Product ${num}`,
//   price: 100,
// }));

interface Props {}

const App: FunctionComponent<Props> = () => {
  const httpHandler = new HttpHandler();
  useEffect(() => {
    httpHandler.loadProducts((data) => {
      dataStore.dispatch(addProduct(...data));
    });
  }, []);

  const submitCallback = () => {
    console.log("Submit order");
  };

  return (
    <div className="App">
      <Provider store={dataStore}>
        <ConnectedProductList />
      </Provider>
    </div>
  );
};

export default App;

import { LocalDataSource } from "./data/LoadDataSource";
// import { DomDisplay } from "./DomDisplay";
import { HTMLDisplay } from "./HTMLDisplay";
import "bootstrap/dist/css/bootstrap.css";

let ds = new LocalDataSource();

async function displayData(): Promise<HTMLElement>{
    let display = new HTMLDisplay();
    display.props ={
        dataSource: ds
    }
    return display.getContent();
}

document.onreadystatechange = () => {
    if(document.readyState === "complete"){
        displayData().then(elem => {
            let rootElement = document.getElementById("app");
            rootElement.innerHTML = "";
            rootElement.appendChild(elem);
        })
    }
}
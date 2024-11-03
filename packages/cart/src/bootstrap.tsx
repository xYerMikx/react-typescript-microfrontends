import ReactDOM from "react-dom/client";
import Cart from "./Cart";

const rootElement = document.querySelector("#cart");

if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<Cart />);

import ReactDOM from "react-dom/client";

import Products from "./Products";

const rootElement = document.querySelector("#products");

if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<Products />);

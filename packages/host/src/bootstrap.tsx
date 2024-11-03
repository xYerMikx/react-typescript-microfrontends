import ReactDOM from "react-dom/client";

import App from "./App";

const rootElement = document.querySelector("#host");

if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);

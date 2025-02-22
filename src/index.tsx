import ReactDOM from "react-dom/client";

function App() {
  return <div>Hello World</div>;
}

export default App;

const rootElement = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(rootElement).render(<App />);

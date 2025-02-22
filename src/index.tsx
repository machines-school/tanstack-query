import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Todo from "./todo";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Todo List</h1>
      <Todo />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;

const rootElement = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(rootElement).render(<App />);

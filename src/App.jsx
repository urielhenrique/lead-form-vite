import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Importe o Provider
import { Toaster } from "sonner"; // Importe as notificações
import Layout from "./components/Layout";
import Home from "./pages/Home";

// Criamos uma instância do QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
        {/* O Toaster permite que as mensagens apareçam na tela */}
        <Toaster position="top-right" richColors />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

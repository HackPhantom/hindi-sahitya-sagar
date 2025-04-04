
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import ReadBook from "./pages/ReadBook";
import Authors from "./pages/Authors";
import AuthorDetail from "./pages/AuthorDetail";
import Genres from "./pages/Genres";
import GenreDetail from "./pages/GenreDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/read/:id" element={<ReadBook />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/author/:id" element={<AuthorDetail />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/genre/:id" element={<GenreDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

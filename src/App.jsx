import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './App.scss';
import { BrowserRouter } from 'react-router';
import { Rooter } from './Root';
import "./i18n";




const queryClient= new QueryClient();

function App() {
  

  return (
    <>
    <QueryClientProvider client={queryClient}>
     <BrowserRouter>
     <Rooter/>
     </BrowserRouter>
    </QueryClientProvider>
    </>
  )
}

export default App
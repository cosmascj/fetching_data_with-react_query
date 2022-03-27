
import { useState } from 'react';
import Navbar from './components/Navbar';
import People from './components/People';
import Planets from './components/Planet';
import {
 
  QueryClient,
  QueryClientProvider,
} from "react-query";
const queryClient = new QueryClient();

function App() {
  const [page, setPage]= useState('planets')
  return (
    <QueryClientProvider client={queryClient}>


    <div className="App">
      <h1>Star Wars Info </h1>
      <Navbar setPage={ setPage}/>
      <div className="content"></div>
      {page === 'planets' ? <Planets/> : <People/>}
    </div>
    </QueryClientProvider>
  );
}

export default App;
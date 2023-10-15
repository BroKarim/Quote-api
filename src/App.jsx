/*
- KITA SALAH NAMA, yang betul itu gallery websote
- Ndak masalah toh g nampah

URUTAN
- Create folder pake tailwind
- Rapiin file
- Tes run pake hello world
- Mulai buat Navbar

*/

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import QuotePage from './pages/QuotePage';

function App() {
  return (
    <>
      {/* <Hero></Hero> */}
      <QuotePage></QuotePage>

    </>
  );
}

export default App;

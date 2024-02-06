import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Pages from './Pages.jsx';
import Card from './cards.jsx';
import cardsinfo from '../cardsinfo.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Pages />
        <div className="card-container">
          <Card cardimage={cardsinfo[0].imgUrl} cardname={cardsinfo[0].name} />
          <Card cardimage={cardsinfo[1].imgUrl} cardname={cardsinfo[1].name} />
          <Card cardimage={cardsinfo[2].imgUrl} cardname={cardsinfo[2].name} />
          <Card cardimage={cardsinfo[3].imgUrl} cardname={cardsinfo[3].name} />
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.sass';
import React from 'react';
import { data } from '../../data/data';
import { Card } from '../Card/Card';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Ты сегодня покормил кота?</h1>
        <section className="cards">
          <ul className="cards__list">
            {data.map((card) => {
              return (
                <Card
                  key={card.id}
                  brand={card.brand}
                  name={card.name}
                  type={card.type}
                  volume={card.volume}
                  present={card.present}
                  top={card.top}
                  weight={card.weight}
                  description={card.description}
                  sold={card.sold}
                />
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;

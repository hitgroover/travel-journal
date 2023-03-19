import React from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import data from './components/data';


export default function App() {
  const cards = data.map(item => {
    return (
        <Card 
        key= {item.id}
        img= {item.img}
        country= {item.country}
        place= {item.place}
        period= {item.period}
        description= {item.description}
        />
    )
})

  return (
    <div>
      <Header />
      <div>
        {cards}
      </div>
    </div>
  );
}


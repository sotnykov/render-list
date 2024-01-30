import React from 'react';
import AnimalTable from './AnimalTable';

const App = () => {
  const animals = [
    { type: 'turtle', icon: '🐢' },
    { type: 'octopus', icon: '🐙' },
    { type: 'fish', icon: '🐠' },
    { type: 'flamingo', icon: '🦩' },
    { type: 'penguin', icon: '🐧' },
  ].map(animal => ({ ...animal, isGreen: false }));

  return <AnimalTable animals={animals} />;
};

export default App;
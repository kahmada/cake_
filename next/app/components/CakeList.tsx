import CakeCard from './CakeCard';


import './CakeList.css';
const cakes = [
  { title: 'Chocolate cake', imgSrc: '/assets/12.png', desc: 'very nice...' },
  { title: 'Chocolate cake', imgSrc: '/assets/12.png', desc: 'very nice...' },
  { title: 'Chocolate cake', imgSrc: '/assets/12.png', desc: 'very nice...' },
  { title: 'Chocolate cake', imgSrc: '/assets/12.png', desc: 'very nice...' },
  
  // Ajoute d'autres gâteaux ici
];

export default function CakeList() {
  return (
    <div className="cake-list">
      {cakes.map((cake, idx) => (
        <CakeCard key={idx} {...cake} />
      ))}
    </div>
  );
}

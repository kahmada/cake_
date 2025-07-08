import CakeCard from './CakeCard';


const cakes = [
  { title: 'Chocolate cake', imgSrc: '/assets/12.png', desc: 'njknjk jhojho jkoljp...' },
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

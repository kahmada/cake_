export default function CakeCard({ title, imgSrc, desc }: { title: string, imgSrc: string, desc: string }) {
    return (
      <div className="cake-card">
        <img src={'../assets/12.png'} alt={title} />
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    );
  }
  
import './style.css'

export default function Header() {
  return (
    <header className="header">
      <a href="/">
        <img
          src={require("../../assets/pokedex.png")}
          alt="Pokedex logo"
        />
      </a>
    </header>
  );
}

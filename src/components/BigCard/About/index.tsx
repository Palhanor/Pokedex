import { IAboutProps } from "../../../interfaces/props";

export default function About({ height, weight, abilities }: IAboutProps) {
  return (
    <div className="about">
      <div>
        <p>
          Height: <span>{height / 10} m</span>
        </p>
        <p>
          Weight: <span>{weight} Kg</span>
        </p>
      </div>
      <div>
        <p>Abilities</p>
        <ol>
          {abilities.map((value: any) => (
            <li key={value.ability.name}>{value.ability.name}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

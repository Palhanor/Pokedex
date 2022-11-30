import { IAboutProps } from "../../../interfaces/props";

export default function About({
  description,
  generation,
  habitat,
  abilities,
}: IAboutProps) {
  return (
    <div className="about">
      <p className="description">{description}</p>
      <div className="info">
        <div>
          <p>
            Generation: <span>{generation}</span>
          </p>
          <p>
            Habitat: <span>{habitat}</span>
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
    </div>
  );
}

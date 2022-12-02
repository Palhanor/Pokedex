import { IAboutProps } from "../../../interfaces/props";

export default function About({
  description,
  generation,
  habitat,
  abilities,
}: IAboutProps) {
  return (
    <div className="about">
      <p className="description">{description.replace("\u000c", " ")}</p>
      <div className="info">
        <div>
          <p>
            Generation: <span>{generation}</span>
          </p>
          <p>
            Habitat: <span>{habitat ? habitat : ""}</span>
          </p>
        </div>
        <div>
          <p>Abilities</p>
          <ol>
            {abilities.map((ability: string) => (
              <li key={ability}>{ability}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

import { IStatsProps } from "../../../interfaces/props";

export default function Stats({
  xp,
  height,
  weight,
  capture,
  hp,
  attack,
  defense,
  speed,
  spAttack,
  spDefense,
}: IStatsProps) {
  return (
    <div className="stats">
      <div>
        <p>
          XP: <span>{xp}</span>
        </p>
        <p>
          Capture: <span>{capture}</span>
        </p>
        <p>
          Speed: <span>{speed}</span>
        </p>
        <p>
          Height: <span>{height}</span>
        </p>
        <p>
          Weight: <span>{weight}</span>
        </p>
      </div>
      <div>
        <p>
          HP: <span>{hp}</span>
        </p>
        <p>
          Attack: <span>{attack}</span>
        </p>
        <p>
          Defense: <span>{defense}</span>
        </p>
        <p>
          Sp. Attack: <span>{spAttack}</span>
        </p>
        <p>
          Sp. Defense: <span>{spDefense}</span>
        </p>
      </div>
    </div>
  );
}

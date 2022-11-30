import { IStatsProps } from "../../../interfaces/props";

export default function Stats({
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
          HP: <span>{hp}</span>
        </p>
        <p>
          Attack: <span>{attack}</span>
        </p>
        <p>
          Defense: <span>{defense}</span>
        </p>
      </div>
      <div>
        <p>
          Speed: <span>{speed}</span>
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

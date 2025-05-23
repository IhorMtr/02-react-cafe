import type { VoteType } from '../../types/votes';
import css from './VoteOptions.module.css';
interface VoteOptionsProps {
  canReset: boolean;
  onVote: (type: VoteType) => void;
  onReset: () => void;
}
export default function VoteOptions({
  canReset,
  onVote,
  onReset,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button
        onClick={() => {
          onVote('good');
        }}
        className={css.button}
      >
        Good
      </button>
      <button
        onClick={() => {
          onVote('neutral');
        }}
        className={css.button}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          onVote('bad');
        }}
        className={css.button}
      >
        Bad
      </button>
      {canReset && (
        <button onClick={onReset} className={`${css.button} ${css.reset}`}>
          Reset
        </button>
      )}
    </div>
  );
}

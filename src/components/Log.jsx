export default function Log({ turn }) {
  return (
    <ol id="log">
      {turn.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {" "}
          {turn.player} selected row {turn.square.row} and column{" "}
          {turn.square.col}
        </li>
      ))}
    </ol>
  );
}

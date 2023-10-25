import styles from "./instruction.module.css";

function Instruction() {
  return (
    <div className={styles.container}>
      <h3>Instruction</h3>
      <ul>
        <li>Put the flame on </li>
        <li>Heat the water for 10 min </li>
        <li>put patotoes in it carefully </li>
      </ul>
    </div>
  );
}
export default Instruction;

import Link from "next/link";
import styles from "../styles/navegador.module.css";

export default function Navegador(props) {
  return (
    <div
      className={styles.navegador}
      style={{ backgroundColor: props.cor ?? "dodgerblue" }}
    >
      <Link href={props.destino}>{props.titulo}</Link>
    </div>
  );
}

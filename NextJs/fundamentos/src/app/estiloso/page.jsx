import styles from "./styles.module.css";
import Layout from "@/components/Layout";

export default function Estiloso() {
  return (
    <div>
      <Layout titulo="Exemplo de CSS Modularizado">
        <div className={styles.roxo}>
          <h1>Estiloso</h1>
        </div>
      </Layout>
    </div>
  );
}

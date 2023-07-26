import Navegador from "@/components/Navegador";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        height: "100vh",
      }}
    >
      <Navegador destino="/estiloso" titulo="Ir para Estiloso" />
    </main>
  );
}

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
      <Navegador destino="/navegacao" titulo="Navegação #01" cor="#9400d3" />
      <Navegador
        destino="/cliente/123"
        titulo="Navegação #02 (Dinâmica)"
        cor="#9400d3"
      />
    </main>
  );
}

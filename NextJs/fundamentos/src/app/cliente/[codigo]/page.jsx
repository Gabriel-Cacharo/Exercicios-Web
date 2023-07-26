"use client";

import Layout from "@/components/Layout";

export default function ClientePorCodigo({ params }) {
  return (
    <Layout titulo="Navegação Dinâmica">
      <span>Código = {params.codigo}</span>
    </Layout>
  );
}

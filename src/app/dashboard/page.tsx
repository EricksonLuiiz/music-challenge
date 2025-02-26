import React from "react";
import MusicTable from "../../../resources/js/Components/MusicTable";

export default function Dashboard() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Lista de Músicas por Usuário
        </h2>
        <MusicTable />
      </div>
    </>
  );
}

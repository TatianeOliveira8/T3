import React from 'react';
import TabelaDados from '../../components/TabelaDados';

const colunas = [
  { key: 'nome', label: 'Nome' },
  { key: 'nomeSocial', label: 'Nome Social' },
  { key: 'cpf', label: 'CPF' }
];

const clientes = [
  { nome: 'João Silva', nomeSocial: 'Jão', cpf: '123.456.789-00' },
  { nome: 'Maria Santos', nomeSocial: 'Mari', cpf: '123.456.789-00' },
  { nome: 'Pedro Oliveira', nomeSocial: 'Pedrinho', cpf: '123.456.789-00' },
];

const ListagemClientes: React.FC = () => {
  const handleEdit = (cliente: any) => {
    window.location.hash = `#/clientes/editar/${cliente.cpf}`;
  };

  const handleDelete = (cliente: any) => {
    alert('Cliente removido! (simulado)');
  };

  const navegarCadastro = () => {
    window.location.hash = '#/clientes/cadastrar';
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h2 fw-bold text-success m-0">Clientes</h1>
        <button
          type="button"
          className="btn btn-success d-flex align-items-center gap-2"
          onClick={navegarCadastro}
        >
          <span className="fw-bold">Novo Cliente</span>
        </button>
      </div>
      <TabelaDados
        colunas={colunas}
        dados={clientes}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ListagemClientes;

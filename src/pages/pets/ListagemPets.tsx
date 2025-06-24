import React from 'react';
import TabelaDados from '../../components/TabelaDados';

const colunas = [
  { key: 'nome', label: 'Nome' },
  { key: 'tipo', label: 'Tipo' },
  { key: 'raca', label: 'Raça' },
  { key: 'genero', label: 'Gênero' },
  { key: 'proprietario', label: 'Cliente' }
];

const pets = [
  { nome: 'Cacau', tipo: 'Cão', raca: 'Pinscher', genero: 'F', proprietario: 'João Silva' },
  { nome: 'Ada', tipo: 'Gato', raca: 'Persa', genero: 'F', proprietario: 'Maria Santos' },
  { nome: 'Thor', tipo: 'Cão', raca: 'Pastor Alemão', genero: 'M', proprietario: 'Pedro Oliveira' },
];

const ListagemPets: React.FC = () => {
  const handleEdit = (pet: any) => {
    window.location.hash = `#/pets/editar/${pet.nome}`;
  };

  const navegarCadastro = () => {
    window.location.hash = '#/pets/cadastrar';
  };

  const handleDelete = () => {
    alert('Pet removido! (simulado)');
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h2 fw-bold text-success m-0">Pets</h1>
        <button
          type="button"
          className="btn btn-success d-flex align-items-center gap-2"
          onClick={navegarCadastro}
        >
          <span className="fw-bold">Novo Pet</span>
        </button>
      </div>
      <TabelaDados
        colunas={colunas}
        dados={pets}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ListagemPets;

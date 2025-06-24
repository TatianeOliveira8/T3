import React from 'react';
import FormularioPadrao from '../../components/FormularioPadrao';

const pet = {
  nomeResponsavel: 'João Silva',
  nome: 'cacau',
  raca: 'Pincher',
  genero: 'M',
  tipo: 'Cão'
};

const campos = [
  { nome: 'novoNome', rotulo: 'Novo Nome do Pet', tipo: 'text', valor: '', placeholder: 'Deixe em branco para manter', obrigatorio: false },
  { nome: 'novaRaca', rotulo: 'Nova Raça', tipo: 'text', valor: '', placeholder: 'Deixe em branco para manter', obrigatorio: false },
  { nome: 'novoGenero', rotulo: 'Novo Gênero (M/F)', tipo: 'text', valor: '', placeholder: 'Deixe em branco para manter', obrigatorio: false },
  { nome: 'novoTipo', rotulo: 'Novo Tipo do Pet', tipo: 'text', valor: '', placeholder: 'Deixe em branco para manter', obrigatorio: false }
];

const AtualizarPet: React.FC = () => {
  const aoEnviar = (dados: Record<string, string>) => {
    const nome = dados.novoNome || pet.nome;
    const novaRaca = dados.novaRaca || pet.raca;
    const novoGenero = dados.novoGenero || pet.genero;
    const novoTipo = dados.novoTipo || pet.tipo;
    alert(`Pet atualizado!\nNome: ${nome}\nRaça: ${novaRaca}\nGênero: ${novoGenero}\nTipo: ${novoTipo}`);
    window.location.hash = '#/pets';
  };

  const aoCancelar = () => {
    window.location.hash = '#/pets';
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <FormularioPadrao
            campos={campos}
            aoEnviar={aoEnviar}
            aoCancelar={aoCancelar}
            titulo="Atualizar Pet"
          />
          <div className="text-muted mt-3 small">Nome do Responsável: {pet.nomeResponsavel}</div>
        </div>
      </div>
    </div>
  );
};

export default AtualizarPet;

import React from 'react';
import FormularioPadrao from '../../components/FormularioPadrao';

const cliente = {
  nome: 'João Silva',
  nomeSocial: 'Joãozinho',
  cpf: '123.456.789-00'
};

const campos = [
  { nome: 'novoNome', rotulo: 'Novo Nome', tipo: 'text', valor: '', placeholder: 'Deixe em branco para manter', obrigatorio: false },
  { nome: 'novoNomeSocial', rotulo: 'Novo Nome Social', tipo: 'text', valor: '', placeholder: 'Deixe em branco para manter', obrigatorio: false }
];

const AtualizarCliente: React.FC = () => {
  const aoEnviar = (dados: Record<string, string>) => {
    const nome = dados.novoNome || cliente.nome;
    const nomeSocial = dados.novoNomeSocial || cliente.nomeSocial;
    alert(`Cliente atualizado!\nNome: ${nome}\nNome Social: ${nomeSocial}`);
    window.location.hash = '#/clientes';
  };

  const aoCancelar = () => {
    window.location.hash = '#/clientes';
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <FormularioPadrao
            campos={campos}
            aoEnviar={aoEnviar}
            aoCancelar={aoCancelar}
            titulo="Atualizar Cliente"
          />
        </div>
      </div>
    </div>
  );
};

export default AtualizarCliente;

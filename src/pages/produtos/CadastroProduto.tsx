import React from 'react';
import FormularioPadrao from '../../components/FormularioPadrao';

const campos = [
  { nome: 'nome', rotulo: 'Nome do Produto', tipo: 'text', valor: '', placeholder: 'Digite o nome do produto', obrigatorio: true },
  { nome: 'preco', rotulo: 'Preço (R$)', tipo: 'number', valor: '', placeholder: '0.00', obrigatorio: true }
];

const CadastroProduto: React.FC = () => {
  const aoEnviar = (dados: Record<string, string>) => {
    alert('Produto cadastrado! (simulado)');
    window.location.hash = '#/produtos';
  };

  const aoCancelar = () => {
    window.location.hash = '#/produtos';
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <FormularioPadrao
            campos={campos}
            aoEnviar={aoEnviar}
            aoCancelar={aoCancelar}
            titulo="Cadastrar Produto"
          />
        </div>
      </div>
    </div>
  );
};

export default CadastroProduto;

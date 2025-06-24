import React from 'react';
import FormularioPadrao from '../../components/FormularioPadrao';

const produto = {
  id: '1',
  nome: 'Ração Premium',
  preco: '85.00'
};

const campos = [
  { nome: 'novoNome', rotulo: 'Novo Nome do Produto', tipo: 'text', valor: '', placeholder: 'Deixe em branco para manter', obrigatorio: false },
  { nome: 'novoPreco', rotulo: 'Novo Preço (R$)', tipo: 'number', valor: '', placeholder: 'Deixe em branco para manter', obrigatorio: false }
];

const AtualizarProduto: React.FC = () => {
  const aoEnviar = (dados: Record<string, string>) => {
    const nome = dados.novoNome || produto.nome;
    const preco = dados.novoPreco || produto.preco;
    alert(`Produto atualizado!\nNome: ${nome}\nPreço: R$ ${preco}`);
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
            titulo="Atualizar Produto"
          />
        </div>
      </div>
    </div>
  );
};

export default AtualizarProduto;

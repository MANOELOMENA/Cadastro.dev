import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 100%;  /* Preenche toda a largura do modal */
  max-width: 400px; /* Limita a largura máxima do formulário */
  height: 100%; /* Preenche toda a altura do modal */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%; /* Preenche toda a largura disponível */
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px; /* Ajusta o tamanho da fonte */
`;

const Button = styled.button`
  width: 100%; /* Preenche toda a largura disponível */
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const CadastroForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulário enviado com sucesso!');
  };

  return (
    <FormWrapper>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="senha"
          placeholder="Senha"
          value={formData.senha}
          onChange={handleChange}
        />
        <Button type="submit">Cadastrar</Button>
      </form>
    </FormWrapper>
  );
};

export default CadastroForm;

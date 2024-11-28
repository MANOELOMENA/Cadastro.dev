import React from 'react';
import styled from 'styled-components';
import CadastroForm from '../Cadastro/Cadastro.jsx';


const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 50%; /* Ocupa 50% da largura da tela */
  height: 100vh; /* Ocupa 100% da altura da tela */
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Modal = () => {
  return (
    <ModalWrapper>
     <CadastroForm/>
    </ModalWrapper>
  );
};

export default Modal;

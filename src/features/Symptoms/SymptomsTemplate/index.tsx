import React, { useState } from 'react';
import { Layout } from '../../Layout';
import { TableData } from '../components/TableData';
import { ModalInfo } from '../components/ModalInfo/index';
import {
  MainContainer,
  ButtonContainer,
  TableContainer,
  ButtonAdd,
} from './styles';
import { useHome } from '../../../hooks/useHome';

export const SymptomsTemplate = () => {
  const { addNewRegisterSymptom } = useHome();
  const [showModalAlert, setshowModalAlert] = useState(false);
  const handleOpenAlertModal = () => {
    setshowModalAlert(true);
  };
  const handleCloseAlertModal = () => {
    setshowModalAlert(false);
  };

  const handleSaveRegister = () => {
    addNewRegisterSymptom({
      name: 'juan',
      lastName: 'cast',
    });
    handleCloseAlertModal();
  };

  return (
    <div>
      <ModalInfo
        showModal={showModalAlert}
        clickOk={handleSaveRegister}
        hideModal={handleCloseAlertModal}
        text={'test'}
      />
      <Layout>
        <MainContainer>
          <ButtonContainer>
            <ButtonAdd onClick={handleOpenAlertModal}>
              Agregar Registro
            </ButtonAdd>
          </ButtonContainer>
          <TableContainer>
            <TableData />
          </TableContainer>
        </MainContainer>
      </Layout>
    </div>
  );
};

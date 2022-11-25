import React, { useState } from 'react';
import { ModalBody, Modal, Button } from 'reactstrap';
import {
  ContainerChecks,
  ContainerFooter,
  ContainerheaderModal,
} from './styles';
import { FaInfoCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';
import { InputText } from '../InputText';
import { useHome } from '../../../../hooks/useHome';
type Props = {
  showModal: boolean;
  hideModal: () => void;
  text: string;
  clickOk: () => void;
};

export const ModalInfo = ({ showModal, hideModal, text, clickOk }: Props) => {
  const { addNewRegisterSymptom } = useHome();
  const [symptoms, setSymptoms] = useState([
    {
      id: 0,
      symptom: 'Tos',
      value: false,
    },
    {
      id: 1,
      symptom: 'Fiebre',
      value: false,
    },
    {
      id: 2,
      symptom: 'Dolor de Cabeza',
      value: false,
    },
  ]);

  const handleOnChange = (id: number) => {
    symptoms[id].value = !symptoms[id].value;
    setSymptoms([...symptoms]);
  };

  const [name, setname] = useState('');
  const [lastName, setLastname] = useState('');
  const [temp, setTemp] = useState('');
  const [date, setDate] = useState('');

  const handleSaveData = () => {
    addNewRegisterSymptom({
      name,
      lastName,
      date,
      temp,
      symptoms,
    });
    hideModal();
  };

  return (
    <>
      <Modal
        isOpen={showModal}
        style={{
          width: '350px',
          position: 'absolute',
          top: '15%',
          left: window.innerWidth < 500 ? '2%' : '37%',
        }}
      >
        <ContainerheaderModal>
          <FaInfoCircle size={50} />
        </ContainerheaderModal>

        <ModalBody>
          <InputText
            name='name'
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder='Digite su nombre'
            type='text'
            width='70%'
          />
          <InputText
            name='Apellido'
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
            placeholder='Digite su Apellido'
            type='text'
            width='70%'
          />
          <InputText
            name='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder='Digite la Fecha'
            type='text'
            width='70%'
          />
          <InputText
            name='temp'
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
            placeholder='Digite su Temeperatura'
            type='number'
            width='70%'
          />
          <ContainerChecks>
            {symptoms?.map((symp, index) => {
              return (
                <div>
                  <input
                    type='checkbox'
                    id='topping'
                    name={symp.symptom}
                    value={symp.symptom}
                    checked={symptoms[index].value}
                    onChange={() => handleOnChange(symp.id)}
                  />
                  {symp.symptom}
                </div>
              );
            })}
          </ContainerChecks>
        </ModalBody>
        <hr />
        <ContainerFooter>
          <Button
            color='info'
            onClick={handleSaveData}
          >
            Aceptar
          </Button>
          <Button
            color='danger'
            onClick={hideModal}
          >
            Cancelar
          </Button>
        </ContainerFooter>
      </Modal>
    </>
  );
};

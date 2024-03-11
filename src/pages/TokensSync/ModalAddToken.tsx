import React, { useEffect, useState, ChangeEvent } from 'react';
import { navigateHeader } from '@tiendanube/nexo';
import { nexo } from '@/app';
import { Box, Button, Card, Modal } from '@nimbus-ds/components';
import { FormField } from '@nimbus-ds/patterns';
import { IDataToken } from './TokensSync.types';

const ModalAddToken: React.FC<{
  onCreateToken: (data: IDataToken) => Promise<boolean>;
}> = ({ onCreateToken }) => {
  useEffect(() => {
    navigateHeader(nexo, { goTo: '/', text: 'Volver al inicio' });
  }, []);

  const [ModalOpen, setModalOpen] = useState<boolean>(false);
  const [data, setData] = useState<IDataToken>({
    token: '',
    name: '',
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: name == 'token' ? value.replace(/[\r\n\s]+/g, '') : value,
    });
  };

  return (
    <>
      <Button
        onClick={function noRefCheck() {
          setModalOpen(true);
        }}
      >
        Agregar Token
      </Button>
      <Modal
        onDismiss={function noRefCheck() {
          setData({
            token: '',
            name: '',
          });
          setModalOpen(false);
        }}
        open={ModalOpen}
      >
        <React.Fragment key=".0">
          <Modal.Body padding="none">
            <Card>
              <Card.Header title="Agregar token" />
              <Card.Body>
                <Box display="flex" flexDirection="column" gap="4">
                  <FormField.Input
                    id="name"
                    name="name"
                    label="Nombre de la tienda"
                    placeholder="Ejemplo: MiTienda  "
                    onChange={handleInputChange}
                  />
                  <FormField.Textarea
                    id="token"
                    name="token"
                    label="Pega aquí el token"
                    lines={5}
                    onChange={handleInputChange}
                  />
                </Box>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button
              appearance="neutral"
              onClick={function noRefCheck() {
                setData({
                  token: '',
                  name: '',
                });
                setModalOpen(false);
              }}
            >
              Cancelar
            </Button>
            <Button
              appearance="primary"
              disabled={
                data.token.length < 2 ? true : data.name == '' ? true : false
              }
              onClick={async () => {
                const a = await onCreateToken(data);
                setModalOpen(!a); 
              }}
            >
              Aceptar
            </Button>
          </Modal.Footer>
        </React.Fragment>
      </Modal>
    </>
  );
};

export default ModalAddToken;
//Limpiar el texto de la nota si la orden se envía exitosamente

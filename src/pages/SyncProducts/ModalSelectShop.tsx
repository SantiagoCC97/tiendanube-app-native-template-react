import React, { useEffect, useState } from 'react';
import { navigateHeader } from '@tiendanube/nexo';
import { nexo } from '@/app';
import { Box, Button, Card, Modal } from '@nimbus-ds/components';
import { FormField } from '@nimbus-ds/patterns';

const ModalSelectToken: React.FC = () => {
  useEffect(() => {
    navigateHeader(nexo, { goTo: '/', text: 'Volver al inicio' });
  }, []);
 
  const [ModalOpen, setModalOpen] = useState<boolean>(false);

 

  return (
    <>
    <Button  onClick={function noRefCheck() {
          setModalOpen(true);
        }}>
      Agregar Token
    </Button>
    <Modal
      onDismiss={function noRefCheck() {
        setModalOpen(false);
      }}
      open={ModalOpen}
    >
      <React.Fragment key=".0">
        
        <Modal.Body padding="none">
        <Card>
          <Card.Header title="Agregar token" />
          <Card.Body>
            <Box
              display="flex"
              flexDirection="column"
              gap="4"
            >
              <FormField.Input
               id="shopname"
                label="Nombre de la tienda"
                placeholder="Ejemplo: Tienda de ejemplo"
              />
              <FormField.Textarea
                id="token"
                label="Pega aquí el token"
                lines={5}
              />
            </Box>
          </Card.Body>
        </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button appearance="neutral">
            Cancelar
          </Button>
          <Button appearance="primary">
            Aceptar
          </Button>
        </Modal.Footer>
      </React.Fragment>
    </Modal>
  </>
  );
};

export default ModalSelectToken;
//Limpiar el texto de la nota si la orden se envía exitosamente

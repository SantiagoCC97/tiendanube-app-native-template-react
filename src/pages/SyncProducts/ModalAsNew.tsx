import  { FC, Fragment } from 'react';
import { Box, Button, Card, Modal } from '@nimbus-ds/components';
import { FormField } from '@nimbus-ds/patterns';

interface MiComponenteProps {
  toogle: boolean;
  setToogle: (flag: boolean)=>void
}

const ModalAsNew: FC<MiComponenteProps> = ({ toogle, setToogle }) => {

  return ( 
    <>
      <Modal
        onDismiss={function noRefCheck() {
          setToogle(false)
        }}
        open={toogle}
      >
        <Fragment key=".0">
          <Modal.Body padding="none">
            <Card>
              <Card.Header title="Nuevo prod" />
              <Card.Body>
                <Box display="flex" flexDirection="column" gap="4">
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
            <Button appearance="neutral">Cancelar</Button>
            <Button appearance="primary">Aceptar</Button>
          </Modal.Footer>
        </Fragment>
      </Modal>
    </>
  );
};

export default ModalAsNew;
//Limpiar el texto de la nota si la orden se envía exitosamente

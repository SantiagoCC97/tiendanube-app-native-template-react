import { FC, Fragment } from 'react';
import { Button, Modal, Text } from '@nimbus-ds/components';

interface ComponentProps {
  toogle: boolean;
  setToogle: (flag: boolean) => void;
}

const ModalUnsync: FC<ComponentProps> = ({ toogle, setToogle }) => {
  return (
    <>
      <Modal
        onDismiss={function noRefCheck() {
          setToogle(false);
        }}
        open={toogle}
      >
        <Fragment key=".0">
          <Modal.Header title="Eliminar sincronización con Dropi" />

          <Modal.Body padding="none">
            <Text>
              {' '}
              ¿Deseas desvincular este producto de dropi? Esta acción dejará de
              enviar las órdenes de este producto a Dropi.
            </Text>
          </Modal.Body>

          <Modal.Footer>
            <Button
              onClick={function noRefCheck() {
                setToogle(false);
              }}
              appearance="neutral"
            >
              Cancelar
            </Button>
            <Button
              appearance="danger"
              onClick={function noRefCheck() {
                setToogle(false);
              }}
            >
              Eliminar
            </Button>
          </Modal.Footer>
        </Fragment>
      </Modal>
    </>
  );
};

export default ModalUnsync;
//Limpiar el texto de la nota si la orden se envía exitosamente

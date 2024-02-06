import { Fragment, FC, useState } from 'react';
import { Button, Card, Modal, Text } from '@nimbus-ds/components'; 

interface MiComponenteProps {
  toogle: boolean;
  setToogle: (flag: boolean) => void;
}

interface Tienda {
  id: number;
  nombre: string;
}

const tiendaDePrueba: Tienda = { id: 1, nombre: 'Tienda de prueba' };
const otraTienda: Tienda = { id: 2, nombre: 'Otra tienda' };

const Tiendas = {
  tienda1: tiendaDePrueba,
  tienda2: otraTienda,
};

const ModalSelectShop: FC<MiComponenteProps> = ({ toogle, setToogle }) => {

  const [tiendaSeleccionada, setTiendaSeleccionada] = useState<number | null>(
    null,
  );

  const selectedShop = (id: number) => {
    setTiendaSeleccionada(id);
  };

  
  return (
    <>
      <Modal
        onDismiss={function noRefCheck() {
          setToogle(false);
        }}
        open={toogle}
      >
        <Fragment key=".0">
          <Modal.Header title="Selecciona tienda" />
          <Modal.Body padding="none">
            {Object.values(Tiendas).map((tienda) => (
              <div className="div-pad">
                <Card
                  key={tienda.id}
                  onClick={() => selectedShop(tienda.id)}
                  backgroundColor={
                    tiendaSeleccionada === tienda.id
                      ? 'primary-surface'
                      : 'neutral-surface'
                  }
                >
                  <div className="test">
                    <img
                      className="avatar"
                      width="50px"
                      height="50px"                     
                      src="https://previews.123rf.com/images/aprillrain/aprillrain2212/aprillrain221200638/196354278-imagen-de-caricatura-de-un-astronauta-sentado-en-una-luna-ilustraci%C3%B3n-de-alta-calidad.jpg"
                    />
                    <Text  fontSize="highlight" lineHeight="base">
                      {tienda.nombre}
                    </Text>
                  </div>
                </Card>
              </div>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button
              appearance="neutral"
              onClick={function noRefCheck() {
                setToogle(false);
              }}
            >
              Cancelar
            </Button>
            <Button appearance="primary">Aceptar</Button>
          </Modal.Footer>
        </Fragment>
      </Modal>
    </>
  );
};

export default ModalSelectShop;
//Limpiar el texto de la nota si la orden se envía exitosamente

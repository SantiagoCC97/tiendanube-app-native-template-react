import { Fragment, FC, useState } from 'react';
import { Button, Card, Modal, Text } from '@nimbus-ds/components';
import ProductsDataProvider from './SyncProductsDataProvider';
import { useSelector, useDispatch } from 'react-redux';

interface MiComponenteProps {
  toogle: boolean;
  setToogle: (flag: boolean) => void;
}

const ModalSelectShop: FC<MiComponenteProps> = ({ toogle, setToogle }) => {
  const [tiendaSeleccionada, setTiendaSeleccionada] = useState<string | null>(
    null,
  );

  const dispatch = useDispatch();

  return ( 
    <>
      <ProductsDataProvider>
        {({ shops }) => {

          const selectedShop = (token: string, country: string) => {
            setTiendaSeleccionada(token); 
            dispatch({type: "TOKEN",  payload:  {token: token, country: country}  })
          };

          

          return (
            <Modal
              onDismiss={function noRefCheck() {
                setToogle(false);
              }}
              open={toogle}
            >
              <Fragment key=".0">
                <Modal.Header title="Selecciona tienda" />
                <Modal.Body>
 



                  {shops.map((tienda) => (
                    <div className="div-pad">
                      <Card
                        key={tienda._doc.token}
                        onClick={() =>
                          selectedShop(tienda._doc.token, tienda.country)
                        }
                        backgroundColor={
                          tiendaSeleccionada === tienda._doc.token
                            ? 'primary-surface'
                            : 'neutral-surface'
                        }
                      >
                        <div className="test">
                          <img
                            className="avatar"
                            width="50px"
                            height="50px"
                            src=" assets/images/logodropi.png"
                          />
                          <Text fontSize="highlight" lineHeight="base">
                            {tienda._doc.shop_name}
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
                    Cerrar
                  </Button>
                  {/* <Button appearance="primary"  onClick={function noRefCheck() {
                    //onShopSelect.... capturar CO  etc... necesario para llamar la lista de productos.


                      setToogle(false);
                    }}>Aceptar</Button> */}
                </Modal.Footer>
              </Fragment>
            </Modal>
          );
        }}
      </ProductsDataProvider>
    </>
  );
};

export default ModalSelectShop;
//Limpiar el texto de la nota si la orden se envía exitosamente

import { FC, Fragment, useState, ChangeEvent, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  Checkbox,
  Modal,
  Text,
} from '@nimbus-ds/components';
import { FormField } from '@nimbus-ds/patterns';
import { IprodFetched, Ivariation } from './SyncProductsFetched.types';
import SyncProductsDataProvider from './SyncProductsDataProvider';

interface MiComponenteProps {
  toogle: boolean;
  setToogle: (flag: boolean) => void;
  ProductSelected: IprodFetched;
}

const ModalAsNew: FC<MiComponenteProps> = ({
  toogle,
  setToogle,
  ProductSelected,
}) => {
  const [UseNameDropi, setUseNameDropi] = useState<boolean>(true);
  const [UseDescDropi, setUseDescDropi] = useState<boolean>(true);
  const [UsePrice, setUsePrice] = useState<boolean>(true);
  const [UseImgDropi, setUseImgDropi] = useState<boolean>(true);
  const [Step, setStep] = useState<number>(0);
  const [ProductSelect, setProductSelect] = useState<IprodFetched>();

  const [data, setData] = useState<IData>({
    id: '',
    description: ProductSelected.description,
    name: ProductSelected.name,
    sale_price: ProductSelected.sale_price,
    img: UseImgDropi,
  });

  useEffect(() => {
    setProductSelect(ProductSelected);
    setUseImgDropi(ProductSelected.usageImg);
  }, []);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleVarChecked = (variant: Ivariation) => {
    variant.isChecked = !variant.isChecked;
    if (ProductSelect) {
      const index = ProductSelect.variations.findIndex(
        (variantObject) => variantObject.id === variant.id,
      );
      ProductSelect.variations[index] = variant;
      setProductSelect({ ...ProductSelect });
    }
  };

  return (
    <>
      <SyncProductsDataProvider>
        {({ syncProductSubmit }) => {
          return (
            <Modal
              onDismiss={function noRefCheck() {
                setToogle(false);
              }}
              open={toogle}
            >
              <Fragment key=".0">
                <Modal.Body padding="none">
                  <Card>
                    <Card.Header title="Importar como producto nuevo" />
                    <Card.Body>
                      {Step == 0 ? (
                        // Nombre producto
                        <>
                          <Box
                            display="flex"
                            flexDirection="column"
                            padding="1"
                            gap="0-5"
                          >
                            <Checkbox
                              checked={UseNameDropi}
                              readOnly={true}
                              onChange={() => {
                                setUseNameDropi(!UseNameDropi);
                                setData({
                                  ...data,
                                  name: '',
                                });
                              }}
                              name="name-dropi"
                              label="Utilizar el nombre de Dropi"
                            />

                            <FormField.Input
                              id="prodname"
                              name={'name'}
                              label="Nombre del producto"
                              value={
                                UseNameDropi ? ProductSelect?.name : data.name
                              }
                              onChange={handleInputChange}
                              disabled={UseNameDropi ? true : false}
                            />
                          </Box>
                          <Box
                            display="flex"
                            flexDirection="column"
                            padding="1"
                            marginTop="4"
                            gap="0-5"
                          >
                            <Checkbox
                              checked={UseDescDropi}
                              readOnly={true}
                              onChange={() => {
                                setUseDescDropi(!UseDescDropi);
                                setData({
                                  ...data,
                                  description: '',
                                });
                              }}
                              name="desc-dropi"
                              label="Utilizar la descripción de Dropi"
                            />

                            <FormField.Textarea
                              id="proddesc"
                              label="Descripción del producto"
                              name="description"
                              value={
                                UseDescDropi
                                  ? ProductSelect?.description
                                  : data.description
                              }
                              onChange={handleInputChange}
                              disabled={UseDescDropi ? true : false}
                            />
                          </Box>
                          <Box
                            display="flex"
                            flexDirection="column"
                            padding="1"
                            marginTop="4"
                            borderWidth="1"
                            borderStyle="dashed"
                            borderColor="neutral-interactive"
                            borderRadius="2"
                          >
                            <Checkbox
                              checked={UseImgDropi}
                              onChange={() => {
                                setUseImgDropi(!UseImgDropi);
                                setData({
                                  ...data,
                                  img: !UseImgDropi,
                                });
                              }}
                              name="usageImg"
                              label="Utilizar la imagen de Dropi"
                            />
                            <Text fontSize={'caption'}>
                              A través del menú productos de tiendanube podrás
                              agregar más imágenes.
                            </Text>
                          </Box>
                        </>
                      ) : Step == 1 ? ( // variants producto
                        ProductSelect && ProductSelect.variations.length > 0 ? (
                          <Box
                            key={'variations'}
                            display="flex"
                            flexDirection="column"
                            gap="4"
                            overflow="auto"
                            maxHeight="40vh"
                          >
                            <Text fontSize={'highlight'}>
                              Selecciona las variaciones que quieres importar
                            </Text>
                            {ProductSelect?.variations.map((variant) => (
                              <div className="div-pad">
                                <Checkbox
                                  readOnly={true}
                                  name={variant.id}
                                  checked={variant.isChecked}
                                  key={variant.id}
                                  label={variant.label}
                                  onChange={() => handleVarChecked(variant)}
                                />
                              </div>
                            ))}
                          </Box>
                        ) : (
                          <Text>Este producto no tiene variaciones...</Text>
                        )
                      ) : Step == 2 ? (
                        <Box display="flex" flexDirection="column" gap="4">
                          <Text>Determina el precio del producto</Text>
                          <Checkbox
                            name="price-drop"
                            label="Usar precio de dropi"
                            checked={UsePrice}
                            onChange={() => {
                              setUsePrice(!UsePrice);
                              setData({
                                ...data,
                                sale_price:
                                  !UsePrice == true
                                    ? ProductSelect?.sale_price
                                    : '',
                              });
                            }}
                          />
                          <FormField.Input
                            name="sale_price"
                            id="prodprice"
                            label="Precio del producto"
                            type="number"
                            value={
                              UsePrice
                                ? ProductSelect?.sale_price
                                : data.sale_price
                            }
                            onChange={handleInputChange}
                            disabled={UsePrice ? true : false}
                          />
                        </Box>
                      ) : (
                        <></>
                      )}
                    </Card.Body>
                  </Card>
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
                  {Step != 0 ? (
                    <Button
                      appearance="neutral"
                      onClick={() => {
                        setStep(Step - 1);
                      }}
                    >
                      {' '}
                      Atras
                    </Button>
                  ) : (
                    <></>
                  )}

                  {Step == 2 ? (
                    <Button
                      appearance="primary"
                      onClick={function noRefCheck() {
                        if (!UseNameDropi && ProductSelect) {
                          ProductSelect.name = data.name as string;
                          setProductSelect({ ...ProductSelect });
                        } else if (!UseDescDropi && ProductSelect) {
                          ProductSelect.description =
                            data.description as string;
                          setProductSelect({ ...ProductSelect });
                        } else if (!UseImgDropi && ProductSelect) {
                          ProductSelect.usageImg = false;
                          setProductSelect({ ...ProductSelect });
                        } else if (!UsePrice && ProductSelect) {
                          ProductSelect.sale_price = data.sale_price as string;
                          setProductSelect({ ...ProductSelect });
                        }
                        syncProductSubmit(ProductSelect as IprodFetched)
                        setToogle(false);
                      }}
                    >
                      Importar
                    </Button>
                  ) : (
                    <Button
                      appearance="neutral"
                      onClick={() => {
                        setStep(Step + 1);
                      }}
                    >
                      Siguiente
                    </Button>
                  )}
                </Modal.Footer>
              </Fragment>
            </Modal>
          );
        }}
      </SyncProductsDataProvider>
      ;
    </>
  );
};

export default ModalAsNew;
//Limpiar el texto de la nota si la orden se envía exitosamente

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
import { IprodFetched } from './SyncProductsFetched.types';

interface MiComponenteProps {
  toogle: boolean;
  setToogle: (flag: boolean) => void;
  ProductSelected: IprodFetched;
}

interface Variante {
  id: number;
  nombre: string;
}

const var1: Variante = { id: 1, nombre: 'XL / ROJO' };
const var2: Variante = { id: 2, nombre: 'L / NEGRO' };

const Variantes = {
  var1,
  var2,
};

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
  const [ProductSelect, setProductSelect] =
    useState<IprodFetched>(ProductSelected);

  const [data, setData] = useState<IData>({
    id: '',
    desc: ProductSelect.description,
    name: ProductSelect.name,
    price: ProductSelect.sale_price,
    variantesChecked: {},
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleVarChecked = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setData((prevData) => ({
      ...prevData,
      variantesChecked: {
        ...prevData.variantesChecked,
        [name]: checked,
      },
    }));
  };

  console.log('ProductSelected', ProductSelected);

  return (
    <>
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
                        onClick={() => {
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
                        name="name"
                        label="Nombre del producto"
                        value={data.name}
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
                        onClick={() => {
                          setUseDescDropi(!UseDescDropi);
                          setData({
                            ...data,
                            desc: '',
                          });
                        }}
                        name="desc-dropi"
                        label="Utilizar la descripción de Dropi"
                      />

                      <FormField.Textarea
                        id="proddesc"
                        label="Descripción del producto"
                        name="desc"
                        value={data.desc}
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
                        onClick={() => {
                          setUseImgDropi(!UseImgDropi);
                          setData({
                            ...data,
                            img: '//srcimg.',
                          });
                        }}
                        name="img-dropi"
                        label="Utilizar la imagen de Dropi"
                      />
                    </Box>
                  </>
                ) : Step == 1 ? ( // Variantes producto
                  ProductSelected.variations.length > 0 ? (
                    <Box display="flex" flexDirection="column" gap="4">
                      <Text>
                        Selecciona las variaciones que quieres importar
                      </Text>
                      {ProductSelected.variations.map((variante) => (
                        <div className="div-pad">
                          <Checkbox
                            name={variante.id}
                            checked={
                              data.variantesChecked[variante.nombre] || false
                            }
                            key={variante.id}
                            label={variante.attribute_values.map(
                              (atributo: any) =>
                                `${atributo.attribute_name} ${atributo.value} `,
                            )}
                            onChange={handleVarChecked}
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
                      onClick={() => {
                        setUsePrice(!UsePrice);
                        setData({
                          ...data,
                          price: 10000,
                        });
                      }}
                    />
                    <FormField.Input
                      name="price"
                      id="prodprice"
                      label="Precio del producto"
                      type="number"
                      value={data.price}
                      onChange={handleInputChange}
                      placeholder=" Ej: 30.000"
                      disabled={UsePrice ? true : false}
                    />
                  </Box>
                ) : (
                  <Box display="flex" flexDirection="column" gap="4">
                    <Text>Determina el precio del producto</Text>
                    <Checkbox
                      name="price-drop"
                      label="Usar precio de dropi"
                      checked={UsePrice}
                      onClick={() => {
                        setUsePrice(!UsePrice);
                        setData({
                          ...data,
                          price: 10000,
                        });
                      }}
                    />
                    <FormField.Input
                      name="price"
                      id="prodprice"
                      label="Precio del producto"
                      type="number"
                      value={data.price}
                      onChange={handleInputChange}
                      placeholder=" Ej: 30.000"
                      disabled={UsePrice ? true : false}
                    />
                  </Box>
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
    </>
  );
};

export default ModalAsNew;
//Limpiar el texto de la nota si la orden se envía exitosamente

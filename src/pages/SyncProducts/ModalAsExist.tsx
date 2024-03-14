import { ChangeEvent, FC, Fragment, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Modal,
  Pagination,
  Text,
} from '@nimbus-ds/components';
import { FormField, Layout, Page } from '@nimbus-ds/patterns';
import ProductsDataProvider from '../Products/ProductsDataProvider';
import { PAGE_SIZE } from './SyncProducts.definitions';
import List from './components/ListDesktop/List';

interface ComponentProps {
  toogle: boolean;
  setToogle: (flag: boolean) => void;
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

const ModalAsExist: FC<ComponentProps> = ({ toogle, setToogle }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [idProductSelected, setProdSelc] = useState<number>(0);
  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };
  const [UseNameDropi, setUseNameDropi] = useState<boolean>(true);
  const [UseDescDropi, setUseDescDropi] = useState<boolean>(true);
  const [UsePrice, setUsePrice] = useState<boolean>(true);
  const [UseImgDropi, setUseImgDropi] = useState<boolean>(true);
  const [Step, setStep] = useState<number>(0);
  const [data, setData] = useState<IData>({
    id: '',
    desc: 'Esta es la descripción proveniente de dropi :)',
    name: 'Datico quemadito',
    price: "10000",
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
            {Step == 0 ? (
              <Page
                maxWidth="1200px"
                minWidth={{
                  xs: 'auto',
                  md: 'auto',
                  lg: 'auto',
                }}
                minHeight={{
                  xs: 'calc(50vh - 65px)',
                  md: 'calc(50vh - 66px)',
                  lg: 'calc(50vh - 66px)',
                }}
              >
                <Page.Header title={''} />
                <Page.Body px={{ xs: 'none', md: '6' }}>
                  <Layout columns="1">
                    <Layout.Section>
                      <ProductsDataProvider>
                        {({ products }) => {
                          const total = products.length;
                          const productsPaginated = products.slice(
                            currentPage === 1
                              ? 0
                              : (currentPage - 1) * PAGE_SIZE,
                            (currentPage - 1) * PAGE_SIZE + PAGE_SIZE,
                          );

                          return (
                            <>
                              <List
                                products={productsPaginated}
                                ProdId={idProductSelected}
                                setProdId={setProdSelc}
                              />
                              <div className="paginator">
                                <Text>
                                  Mostrando <strong>1</strong> -{' '}
                                  <strong>{PAGE_SIZE}</strong> elementos de{' '}
                                  <strong>{total}</strong>
                                </Text>
                                <Pagination
                                  showNumbers={true}
                                  activePage={currentPage}
                                  onPageChange={handlePageChange}
                                  pageCount={Math.ceil(total / PAGE_SIZE)}
                                />
                              </div>
                            </>
                          );
                        }}
                      </ProductsDataProvider>
                    </Layout.Section>
                  </Layout>
                </Page.Body>
              </Page>
            ) : Step == 1 ? (
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
                        name: 'Datico quemadito',
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
                        desc: 'Esta es la descripción proveniente de dropi :)',
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
                        img: true,
                      });
                    }}
                    name="img-dropi"
                    label="Utilizar la imagen de Dropi"
                  />
                </Box>
              </>
            ) : Step == 2 ? (
              // Variantes producto
              <Box display="flex" flexDirection="column" gap="4">
                <Text>Selecciona las variaciones que quieres importar</Text>
                {Object.values(Variantes).map((variante) => (
                  <div className="div-pad">
                    <Checkbox
                      name={variante.nombre}
                      checked={data.variantesChecked[variante.nombre] || false}
                      key={variante.id}
                      label={variante.nombre}
                      onChange={handleVarChecked}
                    />
                  </div>
                ))}
              </Box>
            ) : Step == 3 ? (
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
                      price: "10000",
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
                      price: "10000",
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

            {Step == 3 ? (
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
                appearance={idProductSelected != 0 ? 'neutral' : 'neutral'}
                disabled={idProductSelected != 0 ? false : true}
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

export default ModalAsExist;
//Limpiar el texto de la nota si la orden se envía exitosamente

import React, { useEffect, useState } from 'react';
import { navigateHeader } from '@tiendanube/nexo';
import { nexo } from '@/app';
import {
  Alert,
  Box,
  Button,
  Icon,
  IconButton,
  Input,
  Popover,
  Select,
  Table,
  Tag,
  Text,
  Thumbnail,
  Tooltip,
} from '@nimbus-ds/components';
import { DataTable, Layout, MenuButton, Page } from '@nimbus-ds/patterns';
import { MenuIcon, EcosystemIcon } from '@nimbus-ds/icons';
import { AiOutlineBranches } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import ModalAsNew from './ModalAsNew';
import ModalAsExist from './ModalAsExist';
import ModalSelectShop from './ModalSelectShop';
import ProductsDataProvider from './SyncProductsDataProvider';
import { InitialState } from './SyncProducts.types';
import { useSelector } from 'react-redux';

const ProductListDropi: React.FC = () => {
  useEffect(() => {
    navigateHeader(nexo, { goTo: '/', text: 'Volver al inicio' });
  }, []);
  const [ModalAsNe, setModalAsNew] = useState<boolean>(false);
  const [ModalOpen, setModalOpen] = useState<boolean>(false);
  const [ModalAsExis, setModalAsExist] = useState<boolean>(false);
  // const notes = useSelector<InitialState>((state) => state.count)

  return (
    //Esto debe ser un ciclo que recorra los productos dropi.
    <>
      {ModalAsNe ? (
        <ModalAsNew toogle={ModalAsNe} setToogle={setModalAsNew} />
      ) : ModalAsExis ? (
        <ModalAsExist toogle={ModalAsExis} setToogle={setModalAsExist} />
      ) : (
        <></>
      )}

      <Page maxWidth="1200px">
        <Page.Header
          buttonStack={
            <>
              <Popover
                content={
                  <Box display="flex" flexDirection="column" width="100%">
                    <MenuButton label="Crear productos seleccionados" />
                  </Box>
                }
                padding="small"
              >
                <Button>
                  Acciones masivas
                  <Icon source={<MenuIcon />} />
                </Button>
              </Popover>
              <Button
                appearance="primary"
                onClick={function noRefCheck() {
                  setModalOpen(true);
                }}
              >
                <Icon color="neutral-background" source={<EcosystemIcon />} />
                Seleccionar tienda
              </Button>
              <ModalSelectShop toogle={ModalOpen} setToogle={setModalOpen} />
            </>
          }
          subtitle=""
          title=""
        >
          <Alert title="Alert de ejemplo" show={false}>
            Este es un alert de ejemplo en el header de la página
          </Alert>
          <ProductsDataProvider>
            {({ categories }) => {
              return (
                <Box display="flex" flexDirection="column" gap="2">
                  <Box display="flex" gap="1">
                    <Input.Search placeholder="Buscar" />
                    <Select appearance="neutral" id="Id" name="Name">
                      <Select.Option
                        disabled
                        label="Filtrar por"
                        selected
                        value="Option 1"
                      />
                      {categories.map((category) => (
                        <Select.Option label={category.name} value="Option 6" />
                      ))}
                    </Select>
                  </Box>
                </Box>
              );
            }}
          </ProductsDataProvider>
        </Page.Header>
        <Page.Body
          px={{
            md: '6',
            xs: 'none',
          }}
        >
          <Layout columns="1">
            <DataTable
              footer={
                <DataTable.Footer
                  itemCount="Mostrando 10 productos por pagina"
                  pagination={{
                    activePage: 1,
                    onPageChange: function noRefCheck() {},
                    pageCount: 2,
                  }}
                />
              }
              header={
                <DataTable.Header
                  checkbox={{ checked: false, name: 'check-all-rows' }}
                >
                  <Table.Cell width="auto">Producto</Table.Cell>
                  <Table.Cell width="100px">Stock</Table.Cell>
                  <Table.Cell width="100px">Precio</Table.Cell>
                  <Table.Cell width="100px">Promocional</Table.Cell>
                  <Table.Cell width="120px">Bodega</Table.Cell>
                  <Table.Cell width="120px">Acciones Rapidas</Table.Cell>
                </DataTable.Header>
              }
            >
              <ProductsDataProvider>
                {({ products }) => {
                  return (
                    <>
                      {products.map((product) => (
                        <DataTable.Row
                          backgroundColor={{
                            hover: 'neutral-surface',
                            rest: 'neutral-background',
                          }}
                          checkbox={{ checked: false, name: 'check-19' }}
                        >
                          <Table.Cell>
                            <Box display="flex" gap="2">
                              <Thumbnail
                                alt={product.name}
                                aspectRatio="1/1"
                                width="64px"
                                src={`https://d39ru7awumhhs2.cloudfront.net/${product.gallery[0].urlS3}`}
                              />
                              <Box
                                display="flex"
                                flexDirection="column"
                                gap="1"
                              >
                                <Text color="primary-interactive"> 
                                  {product.name.charAt(0).toUpperCase() +
                                product.name.slice(1).toLowerCase()}
                                </Text>
                                <Tag appearance="warning">
                                  {product.categories[0].name}
                                </Tag>
                                <Text>SKU: {product.sku}</Text>
                              </Box>
                            </Box>
                          </Table.Cell>
                          <Table.Cell>
                            <Input
                              placeholder="0"
                              type="number"
                              value={Math.trunc(parseInt(product.stock))}
                              disabled={true}
                            />
                          </Table.Cell>
                          <Table.Cell>
                            <Input
                              appearance="danger"
                              append="$"
                              placeholder="0"
                              type="number"
                              value={Math.trunc(
                                parseInt(product.suggested_price),
                              )}
                              disabled={true}
                            />
                          </Table.Cell>
                          <Table.Cell>
                            <Input
                              appearance="success"
                              append="$"
                              placeholder="0"
                              type="number"
                              value={Math.trunc(parseInt(product.sale_price))}
                              disabled={true}
                            />
                          </Table.Cell>
                          <Table.Cell>
                            <Text>
                              {product.user.name.charAt(0).toUpperCase() +
                                product.user.name.slice(1).toLowerCase()}
                            </Text>
                          </Table.Cell>
                          <Table.Cell>
                            <Box display="flex" gap="2">
                              <Tooltip content="Vincular con producto existente">
                                <IconButton
                                  size="2rem"
                                  source={<AiOutlineBranches />}
                                  onClick={function noRefCheck() {
                                    setModalAsExist(!ModalAsExis);
                                  }}
                                />
                              </Tooltip>
                              <Tooltip content="Importar como nuevo producto">
                                <IconButton
                                  size="2rem"
                                  source={<AiOutlinePlus />}
                                  onClick={function noRefCheck() {
                                    setModalAsNew(!ModalAsNe);
                                  }}
                                />
                              </Tooltip>
                            </Box>
                          </Table.Cell>
                        </DataTable.Row>
                      ))}
                    </>
                  );
                }}
              </ProductsDataProvider>
            </DataTable>
          </Layout>
        </Page.Body>
      </Page>
    </>
  );
};

export default ProductListDropi;

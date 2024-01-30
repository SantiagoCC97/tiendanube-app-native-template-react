import React, { useEffect, useState } from 'react';
import { navigateHeader } from '@tiendanube/nexo';
import { nexo } from '@/app';
import {
  Alert,
  Box,
  Button,
  Card,
  Icon,
  IconButton,
  Input,
  Link,
  Modal,
  Popover,
  Select,
  Table,
  Tag,
  Text,
  Thumbnail,
  Tooltip,
} from '@nimbus-ds/components';
import {
  DataList,
  DataTable,
  Layout,
  MenuButton,
  Page,
} from '@nimbus-ds/patterns';
import { UploadIcon, MenuIcon, EcosystemIcon } from '@nimbus-ds/icons';
import { Responsive } from '@/components';
import { AiOutlineBranches } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import ModalAsNew from './ModalAsNew';
import ModalAsExist from './ModalAsExist';

const ProductListDropi: React.FC = () => {
  useEffect(() => {
    navigateHeader(nexo, { goTo: '/', text: 'Volver al inicio' });
  }, []);
  const [ModalAsNe, setModalAsNew] = useState<boolean>(false);
  const [ModalOpen, setModalOpen] = useState<boolean>(false);
  const [ModalAsExis, setModalAsExist] = useState<boolean>(false);

  return (
    //Esto debe ser un ciclo que recorra los productos dropi.
    <>
      {ModalAsNe ? (
        <ModalAsNew toogle={ModalAsNe} setToogle={setModalAsNew} />
      ) : (
        <></>
      )}
      {ModalAsExis ? (
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
              <Modal
                onDismiss={function noRefCheck() {
                  setModalOpen(false);
                }}
                open={ModalOpen}
              >
                <React.Fragment key=".0">
                  <Modal.Body padding="none">
                    <Card>
                      <Card.Header title="Selecciona la tienda" />
                      <Card.Body>
                        <Box display="flex" flexDirection="column" gap="4">
                          <Select appearance="neutral" id="Id" name="Name">
                            <Select.Option
                              label="Tienda de prueba"
                              value="Option 6"
                            />
                          </Select>
                        </Box>
                      </Card.Body>
                    </Card>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      appearance="neutral"
                      onClick={function noRefCheck() {
                        setModalOpen(!false);
                      }}
                    >
                      Cancelar
                    </Button>
                    <Button appearance="primary">Aceptar</Button>
                  </Modal.Footer>
                </React.Fragment>
              </Modal>
            </>
          }
          subtitle=""
          title=""
        >
          <Alert title="Alert de ejemplo" show={false}>
            Este es un alert de ejemplo en el header de la página
          </Alert>
          <Box display="flex" flexDirection="column" gap="2">
            <Box display="flex" gap="1">
              <Input.Search placeholder="Buscar" />
            </Box>
          </Box>
        </Page.Header>
        <Page.Body
          px={{
            md: '6',
            xs: 'none',
          }}
        >
          <Layout columns="1">
            <Responsive
              desktopContent={
                <DataTable
                  footer={
                    <DataTable.Footer
                      itemCount="Mostrando 1-20 productos de 40"
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
                          alt="Nombre del producto"
                          aspectRatio="1/1"
                          width="64px"
                          src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=943&q=80"
                        />
                        <Box display="flex" flexDirection="column" gap="1">
                          <Text color="primary-interactive">
                            Zapaticos melos
                          </Text>
                          <Tag appearance="warning">75554</Tag>
                          <Text>SKU: D383</Text>
                        </Box>
                      </Box>
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        placeholder="0"
                        type="number"
                        value="100"
                        disabled={true}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        append="$"
                        placeholder="0"
                        type="number"
                        value="3000"
                        disabled={true}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        append="$"
                        placeholder="0"
                        type="number"
                        value="2500"
                        disabled={true}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Text>Bodega la mia</Text>
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
                </DataTable>
              }
              mobileContent={
                <>
                  <Box px="4">
                    <Link as="button" onClick={function noRefCheck() {}}>
                      Editar
                    </Link>
                  </Box>
                  <DataList>
                    <DataList.Row flexDirection="row" gap="2">
                      <Thumbnail
                        alt="Nombre del producto"
                        aspectRatio="1/1"
                        width="64px"
                      />
                      <Box display="flex" flexDirection="column" gap="1">
                        <Text color="primary-interactive">
                          Nombre del producto
                        </Text>
                        <Tag appearance="warning">
                          <Icon color="currentColor" source={<UploadIcon />} />
                          Estado
                        </Tag>
                        <Text>Stock</Text>
                      </Box>
                    </DataList.Row>
                  </DataList>
                </>
              }
            />
          </Layout>
        </Page.Body>
      </Page>
    </>
  );
};

export default ProductListDropi;

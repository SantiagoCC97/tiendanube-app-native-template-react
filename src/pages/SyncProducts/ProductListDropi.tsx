import React, { useEffect } from 'react';
import { navigateHeader } from '@tiendanube/nexo';
import { nexo } from '@/app';
import {
  Alert,
  Box,
  Button, 
  Icon,
  IconButton,
  Input,
  Link,
  Popover,
  Table,
  Tag,
  Text,
  Thumbnail,
} from '@nimbus-ds/components';
import { DataList, DataTable, Layout, MenuButton, Page } from '@nimbus-ds/patterns';
import { UploadIcon } from '@nimbus-ds/icons';
import { Responsive } from '@/components';
import Archiveico from '@/components/Icons/Archiveico';

const ProductListDropi: React.FC = () => {
  useEffect(() => {
    navigateHeader(nexo, { goTo: '/', text: 'Volver al inicio' });
  }, []);

  return (
    //Esto debe ser un ciclo que recorra los productos dropi.
    <>
      <Page maxWidth="1200px">
        <Page.Header
          buttonStack={
            <>
              <IconButton size="2rem" source={<UploadIcon />} /> 
              <Popover
                content={
                  <Box display="flex" flexDirection="column" width="100%">
                    <MenuButton label="Acción secundaria" />
                    <MenuButton label="Acción secundaria" />
                    <MenuButton label="Acción secundaria" />
                  </Box>
                }
                padding="small"
              >
                <Button>
                  Acciones masivas
                  <Icon source={<UploadIcon />} />
                </Button>
              </Popover>
              <Button>
                Acción secundaria
                <Icon source={<UploadIcon />} />
              </Button>
              <Button appearance="primary">
                <Icon color="neutral-background" source={<UploadIcon />} />
                Acción primaria
              </Button>
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
              <Button>
                <Icon color="currentColor" source={<UploadIcon />} />
              </Button>
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
                      <Table.Cell width="88px">Stock</Table.Cell>
                      <Table.Cell width="88px">Precio</Table.Cell>
                      <Table.Cell width="88px">Promocional</Table.Cell>
                      <Table.Cell width="150px">Variantes</Table.Cell>
                      <Table.Cell width="80px">Acciones</Table.Cell>
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
                        />
                        <Box display="flex" flexDirection="column" gap="1">
                          <Text color="primary-interactive">
                            Nombre del producto
                          </Text>
                          <Tag appearance="warning">Tag de producto</Tag>
                        </Box>
                      </Box>
                    </Table.Cell>
                    <Table.Cell>
                      <Input placeholder="0" type="number" />
                    </Table.Cell>
                    <Table.Cell>
                      <Input append="R$" placeholder="0" type="number" />
                    </Table.Cell>
                    <Table.Cell>
                      <Input append="R$" placeholder="0" type="number" />
                    </Table.Cell>
                    <Table.Cell>
                      <Text>
                        Variante 1 / Variante 2 / Variante 3 / Variante 4
                      </Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Box display="flex" gap="2">
                        <IconButton size="2rem" source={<Archiveico />} />
                        <IconButton size="2rem" source={<Archiveico />} />
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
                          <Icon
                            color="currentColor"
                            source={<UploadIcon />}
                          />
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

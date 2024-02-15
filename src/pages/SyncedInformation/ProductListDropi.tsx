import React, { useEffect, useState } from 'react';
import { navigateHeader } from '@tiendanube/nexo';
import { nexo } from '@/app';
import {
  Box,
  IconButton,
  Input,
  Table,
  Tag,
  Text,
  Thumbnail,
  Tooltip,
} from '@nimbus-ds/components';
import { DataTable, Layout, Page } from '@nimbus-ds/patterns';
import { TrashIcon } from '@nimbus-ds/icons';
import ModalUnsync from './ModalUnsync';

const ProductListDropi: React.FC = () => {
  useEffect(() => {
    navigateHeader(nexo, { goTo: '/', text: 'Volver al inicio' });
  }, []);
  const [ModalUnsyncer, setModalUnsync] = useState<boolean>(false);

  return (
    //Esto debe ser un ciclo que recorra los productos dropi.




    <>
    {ModalUnsyncer ? ( <ModalUnsync toogle={ModalUnsyncer} setToogle={setModalUnsync} /> ) : ""}

      <Page maxWidth="1200px">
        <Page.Header subtitle="" title="">
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
                  <Table.Cell width="120px">Acciones</Table.Cell>
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
                      <Text color="primary-interactive">Zapaticos melos</Text>
                      <Tag appearance="warning">75554</Tag>
                      <Text>SKU: D383</Text>
                    </Box>
                  </Box>
                </Table.Cell>
                <Table.Cell >
                  <Box display="flex" gap="2">
                    <Tooltip content="Eliminar Sincronización">
                      <IconButton
                        size="2rem"
                        source={<TrashIcon />}
                        onClick={function noRefCheck() {
                          setModalUnsync(!ModalUnsyncer);
                        }}
                      />
                    </Tooltip>
                  </Box>
                </Table.Cell>
              </DataTable.Row>
            </DataTable>
          </Layout>
        </Page.Body>
      </Page>
    </>
  );
};

export default ProductListDropi;

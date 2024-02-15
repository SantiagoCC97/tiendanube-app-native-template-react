import { FC } from 'react';
import { Box, Input, Table, Thumbnail, Title } from '@nimbus-ds/components';
import { IProduct  } from '../../SyncProducts.types';


  

  interface MiComponenteProps {
    products: IProduct[];
    ProdId: number;
    setProdId: (flag: number) => void;
  }
 
const List: FC<MiComponenteProps> =  ({ products, ProdId , setProdId })  => {
    
 
  
  return (
    <>
      <Title as="h3">Vincular a producto existente</Title>
      <Input.Search placeholder="Buscar" />
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Cell>Nombre</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {products.map((product) => (
            <Table.Row
              key={product.id}
              onClick={() => setProdId(product.id)}
              backgroundColor={
                ProdId == product.id
                  ? 'primary-surfaceHighlight'
                  : 'neutral-background'
              }
            >
              <Table.Cell>
                <Box display="flex" gap="2" alignItems="center">
                  <Thumbnail
                    src={product.images?.[0]?.src}
                    width="36px"
                    alt={`${product.name.pt || product.name.es}`}
                  />
                  {product.name.pt || product.name.es}
                </Box>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default List;

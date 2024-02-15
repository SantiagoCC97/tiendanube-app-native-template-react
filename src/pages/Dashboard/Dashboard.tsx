import { FC, Fragment } from 'react';
import { Layout, Page } from '@nimbus-ds/patterns';
import { Box,  Card, Icon, List, Text, Title } from '@nimbus-ds/components'; 
import { LinkIcon } from '@nimbus-ds/icons';
import { Link } from 'react-router-dom';


const Dashboard: FC = () => {
  return (
    <Page
      maxWidth="1200px"
      minHeight={{
        xs: 'calc(100vh - 65px)',
        md: 'calc(100vh - 66px)',
        lg: 'calc(100vh - 66px)',
      }}
    >
      <Page.Header title="Dashboard" />
      <Page.Body px={{ xs: 'none', md: '6' }}>
        <Layout columns="1">
          <Layout.Section>
            <>
              <Box>
                <Card padding="none">
                  <Fragment key=".0">
                    <Card.Header padding="base">
                      <Box
                        alignItems="center"
                        display="flex"
                        justifyContent="space-between"
                      >
                        <Title as="h4">Instrucciones de configuración.</Title>
                      </Box>
                    </Card.Header>
                    <Card.Body padding="base">
                      <List as="ol">
                        <List.Item>
                          En tu cuenta dropi, ve a la opcion "Mis Integraciones"
                        </List.Item>
                        <List.Item>Presiona el botón Agregar</List.Item>
                        <List.Item>
                          Crea la tienda según tus preferencias
                        </List.Item>
                        <List.Item >
                       <Box display='flex'> 
                     {"En TiendaNube, en la app Dropify, ve a Configuración de tokens"} <Icon source={ <LinkIcon/> } />
                        </Box>   

                        </List.Item > 
                        <List.Item >
                        Presiona en "Agrega Token" y sigue las instrucciones
                        </List.Item > 


                      </List>
                    </Card.Body>
                    <Card.Footer padding="base">{''}</Card.Footer>
                  </Fragment>
                </Card>
              </Box>
            </>
          </Layout.Section>
        </Layout>
      </Page.Body>
    </Page>
  );
};

export default Dashboard;

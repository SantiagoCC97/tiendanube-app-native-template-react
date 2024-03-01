import React, { ChangeEvent, useEffect, useState } from 'react';
import { navigateHeader } from '@tiendanube/nexo';
import { nexo } from '@/app';
import { Box, Button, Card, Tag, Text, Title } from '@nimbus-ds/components';
import SettingsDataProvider from './SettingsDataProvider'; 
 
const MainCardSettings: React.FC = () => {
  useEffect(() => {
    navigateHeader(nexo, { goTo: '/', text: 'Volver al inicio' });
  }, []);


  const [autoSync, setautoSync] = useState<boolean>();
  const [ifExistProd, setifExistProd] = useState<boolean>();
  const [cleanNoteOrder, setnoteOrder] = useState<boolean>();




  useEffect(() => {

    
  }, []);

  return (
    <SettingsDataProvider>
      {({ settings, onCreateSettings }) => {
        settings.map((setting) => {
          setting.autosync_orders == 'y' ? setautoSync(true)  : setautoSync(false);
          setting.ifProdExist == 'y' ? setifExistProd(true) : setifExistProd( false);
          setting.cleanNoteOrder == 'y' ? setnoteOrder(true) : setnoteOrder(false);



          (setting.autosync_orders);
        });

        return (
          <>
            <Card padding="none">
              <React.Fragment key=".0">
                <Card.Header padding="base">
                  <Box
                    alignItems="center"
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Title as="h4">Sincronización de ordenes automaticas</Title>
                    <Tag appearance="warning">Emprendedor / Dropshipper</Tag>
                  </Box>
                </Card.Header>
                <Card.Body padding="base">
                  <Text textAlign="left">
                    La activación de esta opción permite una gestión sin
                    esfuerzo de tus operaciones comerciales. Cuando está
                    habilitada, todas las órdenes generadas en tienda nube se
                    enviarán automáticamente a Dropi, asegurando una
                    sincronización fluida y eficiente entre ambas plataformas.
                  </Text>
                </Card.Body>
                <Card.Footer padding="base">
                  <Button
                    onClick={() =>  {
                      
                    }                  
                  }
                    
                    appearance={autoSync ? 'primary' : 'danger'}
                  >
                    {autoSync ? 'Activado' : 'Inactivo'}
                  </Button>
                </Card.Footer>
              </React.Fragment>
            </Card>

            <Card padding="none">
              <React.Fragment key=".0">
                <Card.Header padding="base">
                  <Box
                    alignItems="center"
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Title as="h4">Crear producto en Dropi si no existe</Title>
                    <Tag appearance="warning">Solo Emprendedor</Tag>
                  </Box>
                </Card.Header>
                <Card.Body padding="base">
                  <Text textAlign="left">
                    Esta funcionalidad exclusiva para usuarios de perfil
                    emprendedor simplifica aún más la administración de tu
                    inventario. Al activar esta opción, cada vez que creas un
                    nuevo producto en Tiendanube, se generará automáticamente
                    una réplica en Dropi, asegurando una consistencia perfecta
                    entre ambas plataformas.
                  </Text>
                </Card.Body>
                <Card.Footer padding="base">
                    <Button
                    onClick={() =>  {
                      
                    }                  
                  }
                    
                    appearance={ifExistProd ? 'primary' : 'danger'}
                  >
                    {ifExistProd ? 'Activado' : 'Inactivo'}
                  </Button>
                </Card.Footer>
              </React.Fragment>
            </Card>

            <Card padding="none">
              <React.Fragment key=".0">
                <Card.Header padding="base">
                  <Box
                    alignItems="center"
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Title as="h4">
                      Limpiar texto de la nota en las ordenes
                    </Title>
                    <Tag appearance="warning">Emprendedor / Dropshipper</Tag>
                  </Box>
                </Card.Header>
                <Card.Body padding="base">
                  <Text textAlign="left">
                    Esta funcionalidad te brinda un control extra sobre la
                    información asociada a tus órdenes. Al habilitar esta
                    opción, el sistema se encargará de limpiar automáticamente
                    el texto de la nota adjunta a cada orden una vez que la
                    misma haya sido enviada exitosamente a Dropi.
                  </Text>
                </Card.Body>
                <Card.Footer padding="base">
                <Button
                    onClick={() =>  {
                      
                    }                  
                  }
                    
                    appearance={cleanNoteOrder ? 'primary' : 'danger'}
                  >
                    {cleanNoteOrder ? 'Activado' : 'Inactivo'}
                  </Button>
                </Card.Footer>
              </React.Fragment>
            </Card>
          </>
        );
      }}
    </SettingsDataProvider>
  );
};

export default MainCardSettings;
//Limpiar el texto de la nota si la orden se envía exitosamente

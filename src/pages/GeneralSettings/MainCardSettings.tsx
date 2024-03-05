import React, { ChangeEvent, useEffect, useReducer, useState } from 'react';
import { navigateHeader } from '@tiendanube/nexo';
import { nexo } from '@/app';
import { Box, Button, Card, Tag, Text, Title } from '@nimbus-ds/components';
import SettingsDataProvider from './SettingsDataProvider';
import { IDataSetting, ISetting } from './Settings.types';

const MainCardSettings: React.FC = () => {
  useEffect(() => {
    navigateHeader(nexo, { goTo: '/', text: 'Volver al inicio' });
  }, []);

  return (
    <SettingsDataProvider>
      {({ settings, onCreateSettings }) => {
        const [autoSync, setautoSync] = useState<boolean>(false);
        const [ifExistProd, setifExistProd] = useState<boolean>(false);
        const [cleanNoteOrder, setnoteOrder] = useState<boolean>(false);
        const [updater, setUpdater] = useState<number>(0);

        useEffect(() => {  
          if (settings.length > 0 && settings[0]) {
            setautoSync(settings[0].autosync_orders === 'y' ? true : false);
            setifExistProd(settings[0].ifProdExist === 'y' ? true : false);
            setnoteOrder(settings[0].cleanNoteOrder === 'y' ? true : false);
          }
        }, [settings]);
        useEffect(() => {
          function sendData() {
            const updatedDataSettings = {
              autosync_orders: autoSync ? 'y' : 'n',
              ifProdExist: ifExistProd ? 'y' : 'n',
              cleanNoteOrder: cleanNoteOrder ? 'y' : 'n',
            };
            onCreateSettings(updatedDataSettings);
          }
          if (updater != 0) sendData();
        }, [updater]);


        function handleChange(type: string, value: boolean) {
          if (type == 'sync') {
            setautoSync(value);
          } else if (type == 'create') {
            setifExistProd(value);
          } else {
            setnoteOrder(value);
          }
        }

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
                    onClick={() => {
                      setUpdater(updater + 1);

                      handleChange('sync', !autoSync);
                    }}
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
                    onClick={() => {
                      setUpdater(updater + 1);

                      handleChange('create', !ifExistProd);
                    }}
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
                    onClick={() => {
                      setUpdater(updater + 1);
                      handleChange('clean', !cleanNoteOrder);
                    }}
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

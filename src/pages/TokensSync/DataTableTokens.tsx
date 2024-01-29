import React, { useEffect, useState } from 'react';
import { navigateHeader } from '@tiendanube/nexo';
import { nexo } from '@/app';
import { Box, Button, Modal, Text } from '@nimbus-ds/components';
import { DataList } from '@nimbus-ds/patterns';

const DataTableTokens: React.FC = () => {
  useEffect(() => {
    navigateHeader(nexo, { goTo: '/', text: 'Volver al inicio' });
  }, []);

  const [tok, setTok] = useState<string>('Ver token');
  const [elimnateModal, setEliminate] = useState<boolean>(false);

  const showTok = () => {
    setTok(
      tok === 'Ver token'
        ? 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBwLmRyb3BpLmNvIiwiaWF0IjoxNzA1OTQyMjA2LCJleHAiOjQ4NjE2MTU4MDYsIm5iZiI6MTcwNTk0MjIwNiwianRpIjoieFZMT0pRWHNaSU1jS0VkNCIsInN1YiI6ODIwMjUsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEiLCJhdWQiOiJTSE9QSUZZIiwidG9rZW5fdHlwZSI6IklOVEVHUkFUSU9OUyIsImludGVncmF0aW9uX3R5cGUiOiJTSE9QSUZZIiwiaW50ZWdyYXRpb25fdXJsIjoiIn0.v9jTKQ8r-8XfyW53EUO4ZjKDGzgoIuQ_7J9h_7AmqDY'
        : 'Ver token',
    );
  };

  const showDeleteModal = (id: string) => {
    console.log('aqui fue');
    
    if (id) {
      setEliminate(true);
    }
   
  };

  return (
    //Esto debe ser un ciclo que recorra los tokens del usuario.
    <>
      <DataList>
        <DataList.Row gap="1">
          <Box display="flex" justifyContent="space-between">
            <Text color="primary-interactive" fontWeight="medium">
              Numero de integración: 45558
            </Text>
            <Text>Fecha de integración: 27 Enero 2024</Text>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Text>Tienda de prueba</Text>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Text as="span" wordBreak="break-all" onClick={showTok}>
              {tok}
            </Text>
            <div className="itsyou">
              {' '}
              <Button
                onClick={()=>showDeleteModal('1')}
                appearance="danger"
              >
                Eliminar
              </Button>
            </div>
          </Box>
        </DataList.Row>
      </DataList>
      <>
        <Modal
          open={elimnateModal}
          onDismiss={()=>setEliminate(false)}
        >
          <React.Fragment key=".0">
            <Modal.Header title="Eliminar token" />
            <Modal.Body padding="none">
              <Text textAlign="left">
                Confirma que desea eliminar el token de la tienda: Tienda de
                prueba
              </Text>
            </Modal.Body>
            <Modal.Footer>
              <Button appearance="neutral" >Cancelar</Button>
              <Button appearance="danger">Eliminar</Button>
            </Modal.Footer>
          </React.Fragment>
        </Modal>
      </>
    </>
  );
};

export default DataTableTokens;
//Limpiar el texto de la nota si la orden se envía exitosamente

import { Box, Button, Icon, Tooltip } from '@nimbus-ds/components';
import { Menu } from '@nimbus-ds/patterns';
import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import SlidersIco from '../Icons/Slidericons';
import Linkico from '../Icons/Linkicons';
import Archiveico from '../Icons/Archiveico';
import Uploadico from '../Icons/Uploadico';
import { useNavigate } from 'react-router-dom';
import Homeico from '../Icons/Homeico';

const Sidedropibar = () => {
  const navigate = useNavigate();
  const [actualPage, setactualPage] =  useState<number>(1);

  useEffect(() => {}, []);

    



  return (
    <Box
      display="flex"
      flex="0 1 auto"
      width="4.1rem"
      height="40vh"
      borderColor="neutral-surfaceHighlight"
      borderStyle="solid"
      borderWidth="none"
      borderRadius="6"
      position="sticky"
      left="0"
      top="0"
      overflow="hidden"
    >
      <Menu>
        <Menu.Header>
          <Icon source={<Logo />} />
        </Menu.Header>

        <Menu.Body>
          <Box onClick={() => navigate('/')}>
            <Tooltip content="Inicio" position="right">
              <Button appearance={actualPage == 1 ? "primary" : "transparent"} onClick={()=>setactualPage(1)}>
                <Icon color="currentColor" source={<Homeico />} />
              </Button>
            </Tooltip>
          </Box>

          <Box onClick={() => navigate('/settings')}>
            <Tooltip content="Configuración General" position="right">
              <Button appearance={actualPage == 2 ? "primary" : "transparent"} onClick={()=>setactualPage(2)}>
                <Icon color="currentColor" source={<SlidersIco />} />
              </Button>
            </Tooltip>
          </Box>

          <Box onClick={() => navigate('/tokens')}>
            <Tooltip content="Configuración de tokens" position="right">
              <Button appearance={actualPage == 3 ? "primary" : "transparent"} onClick={()=>setactualPage(3)}>
                <Icon color="currentColor" source={<Linkico />} />
              </Button>
            </Tooltip>
          </Box>

          <Box onClick={() => navigate('/syncproducts')}>
            <Tooltip content="Importar productos" position="right">
              <Button appearance={actualPage == 4 ? "primary" : "transparent"} onClick={()=>setactualPage(4)}>
                <Icon color="currentColor" source={<Uploadico />} />
              </Button>
            </Tooltip>
          </Box>

          <Box onClick={() => navigate('/synced')}>
            <Tooltip content="Productos sincronizados" position="right">
              <Button appearance={actualPage == 5 ? "primary" : "transparent"} onClick={()=>setactualPage(5)}>
                <Icon color="currentColor" source={<Archiveico />} />
              </Button>
            </Tooltip>
          </Box>
        </Menu.Body>
      </Menu>
    </Box>
  );
};

export default Sidedropibar;

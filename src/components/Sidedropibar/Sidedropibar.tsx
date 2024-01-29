import { 
  Box,
  Button,
  Icon,
  Sidebar 
} from '@nimbus-ds/components';
import { Menu, MenuButton } from '@nimbus-ds/patterns';
import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import SlidersIco from '../Icons/Slidericons';
import Linkico from '../Icons/Linkicons';
import Archiveico from '../Icons/Archiveico';
import Uploadico from '../Icons/Uploadico';
import { useNavigate } from 'react-router-dom';

const Sidedropibar = () => {


  const navigate = useNavigate();
  const [SideOpen, setSideOpen] = useState<boolean>(false);

  useEffect(() => {}, []);

  return (
    <>
      <Button
        onClick={function noRefCheck() {
          setSideOpen(true);
        }}
      >
        Abrir
      </Button>

      <Sidebar
        maxWidth="280px"
        onRemove={function noRefCheck() {
          setSideOpen(false);
        }}
        padding="small"
        position="left"
        zIndex="100"
        open={SideOpen}
      >
        <Menu>
          <Menu.Header>
            <Box alignItems="center" display="flex" gap="2" width="100%">
              <Icon source={<Logo />} />
            </Box>
          </Menu.Header>
          <Menu.Body>
            <Menu.Section>
              <MenuButton label="Inicio"   onClick={() => navigate('/')} />
            </Menu.Section>
            <Menu.Section title="Configuraciones">
              <MenuButton
                label="Configuración General"
                startIcon={SlidersIco}
                onClick={() => navigate('/settings')}
              />
              {/* <MenuButton label="Clientes" startIcon={function noRefCheck() {}}>
                <Tag appearance="primary">Nuevo</Tag>
              </MenuButton> */}
              <MenuButton label="Configuración Tokens" startIcon={Linkico}  onClick={() => navigate('/tokens')} />
            </Menu.Section>
            <Menu.Section title="Productos Dropi">
              <MenuButton label="Importar Productos" startIcon={Uploadico}  onClick={() => navigate('/syncproducts')}  />
              <MenuButton
                label="Información Sincronizada"
                startIcon={Archiveico}
              />
            </Menu.Section>
            {/* <Menu.Section title="Potenciar">
              <MenuButton
                label="Mis aplicaciones"
                startIcon={function noRefCheck() {}}
              />
              <MenuButton
                label="Canales de venta"
                startIcon={function noRefCheck() {}}
              />
            </Menu.Section> */}
          </Menu.Body>
          <Menu.Footer
            label="Configuración"
            //startIcon={function noRefCheck(){}}
          />
        </Menu>
      </Sidebar>
    </>
  );
};

export default Sidedropibar;

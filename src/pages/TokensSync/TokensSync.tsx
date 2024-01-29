import React, { useEffect   } from 'react'; 
import { navigateHeader } from '@tiendanube/nexo';
import { Layout, Page } from '@nimbus-ds/patterns'; 
import { nexo } from '@/app';  
import DataTableTokens from './DataTableTokens';
import ModalAddToken from './ModalAddToken';

const TokensSync: React.FC = () => {
   
  useEffect(() => {
    navigateHeader(nexo, { goTo: '/', text: 'Volver al inicio' });
  }, []);

  return (
    <Page
      maxWidth="1200px"
      minHeight={{
        xs: 'calc(100vh - 65px)',
        md: 'calc(100vh - 66px)',
        lg: 'calc(100vh - 66px)',
      }}
    >
      <Page.Header title='Configuración de tokens' />
      <Page.Body px={{ xs: 'none', md: '6' }}>
        <Layout columns="1">
          <Layout.Section>
            <>
            <ModalAddToken/>
            <DataTableTokens/> 
              {({}) => {
                return <>

                </>;
              }}
            </>
          </Layout.Section>
        </Layout>
      </Page.Body>
    </Page>
  );
};

export default TokensSync;

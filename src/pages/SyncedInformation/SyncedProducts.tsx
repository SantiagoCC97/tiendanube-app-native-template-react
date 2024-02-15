import {FC}  from 'react';  
import { Layout, Page } from '@nimbus-ds/patterns';  
import ProductListDropi from './ProductListDropi';
import React from 'react';

const SyncedProducts: FC = () => {
    

  return (
    <Page
      maxWidth="1200px"
      minHeight={{
        xs: 'calc(100vh - 65px)',
        md: 'calc(100vh - 66px)',
        lg: 'calc(100vh - 66px)',
      }}
    >
      <Page.Header title='Administrar productos sincronizados' />
      <Page.Body px={{ xs: 'none', md: '6' }}>
        <Layout columns="1">
        <Layout.Section>
            <>
            <ProductListDropi/> 
            
            </>
          </Layout.Section>
        </Layout>
      </Page.Body>
    </Page>
  );
};

export default SyncedProducts;

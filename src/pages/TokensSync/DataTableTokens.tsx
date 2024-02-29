import React, { useEffect, useState } from 'react';
import { navigateHeader } from '@tiendanube/nexo';
import { nexo } from '@/app';
import { Box, Pagination, Text } from '@nimbus-ds/components';
import TokensDataProvider from './TokensSyncDataProvider';
import { PAGE_SIZE } from './TokensSync.definitions';
import { Responsive } from '@/components';
import { ListDesktop, ListMobile } from './components';
import ModalAddToken from './ModalAddToken';

const DataTableTokens: React.FC = () => {
  useEffect(() => {
    navigateHeader(nexo, { goTo: '/', text: 'Volver al inicio' });
  }, []);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <>
      <TokensDataProvider>
        {({ tokens, onDeleteToken, onCreateToken }) => {
          const total = tokens.length;
          const tokensPaginated = tokens.slice(
            currentPage === 1 ? 0 : (currentPage - 1) * PAGE_SIZE,
            (currentPage - 1) * PAGE_SIZE + PAGE_SIZE,
          );

          return (
            <Responsive
              mobileContent={
                <>
                  <ModalAddToken onCreateToken={onCreateToken} />
                  <ListMobile tokens={tokens} onDeleteToken={onDeleteToken} />
                </>
              }
              desktopContent={
                <>
                  <ModalAddToken onCreateToken={onCreateToken} />

                  <ListDesktop
                    tokens={tokensPaginated}
                    onDeleteToken={onDeleteToken}
                  />
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Text>
                      Mostrando <strong>1</strong> -{' '}
                      <strong>{PAGE_SIZE}</strong> elementos de{' '}
                      <strong>{total}</strong>
                    </Text>
                    <Pagination
                      activePage={currentPage}
                      onPageChange={handlePageChange}
                      pageCount={Math.ceil(total / PAGE_SIZE)}
                    />
                  </Box>
                </>
              }
            />
          );
        }}
      </TokensDataProvider>
    </>
  );
};

export default DataTableTokens;

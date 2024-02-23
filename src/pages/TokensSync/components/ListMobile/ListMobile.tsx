import React, { useState } from 'react';
import { Box, IconButton, Text } from '@nimbus-ds/components';
import { TrashIcon } from '@nimbus-ds/icons';

import { IToken } from '../../TokensSync.types';
import { DataList } from '@nimbus-ds/patterns';

const ListMobile: React.FC<{
  tokens: IToken[];
  onDeleteToken: (tokenId: number) => void;
}> = ({ tokens, onDeleteToken }) => {
  const [hideToken, sethideToken] = useState(true);

  return (
    <>
      <Text
        fontSize={'caption'}
        color="success-textLow"
        onClick={() => sethideToken(!hideToken)}
      >
        {' '}
        {hideToken == true ? 'Ver tokens' : 'Ocultar'}{' '}
      </Text>

      <DataList>
        {tokens.map((token) => (
          <DataList.Row key={token.id} flexDirection="row" width="100%" gap="2">
            <Box display="flex" gap="2" flex="1 1 auto">
              <Box
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize={'highlight'}>{token.name}</Text>
              </Box>

              <Box>
                <Text as="span" wordBreak="break-all" fontSize={'caption'}>
                  {' '}
                  {hideToken ? '...' : token.token}
                </Text>
              </Box>
            </Box>
            <Box
              display="flex"
              gap="2"
              alignItems="center"
              justifyContent="center"
            >
              <IconButton
                onClick={() => onDeleteToken(token.id)}
                source={<TrashIcon />}
                size="2rem"
              />
            </Box>
          </DataList.Row>
        ))}
      </DataList>
    </>
  );
};

export default ListMobile;

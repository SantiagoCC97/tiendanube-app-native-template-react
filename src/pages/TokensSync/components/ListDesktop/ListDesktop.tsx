import React, { useState } from 'react';
import { Box, IconButton, Text } from '@nimbus-ds/components';
import { TrashIcon } from '@nimbus-ds/icons';
import { IToken } from '../../TokensSync.types';
import { DataList } from '@nimbus-ds/patterns';

const ListDesktop: React.FC<{ tokens: IToken[]; onDeleteToken: (tokenId: number) => void; }> = ({ tokens, onDeleteToken }) => {

  const [hideToken, sethideToken] = useState(true);

  return (
    <>
  <Text fontSize={'caption'}  color="success-textLow"  onClick={() => sethideToken(!hideToken)}> {hideToken == true ? 'Ver tokens' : 'Ocultar'} </Text>

      <DataList>
        {tokens.map((token) => (
          <DataList.Row gap="1">
            <Box display="flex" justifyContent="space-between">
              <Text>Fecha de integración: {token.createdAt.split('T')[0]}</Text>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Text>{token.shop_name}</Text>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Text fontSize={'caption'}
                as="span"
                wordBreak="break-all"
              >
                {hideToken ? '...' : token.token}
              </Text>
              <div className="itsyou">
                {' '}
                <IconButton
                  onClick={() => onDeleteToken(token._id)}
                  source={<TrashIcon />}
                  size="2rem"
                />
              </div>
            </Box>
          </DataList.Row>
        ))}
      </DataList>
    </>
  );
};

export default ListDesktop;

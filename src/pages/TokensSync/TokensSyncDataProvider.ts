import React, { useEffect, useState } from 'react';
import { useToast } from '@nimbus-ds/components';
import { useFetch } from '@/hooks';
import { IToken, ITokensDataProvider } from './TokensSync.types';

const TokensDataProvider: React.FC<ITokensDataProvider> = ({
  children,
}) => {
  const { addToast } = useToast();
  const { request } = useFetch();
  const [tokens, setTokens] = useState<IToken[]>([]);

  useEffect(() => onGetTokens(), []);

  const onGetTokens = () => {
    request<IToken[]>({
      url: `/token`,
      method: 'GET',
    })
      .then((response) => {
        console.log("response.c" , response.content)
        setTokens(response.content);
      })
      .catch((error) => {
        addToast({
          type: 'danger',
          text: error.message.description ?? error.message,
          duration: 4000,
          id: 'error-token',
        });
      });
  };

  const onDeleteToken = (tokenId: number) => {
    request<IToken[]>({
      url: `/products/${tokenId}`,
      method: 'DELETE',
    })
      .then(() => {
        onGetTokens();
        addToast({
          type: 'success',
          text: 'Token eliminado efectivamente',
          duration: 4000,
          id: 'delete-token',
        });
      })
      .catch((error) => {
        addToast({
          type: 'danger',
          text: error.message.description ?? error.message,
          duration: 4000,
          id: 'error-delete-token',
        });
      });
  };

  return children({ tokens, onDeleteToken });
};

export default TokensDataProvider;

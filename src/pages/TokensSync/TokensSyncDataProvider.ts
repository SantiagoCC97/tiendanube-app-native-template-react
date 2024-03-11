import React, { useEffect, useState } from 'react';
import { useToast } from '@nimbus-ds/components';
import { useFetch } from '@/hooks';
import { IToken, ITokensDataProvider, IDataToken } from './TokensSync.types';


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
      url: `/token/${tokenId}`,
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


  const onCreateToken = (data: IDataToken): Promise<boolean> =>  {
    return request<{ dataToken: IDataToken }>({
      url: `/createtoken`,
      method: 'POST',
      params: data
    })
      .then(() => {
        onGetTokens();
        addToast({
          type: 'success',
          text: 'Token creado efectivamente',
          duration: 4000,
          id: 'created-token',
        });

        return true;
      })
      .catch(( error)  => {   
        addToast({
          type: 'danger',
          text: "Es probable que este token ya haya sido utilizado.",
          duration: 4000,
          id: 'error-creating-token',
        });
        return false;
      });

  };

  return children({ tokens, onDeleteToken, onCreateToken });
};

export default TokensDataProvider;

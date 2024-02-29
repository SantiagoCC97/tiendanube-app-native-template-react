import React, { useEffect, useState } from 'react';
import { useToast } from '@nimbus-ds/components';
import { useFetch } from '@/hooks';
import { IDataSetting, ISettingDataProvider, ISetting  } from './Settings.types';


const TokensDataProvider: React.FC<ISettingDataProvider> = ({
  children,
}) => {
  const { addToast } = useToast();
  const { request } = useFetch();
  const [settings, setSettings] = useState<ISetting[]>([]);

  useEffect(() => onGetTokens(), []);

  const onGetTokens = () => {
    request<ISetting[]>({
      url: `/settings`,
      method: 'GET',
    })
      .then((response) => {
        setSettings(response.content);
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


  const onCreateSettings = (data: IDataSetting): Promise<boolean> =>  {
    return request<{ dataToken: IDataSetting }>({
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
        // console.log(error.description ?? error.message)
        addToast({
          type: 'danger',
          text: "Es probable que este token ya haya sido utilizado.",
          duration: 4000,
          id: 'error-creating-token',
        });
        return false;
      });

  };


  // const onDeleteToken = (tokenId: number) => {

  //   request<IToken[]>({
  //     url: `/token/${tokenId}`,
  //     method: 'DELETE',
  //   })
  //     .then(() => {
  //       onGetTokens();
  //       addToast({
  //         type: 'success',
  //         text: 'Token eliminado efectivamente',
  //         duration: 4000,
  //         id: 'delete-token',
  //       });
  //     })
  //     .catch((error) => {
  //       addToast({
  //         type: 'danger',
  //         text: error.message.description ?? error.message,
  //         duration: 4000,
  //         id: 'error-delete-token',
  //       });
  //     });
  // };
  return children({ settings,  onCreateSettings });
};

export default TokensDataProvider;

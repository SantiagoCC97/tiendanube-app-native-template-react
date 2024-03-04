export interface ISetting { 
  shop_id: string ; 
  autosync_orders: string; 
  ifProdExist: string;
  cleanNoteOrder: string;
  country: string ;
  createdAt: string;
  updatedAt: string; 
}

export interface IDataSetting {
  autosync_orders: string; 
  ifProdExist: string;
  cleanNoteOrder: string;
}



export interface ISettingDataProvider {
  children: (data: {
    settings: ISetting[];
    //onDeleteToken: (tokenId: number) => void;
    onCreateSettings: (dataSetting: IDataSetting ) => Promise<boolean>;
  }) => React.ReactNode;
}

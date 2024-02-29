export interface IToken { 
  id: number; 
  shop_name: string ;
  token: string;
  createdAt: string;
  updatedAt: string;
  _id: number;
}

export interface IDataToken {
  name: string;
  token: string; 
}

export interface ITokensDataProvider {
  children: (data: {
    tokens: IToken[];
    onDeleteToken: (tokenId: number) => void;
    onCreateToken: (dataToken: IDataToken ) =>Promise<boolean>;
  }) => React.ReactNode;
}

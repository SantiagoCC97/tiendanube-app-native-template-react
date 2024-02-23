export interface IToken { 
  id: number; 
  name: string ;
  token: string;
  createdAt: string;
  updatedAt: string;
}

export interface ITokensDataProvider {
  children: (data: {
    tokens: IToken[];
    onDeleteToken: (tokenId: number) => void;
  }) => React.ReactNode;
}

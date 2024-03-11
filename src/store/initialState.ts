// initialState.ts
export interface InitialState {
  token: string;
  country: string;  
}

const initialState: InitialState = {
  token: "",
  country: "", 
};

export default initialState;
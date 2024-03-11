// actions.ts 
export const TOKEN = 'TOKEN';
export interface SaveTokenAction {
    type: typeof TOKEN;
    payload: {
        token: string;
        country: string;
    };
}
export type ActionTypes =  SaveTokenAction;


  export const saveToken = (token: string, country: string): SaveTokenAction => ({
    type: TOKEN,
    payload: {
        token,
        country,
    }
});
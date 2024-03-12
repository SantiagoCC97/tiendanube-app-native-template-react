interface IData{
    id:string,
    name?:string,
    color?:number,
    desc?:string,
    price?:string,
    img?:string,
    variantesChecked: { [key: string]: boolean };



}
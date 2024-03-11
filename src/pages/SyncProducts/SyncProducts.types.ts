import { IprodFetched } from "./SyncProductsFetched.types";

interface IInventoryLevel {
  id: number;
  variant_id: number;
  location_id: string;
  stock: number;
}

export interface InitialState {
  token: string;
  country: string;  
}


export interface Categories {
  isSuccess: boolean;
  count:     number;
  status:    number;
  obj:   ICatObj[];
}
 

export interface ICatObj {
  
    id:              number;
    name:            string;
    parent_category: number;
  }; 

interface IVariant {
  id: number;
  image_id: number;
  product_id: number;
  position: number;
  price: string;
  compare_at_price: string;
  promotional_price: null | string;
  stock_management: boolean;
  stock: number;
  weight: string;
  width: string;
  height: string;
  depth: string;
  sku: null | string;
  values: any[];
  barcode: null | string;
  mpn: null | string;
  age_group: null | string;
  gender: null | string;
  created_at: string;
  updated_at: string;
  inventory_levels: IInventoryLevel[];
}

interface IImage {
  id: number;
  product_id: number;
  src: string;
  position: number;
  alt: any[];
  created_at: string;
  updated_at: string;
}

export interface IProduct {
  id: number;
  name: {
    pt?: string;
    es?: string;
  };
  variants?: IVariant[];
  images: IImage[];
}


export interface IShop {
  _doc: {
    country: string;
    token: string;
    shop_name: string;
  }
  country: string;
}



export interface IProductsDataProvider {
  children: (data: {
    products: IprodFetched[];
    shops: IShop[];
    categories: ICatObj[];
    onDeleteProduct: (productId: number) => void;
    getCategoriesDropi: () => void;
  }) => React.ReactNode;
}

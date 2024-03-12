import React, { useEffect, useState } from 'react';
import { useToast } from '@nimbus-ds/components';
import { useFetch } from '@/hooks';
import { ICatObj, IProduct, IProductsDataProvider, IShop, InitialState } from './SyncProducts.types';
import {IprodFetched} from './SyncProductsFetched.types.ts';

import { useSelector } from 'react-redux';

const ProductsDataProvider: React.FC<IProductsDataProvider> = ({
  children,
}) => {
  const { addToast } = useToast();
  const { request } = useFetch();
  const [products, setProducts] = useState< IprodFetched[]>([]);
  const [shops, setShops] = useState<IShop[]>([]);
  const [categories, setCategories] = useState<ICatObj[]>([]);
  const tokenforCategories = useSelector((state: InitialState) => state); 

  useEffect(() => {
    onGetShops(); 
    if (tokenforCategories.token != '') {
      getCategoriesDropi();
      onGetProducts()
    }

  }, [tokenforCategories]);

  //obtiene los tokens de las tiendas integradas
  const onGetShops = () => {
    request<IShop[]>({
      url: `/tokenandshop`,
      method: 'GET',
    })
      .then((response) => {
        setShops(response.content);
      })
      .catch((error) => {
        addToast({
          type: 'danger',
          text: error.message.description ?? error.message,
          duration: 4000,
          id: 'error-products',
        });
      });
  };

  // obtiene las categorias de los productos a traves del token de la tienda 
  const getCategoriesDropi = async () => {

    const data = tokenforCategories;

    const endpoint = 'https://api.dropi.co/integrations/categories';
    const requestHeaders = {
      'dropi-integration-key': data.token,
      'Content-Type': 'application/json;charset=UTF-8'
    };

    try {
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: requestHeaders
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json(); 
      if (data.isSuccess) {
        setCategories(data.objects);
      } else {
        setCategories([]);
      }

      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  const onGetProducts = async (keyword:string = '', category:string = '') => {
    const productsFetched : IprodFetched[] = [] ;
    const data = tokenforCategories;


    if (data.token == "") return ('No token Found')

    const endpoint = 'https://api.dropi.co/integrations/products/index';
    const requestHeaders = {
      'dropi-integration-key': data.token,
      'Content-Type': 'application/json;charset=UTF-8'
    };
    let startData = 0;
    //  startData = ((currentPage - 1) * pageSize);

    const gata = JSON.stringify({
      'startData': startData, //------------------------------------------------
      'pageSize': 10,//pageSize,
      'order_type': "desc", //order_type,
      'order_by': "id",//order_by,
      'keywords': keyword,// keywords-------------------------------------------------,
      'active': true,
      'userVerified': false,// userVerified,
      'stockmayor': 0,// withStock,
      'category': category,//search_by_category,  //-------------------------------------
      'supplier_id': '',// search_by_warehouse
      'no_count': true,
    });  // data 

    try {


      const response = await fetch(endpoint, {
        method: 'POST',
        headers: requestHeaders,
        body: gata
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
     
      if (data.isSuccess) {

        console.log("data",data)

        data.objects.forEach((prod: any)  => {
          
          if (prod.type === 'VARIABLE') {
            let stock = 0;

            prod.variations.forEach(
              (variation: any)   => {
                stock = stock + parseFloat(variation.stock);
              });
            prod.stock = stock;
          } 
          productsFetched.push(prod);
        });
        setProducts(productsFetched) 
        //setCategories(data.objects);
      } else {
        //setCategories([]);
      }
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onDeleteProduct = (productId: number) => {
    request<IProduct[]>({
      url: `/products/${productId}`,
      method: 'DELETE',
    })
      .then(() => {
        onGetProducts();
        addToast({
          type: 'success',
          text: 'Produto deletado com sucesso',
          duration: 4000,
          id: 'delete-product',
        });
      })
      .catch((error) => {
        addToast({
          type: 'danger',
          text: error.message.description ?? error.message,
          duration: 4000,
          id: 'error-delete-product',
        });
      });
  };

  return children({ products, shops, categories, onDeleteProduct, getCategoriesDropi, onGetProducts });
};

export default ProductsDataProvider;

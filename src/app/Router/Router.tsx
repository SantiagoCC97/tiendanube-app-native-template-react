import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Products, Testing, GeneralSettings, TokensSync, SyncProducts, SyncedProducts } from '@/pages';   
const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />  
    <Route path="/testing" element={<Testing />} />     
    <Route path='/settings' element={<GeneralSettings/>}/>
    <Route path='/tokens' element={<TokensSync />} />
    <Route path='/syncproducts' element={<SyncProducts />} />
    <Route path='/synced' element={<SyncedProducts />}/>
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default Router;

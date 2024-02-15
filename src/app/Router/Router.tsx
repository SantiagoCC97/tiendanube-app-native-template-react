import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {  Products, Testing, GeneralSettings, TokensSync, SyncProducts, SyncedProducts, Dashboard } from '@/pages';    
const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
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

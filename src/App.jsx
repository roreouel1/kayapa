import React from 'react';
import {useState} from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Overview from './pages/Overview';
import Inventory from './pages/Inventory';
import Categories from './pages/Categories';
import POS from './pages/POS';
import Orders from './pages/Orders';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import {initialProducts,initialCategories,initialOrders} from './data/demoData';
export default function App(){
const [products,setProducts]=useState(initialProducts),[categories,setCategories]=useState(initialCategories),[orders,setOrders]=useState(initialOrders),[toast,setToast]=useState('');
const notify=msg=>{setToast(msg);window.setTimeout(()=>setToast(''),2600)};
const addProduct=p=>{setProducts(s=>[{...p,id:`SKU-${String(Date.now()).slice(-6)}`},...s]);notify('Product added to inventory')};
const updateProduct=p=>{setProducts(s=>s.map(x=>x.id===p.id?p:x));notify('Product updated')};
const addCategory=c=>{if(categories.some(x=>x.name.toLowerCase()===c.name.toLowerCase())){notify('A category with that name already exists');return}setCategories(s=>[...s,{...c,id:`CAT-${Date.now()}`}]);notify('Category added')};
const updateCategory=c=>{setCategories(s=>s.map(x=>x.id===c.id?x:c));setProducts(s=>s.map(p=>p.category===categories.find(x=>x.id===c.id)?.name?{...p,category:c.name}:p));notify('Category updated')};
const deleteCategory=id=>{const c=categories.find(x=>x.id===id);if(products.some(p=>p.category===c?.name)){notify('Move products out of this category before deleting it');return}setCategories(s=>s.filter(x=>x.id!==id));notify('Category deleted')};
const completeSale=({items,paymentMethod,discount})=>{const order={id:`ORD-${String(Date.now()).slice(-5)}`,date:new Date().toISOString(),items:items.reduce((s,p)=>s+p.qty,0),total:items.reduce((s,p)=>s+p.price*p.qty,0)-discount,paymentMethod,status:'Completed',lines:items};setOrders(s=>[order,...s]);setProducts(s=>s.map(p=>{const sold=items.find(x=>x.id===p.id);if(!sold)return p;const stock=Math.max(0,p.stock-sold.qty);return {...p,stock,status:stock===0?'Out of stock':stock<10?'Low stock':'In stock'}}));notify(`Sale ${order.id} completed`)};
return <AppLayout toast={toast}><Routes><Route path="/" element={<Navigate to="/overview" replace/>}/><Route path="/overview" element={<Overview products={products} orders={orders}/>}/><Route path="/inventory" element={<Inventory products={products} categories={categories} onAdd={addProduct} onUpdate={updateProduct} notify={notify}/>}/><Route path="/categories" element={<Categories products={products} categories={categories} onAdd={addCategory} onUpdate={updateCategory} onDelete={deleteCategory}/>}/><Route path="/pos" element={<POS products={products} categories={categories} onCompleteSale={completeSale} notify={notify}/>}/><Route path="/orders" element={<Orders orders={orders}/>}/><Route path="/reports" element={<Reports products={products} orders={orders}/>}/><Route path="/settings" element={<Settings notify={notify}/>}/><Route path="*" element={<Navigate to="/overview" replace/>}/></Routes></AppLayout>}

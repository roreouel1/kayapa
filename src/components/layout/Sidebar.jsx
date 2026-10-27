import React from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChartLine,faBoxOpen,faCashRegister,faClipboardList,faLayerGroup,faChartColumn,faGear} from '@fortawesome/free-solid-svg-icons';
const groups=[{label:'WORKSPACE',links:[['Overview','/overview',faChartLine],['Inventory','/inventory',faBoxOpen],['Categories','/categories',faLayerGroup],['Point of sale','/pos',faCashRegister],['Orders','/orders',faClipboardList]]},{label:'MANAGEMENT',links:[['Reports','/reports',faChartColumn],['Settings','/settings',faGear]]}];
export default function Sidebar(){return <aside className="sidebar"><div className="brand">
    <div className="brand-mark"><i className="bi bi-box-seam-fill"/></div>
    <div><div className="brand-name">Kayapa<span>.</span></div>
    <div className="brand-sub">INVENTORY & POS</div></div></div>
    {groups.map(g=><div className="nav-group" key={g.label}><div className="nav-label">{g.label}</div>{g.links.map(([name,path,icon])=><NavLink key={path} to={path} className={({isActive})=>`nav-item ${isActive?'active':''}`}><FontAwesomeIcon icon={icon}/><span>{name}</span></NavLink>)}</div>)}<div className="sidebar-bottom"><div className="help-card"><div className="help-icon"><i className="bi bi-headset"/></div><strong>Need a hand?</strong><p>Find answers and tips to help manage your shop.</p><button onClick={()=>window.alert('Help centre is a demo action.')}>Visit help centre <i className="bi bi-arrow-up-right"/></button></div><div className="profile"><div className="avatar">AD</div><div><strong>Shop Admin</strong><small>Administrator</small></div><i className="bi bi-three-dots ms-auto"/></div></div></aside>}

import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';import {faBoxOpen,faCoins,faTriangleExclamation,faCartShopping,faArrowTrendUp} from '@fortawesome/free-solid-svg-icons';
const icons={products:faBoxOpen,value:faCoins,alert:faTriangleExclamation,sales:faCartShopping};
export default function StatCard({title,value,note,icon,change}){return <div className="stat-card"><div className="stat-top"><span>{title}</span><div className="stat-icon"><FontAwesomeIcon icon={icons[icon]||faBoxOpen}/></div></div><div className="stat-value">{value}</div><div className="stat-bottom"><span className="stat-change"><FontAwesomeIcon icon={faArrowTrendUp}/> {change}</span><span className="stat-note">{note}</span></div></div>}

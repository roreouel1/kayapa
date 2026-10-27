import React from 'react';
export default function PageHeader({eyebrow='SHOP MANAGEMENT',title,description,actions}){return <div className="page-heading"><div><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p className="page-description">{description}</p></div>{actions&&<div className="heading-actions">{actions}</div>}</div>}

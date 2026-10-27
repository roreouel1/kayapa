import React from 'react';
export default function StatusBadge({status}){return <span className={`status-pill ${status.toLowerCase().replaceAll(' ','-')}`}><span/>{status}</span>}

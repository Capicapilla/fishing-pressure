import React from 'react';
import especies from '../data/especies'; 

const EspeciesViewer = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Lista de Especies</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {especies.map((pez) => (
          <div key={pez.value} style={{ width: '200px', textAlign: 'center' }}>
            <img src={pez.img} alt={pez.label} style={{ width: '100%', borderRadius: '8px' }} />
            <h3>{pez.label}</h3>
            <p style={{ fontSize: '12px' }}>{pez.habitat}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EspeciesViewer;

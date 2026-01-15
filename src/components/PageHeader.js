import React from 'react';
import '../styles/PageHeader.css';

function PageHeader({ title, subtitle }) {
  return (
    <section className="page-header">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
}

export default PageHeader;

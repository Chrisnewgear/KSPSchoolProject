import React, { useState } from 'react';
import { saveAs } from 'file-saver'
import './downloasButton.css'

const DownloadPDFButton = ({ url }) => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/pdf',
        },
      });
      const data = await response.blob();

    saveAs(data, 'Precios.pdf');
    } catch (error) {
      console.error('Error al descargar el PDF:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleDownload} disabled={loading} className='downloadButton'>
      Descargar precios en PDF
    </button>
  );
};

export default DownloadPDFButton;
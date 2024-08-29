import React from 'react';
import './css/fraiche.css'; // Optional: for custom styles

const FraicheProto = () => {
  const prototypeUrl = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FRXLwYZlvDhhozN000zscWx%2FFraiche%3Fnode-id%3D303-394%26node-type%3DFRAME%26t%3DwoEm3pjfb1USOwGO-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D303%253A261'; // Replace with your Figma prototype URL

  return (
    <div className="prototype-container">
      <iframe
        src={prototypeUrl}
        width="80%"
        height="100%"
        allowFullScreen
        title="Fraiche Prototype"
      ></iframe>
    </div>
  );
};

export default FraicheProto;
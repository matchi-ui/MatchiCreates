import React from 'react';
import './css/lipenyo.css'; // Optional: for custom styles

const LipaProto = () => {
  const prototypeUrl = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FWotTGE4Ltt77n0yMV65tNs%2FTatak-Lipenyo%3Fnode-id%3D75-1908%26node-type%3DFRAME%26t%3D6dinE4OM2Bao0ysm-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D559%253A1399'; // Replace with your Figma prototype URL

  return (
    <div className="prototype-container">
      <iframe
        src={prototypeUrl}
        width="80%"
        height="100%"
        allowFullScreen
        title="Tatak Lipenyo Prototype"
      ></iframe>
    </div>
  );
};

export default LipaProto;

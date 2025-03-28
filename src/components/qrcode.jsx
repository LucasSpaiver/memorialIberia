import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const GerarQRCode = ({ url }) => {
  return <QRCodeCanvas value={url} size={150} />;
};

export default GerarQRCode;
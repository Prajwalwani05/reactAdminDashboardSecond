import * as React from 'react';
import './style.css'

export default function InputFileUpload({icon}) {
  return (
    <div className="input-div">
    <input className="input" name="file" type="file" />
    {icon}
  </div>
  );
}

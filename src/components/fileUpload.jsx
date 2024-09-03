import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './style.css'

export default function InputFileUpload({icon}) {
  return (
    <div className="input-div">
    <input className="input" name="file" type="file" />
    {icon}
  </div>
  );
}

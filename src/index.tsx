
import React from 'react';
import ReactDOMClient from 'react-dom/client';

import { App } from '@/App';

import './styles.scss';

ReactDOMClient
  .createRoot(document.getElementById('app'))
  .render(<App />);

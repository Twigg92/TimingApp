import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />)
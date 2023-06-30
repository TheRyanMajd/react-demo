import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render();


// reportWebVitals(console.log);

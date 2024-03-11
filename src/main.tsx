import ReactDOM from 'react-dom/client';
import App from '@/app';
import '@nimbus-ds/styles/dist/index.css';
import './main.css'; 
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../src/store/slices/shopselect.slice'; 


const store = createStore(reducer);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
 
// ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
 

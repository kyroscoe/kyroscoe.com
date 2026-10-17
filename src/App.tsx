import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import { RouteBehavior } from './router/RouteBehavior';

export default function App() {
  return <BrowserRouter><RouteBehavior /><AppRoutes /></BrowserRouter>;
}

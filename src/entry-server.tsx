import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from './router';
export { pageMetadata, getPageSEO, businessSchema, siteUrl } from './utils/seo';

export function render(pathname: string) {
  return renderToString(<MemoryRouter initialEntries={[pathname]}><AppRoutes /></MemoryRouter>);
}

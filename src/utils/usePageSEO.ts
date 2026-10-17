import { useEffect } from 'react';
import { getPageSEO } from './seo';

function setMeta(attribute: 'name' | 'property', key: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = value;
}

export function usePageSEO(pathname: string) {
  useEffect(() => {
    const seo = getPageSEO(pathname);
    document.title = seo.title;
    setMeta('name', 'description', seo.description);
    setMeta('name', 'robots', seo.noindex ? 'noindex, follow' : 'index, follow');
    for (const [key, value] of Object.entries({ title: seo.title, description: seo.description, url: seo.url, image: seo.image })) {
      setMeta('property', 'og:' + key, value);
      if (key !== 'url') setMeta('name', 'twitter:' + key, value);
    }
    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]') || document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = seo.url;
    if (!canonical.parentNode) document.head.appendChild(canonical);
  }, [pathname]);
}

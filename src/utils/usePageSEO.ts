import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type PageSEO = {
  title: string;
  description: string;
};

const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://kyroscoe.com').replace(/\/$/, '');

function setMeta(selector: string, attribute: 'content' | 'href', value: string) {
  const element = document.head.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
}

export function usePageSEO({ title, description }: PageSEO) {
  const { pathname } = useLocation();

  useEffect(() => {
    const url = `${siteUrl}${pathname === '/' ? '/' : pathname}`;

    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
  }, [description, pathname, title]);
}

'use client';

import { AboutContent } from './content/AboutContent';
import { ProductsContent } from './content/ProductsContent';
import { PartnersContent } from './content/PartnersContent';
import { SocialsContent } from './content/SocialsContent';

type ModalContentProps = {
  activeWindow: string;
};

export function ModalContent({ activeWindow }: ModalContentProps) {
  switch (activeWindow) {
    case 'about':
      return <AboutContent />;
    case 'products':
      return <ProductsContent />;
    case 'partners':
      return <PartnersContent />;
    case 'socials':
      return <SocialsContent />;
    default:
      return null;
  }
}

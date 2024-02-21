import mercadoPagoLogo from '@/assets/images/payment-providers/mercado-pago.png';
import pixLogo from '@/assets/images/payment-providers/pix.png';
import boletoLogo from '@/assets/images/payment-providers/boleto.png';
import visaLogo from '@/assets/images/payment-providers/visa.png';
import americanExpressLogo from '@/assets/images/payment-providers/american-express.png';
import hipercardLogo from '@/assets/images/payment-providers/hipercard.png';
import eloLogo from '@/assets/images/payment-providers/elo.png';
import mastercardLogo from '@/assets/images/payment-providers/mastercard.png';
import Image, { StaticImageData } from 'next/image';

interface IFooterSection {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

interface IPaymentProviderAssets {
  name: string;
  iconSrc: StaticImageData;
}

export const footerSections: IFooterSection[] = [
  {
    title: 'Sobre nós',
    links: [
      {
        label: 'Quem somos',
        href: '/about-us',
      },
      {
        label: 'Contato',
        href: '/contact',
      },
      {
        label: 'Serviços',
        href: '/services',
      },
    ],
  },
  {
    title: 'Área do cliente',
    links: [
      {
        label: 'Termos de uso',
        href: '/terms-of-use',
      },
      {
        label: 'Política de Privacidade',
        href: '/privacy-policy',
      },
      {
        label: 'Código do Consumidor',
        href: '/consumer-code',
      },
    ],
  },
  {
    title: 'Partners',
    links: [
      {
        label: 'Seja um revendedor',
        href: '/dealer',
      },
      {
        label: 'Trabalhe conosco',
        href: '/work-with-us',
      },
    ],
  },
];

export const paymentProvidersAssets: IPaymentProviderAssets[] = [
  {
    name: 'Mercado Pago',
    iconSrc: mercadoPagoLogo,
  },
  {
    name: 'Pix',
    iconSrc: pixLogo,
  },
  {
    name: 'Boleto',
    iconSrc: boletoLogo,
  },
  {
    name: 'Visa',
    iconSrc: visaLogo,
  },
  {
    name: 'American Express',
    iconSrc: americanExpressLogo,
  },
  {
    name: 'Hipercard',
    iconSrc: hipercardLogo,
  },
  {
    name: 'Elo',
    iconSrc: eloLogo,
  },
  {
    name: 'Mastercard',
    iconSrc: mastercardLogo,
  },
];

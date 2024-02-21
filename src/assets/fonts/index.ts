import { Merriweather_Sans } from 'next/font/google';
import localFont from 'next/font/local';

export const merriweatherSans = Merriweather_Sans({ subsets: ['latin'] });

export const poetsenOne = localFont({
  src: './poetsen-one/PoetsenOne-Regular.ttf',
  weight: '400',
  style: 'normal',
});

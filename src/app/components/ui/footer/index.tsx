import Image from 'next/image';
import Link from 'next/link';
import { poetsenOne } from '@/assets/fonts';
import { footerSections, paymentProvidersAssets } from './content';
import logo from '@/assets/images/common/logo.svg';

export default function Footer() {
  return (
    <footer className='bg-primary px-5 pt-7 pb-8 text-white xl:pt-10 xl:pb-8'>
      <div className='flex flex-col gap-8 m-auto max-w-[360px] md:max-w-[440px] lg:max-w-[650px] xl:max-w-[900px] xl:gap-[50px]'>
        <div className='flex flex-col gap-8 lg:flex-row xl:gap-16'>
          <div className='xl:flex xl:flex-col xl:gap-10'>
            <div className='flex gap-4 mb-6 xl:gap-5 xl:m-0'>
              <Image
                className='h-auto w-[105px] md:w-[130px] xl:w-[175px]'
                src={logo}
                alt='logo da bookshelf.com com uma prateleira embaixo'
              />

              <p
                className={`${poetsenOne.className} text-xs md:text-sm lg:text-xs xl:text-base xl:max-w-[275px]`}
              >
                A lojinha de livros convenientes ao seu dia-a-dia.
              </p>
            </div>

            <div className='flex justify-between'>
              {footerSections.map(({ title, links }) => (
                <div key={title} className='flex flex-col gap-2 xl:gap-5'>
                  <h2 className='text-[10px] font-bold md:text-xs xl:text-[15px]'>
                    {title}
                  </h2>

                  <ul className='flex flex-col gap-1 xl:gap-2'>
                    {links.map(({ label, href }) => (
                      <li
                        key={label}
                        className='text-[9px] font-light hover:underline cursor-pointer md:text-[10px] xl:text-sm'
                      >
                        <Link href={href}>{label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col gap-4 items-center justify-center'>
            <h2 className='text-[10px] font-bold uppercase md:text-xs xl:text-base'>
              Métodos de Pagamento
            </h2>

            <div className='flex flex-row-wrap gap-2 items-center justify-center bg-[#F2F2F2] rounded-sm p-2 pb-4 max-w-[225px] h-[88px] overflow-hidden md:max-w-[250px] md:h-[98px] xl:h-[140px] xl:max-w-[352px]'>
              {paymentProvidersAssets.map(({ name, iconSrc }) => (
                <Image
                  key={name}
                  className='inline-flex min-h-5 max-h-5 w-auto md:min-h-[22px] md:max-h-[22px] xl:min-h-[32px] xl:max-h-[32px]'
                  src={iconSrc}
                  alt={`logo ${name}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className='text-[9px] font-light md:text-[10px] xl:text-[13px]'>
          <p>
            Rua Lindoval José de Lima 284 - São Paulo, SP - Brasil. CEP
            12345-901.
          </p>

          <p>
            BookShelf.com 2024 - © Todos os Direitos Reservados. CNPJ
            00.000.000/0000-00.
          </p>
        </div>
      </div>
    </footer>
  );
}

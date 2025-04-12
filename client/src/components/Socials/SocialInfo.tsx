import { ReactElement } from "react";
import IconVK from '../../assets/icons/VK.svg?react';
import IconTelegram from '../../assets/icons/Telegram.svg?react';
import IconWhatsapp from '../../assets/icons/Whatsapp.svg?react';

export interface SocialInfo {
  link: string;
  icon: ReactElement;
  ariaLabel: string;
}

export const SOCIAL_INFOS: SocialInfo[] = [
  {
    link: 'https://vk.com/yashin2236',
    icon: <IconVK aria-hidden={true} />,
    ariaLabel: 'Страница в ВК'
  },
  {
    link: 'https://t.me/yashin2236',
    icon: <IconTelegram aria-hidden={true} />,
    ariaLabel: 'Страница в Telegram'
  },
  {
    link: 'https://wa.me/79081126600',
    icon: <IconWhatsapp aria-hidden={true} />,
    ariaLabel: 'Страница в WhatsApp'
  }
];
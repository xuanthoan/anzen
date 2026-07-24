export const siteConfig = {
  name: 'An Zen Residences',
  projectName: 'An Zen Residences - EHome',
  description:
    'Căn hộ vừa túi tiền tại trung tâm kết nối Hải Phòng - Phát triển bởi Nam Long ADC.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  locale: 'vi_VN',
  logo: '/images/common/logo-placeholder.svg',
  ogImage: '/images/project/hero-desktop.svg',
  ctaLabel: 'Đăng ký tư vấn',
  keywords: ['bất động sản', 'căn hộ', 'An Zen Residences', 'EHome', 'Nam Long ADC', 'Hải Phòng'],
};

export const navigation = [
  { label: 'Giới thiệu', href: '/gioi-thieu', section: 'gioi-thieu' },
  { label: 'Vị trí', href: '/vi-tri', section: 'vi-tri' },
  { label: 'Tiện ích', href: '/tien-ich', section: 'tien-ich' },
  {
    label: 'Thiết kế',
    href: '/thiet-ke',
    section: 'thiet-ke',
    children: [
      { label: 'Tòa 1', href: '/thiet-ke/toa-1' },
      { label: 'Tòa 2', href: '/thiet-ke/toa-2' },
      { label: 'Tòa 3', href: '/thiet-ke/toa-3' },
    ],
  },
  { label: 'Tin tức', href: '/tin-tuc' },
  { label: 'Liên hệ', href: '/lien-he', section: 'lien-he' },
];

export const siteConfig = {
  name: 'An Zen Residences Demo',
  projectName: 'An Zen Residences Demo',
  description:
    'Website bất động sản hiện đại cho dự án căn hộ xanh, dữ liệu mẫu sẵn sàng thay thế bằng nội dung chính thức.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  locale: 'vi_VN',
  logo: '/images/common/logo-placeholder.svg',
  ogImage: '/images/project/hero-desktop.svg',
  ctaLabel: 'Đăng ký tư vấn',
  keywords: ['bất động sản', 'căn hộ', 'dự án xanh', 'nhà ở hiện đại'],
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

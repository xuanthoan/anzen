import type { ProjectFact, ProjectStat } from '@/types';

export const projectFacts: ProjectFact[] = [
  { label: 'Tên dự án', value: 'An Zen Residences' },
  { label: 'Chủ đầu tư', value: 'Công ty CP Nam Long (Nam Long Group)' },
  { label: 'Vị trí', value: 'Đường Trang Quan, phường An Hải, TP Hải Phòng' },
  { label: 'Quy mô', value: '1,49 ha - 3 block 18 tầng' },
  { label: 'Số lượng căn hộ', value: '887 căn hộ' },
  { label: 'Diện tích', value: 'Đa dạng, phù hợp nhu cầu' },
  { label: 'Loại hình sản phẩm', value: 'Căn hộ vừa túi tiền, shophouse' },
  { label: 'Hình thức sở hữu', value: 'Lâu dài theo quy định pháp luật' },
  { label: 'Tiến độ', value: 'Đang triển khai' },
];

export const projectStats: ProjectStat[] = [
  { value: '887', label: 'Căn hộ' },
  { value: '1,49 ha', label: 'Quy mô' },
  { value: '3', label: 'Block' },
  { value: '18', label: 'Tầng' },
];

export const locationDistances = [
  { place: 'Trung tâm TP Hải Phòng', distance: '05 phút' },
  { place: 'Trường học các cấp', distance: '07 phút' },
  { place: 'Bệnh viện', distance: '10 phút' },
  { place: 'Trung tâm thương mại', distance: '12 phút' },
  { place: 'Đường Trang Quan', distance: '03 phút' },
];

export const heroSlides = [
  {
    desktop: '/images/project/hero-desktop.svg',
    mobile: '/images/project/hero-mobile.svg',
    alt: 'Phối cảnh dự án An Zen Residences',
    title: 'Căn hộ vừa túi tiền tại trung tâm kết nối Hải Phòng',
    description:
      'An Zen Residences do Nam Long Group phát triển, mang đến không gian sống xanh, tiện ích hiện đại, phù hợp cho gia đình trẻ.',
  },
];

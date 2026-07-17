import type { ProjectFact, ProjectStat } from '@/types';

export const projectFacts: ProjectFact[] = [
  { label: 'Tên dự án', value: 'An Zen Residences Demo' },
  { label: 'Chủ đầu tư', value: 'Công ty phát triển bất động sản mẫu' },
  { label: 'Vị trí', value: 'Khu đô thị kết nối trung tâm - nội dung mẫu' },
  { label: 'Quy mô', value: '3 tòa căn hộ, khối đế thương mại và cảnh quan xanh' },
  { label: 'Số lượng căn hộ', value: 'Khoảng 1.200 căn hộ' },
  { label: 'Diện tích', value: 'Từ 45 m² đến 95 m²' },
  { label: 'Loại hình sản phẩm', value: 'Căn hộ, shophouse, tiện ích cộng đồng' },
  { label: 'Hình thức sở hữu', value: 'Lâu dài theo quy định pháp luật' },
  { label: 'Tiến độ', value: 'Đang cập nhật theo thông báo chính thức' },
];

export const projectStats: ProjectStat[] = [
  { value: '3', label: 'Tòa căn hộ' },
  { value: '60%+', label: 'Không gian xanh & tiện ích' },
  { value: '1.200+', label: 'Sản phẩm dự kiến' },
  { value: '24/7', label: 'An ninh & vận hành' },
];

export const locationDistances = [
  { place: 'Trung tâm hành chính', distance: '05 phút' },
  { place: 'Trường học liên cấp', distance: '07 phút' },
  { place: 'Bệnh viện khu vực', distance: '10 phút' },
  { place: 'Trung tâm thương mại', distance: '12 phút' },
  { place: 'Tuyến giao thông huyết mạch', distance: '03 phút' },
];

export const heroSlides = [
  {
    desktop: '/images/project/hero-desktop.svg',
    mobile: '/images/project/hero-mobile.svg',
    alt: 'Phối cảnh dự án căn hộ xanh hiện đại',
    title: 'Không gian sống cân bằng giữa phố thị và thiên nhiên',
    description:
      'Website mẫu độc lập cho dự án bất động sản, tối ưu trải nghiệm người dùng, SEO và chuyển đổi khách hàng.',
  },
];

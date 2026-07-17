import type { Tower } from '@/types';

export const towers: Tower[] = [
  {
    id: 'toa-1',
    name: 'Tòa 1',
    title: 'Tòa 1 - Nhịp sống năng động',
    description:
      'Tòa căn hộ gần trục tiện ích chính, phù hợp khách hàng trẻ và gia đình cần kết nối nhanh.',
    image: '/images/floor-plans/tower-1.svg',
    alt: 'Mặt bằng căn hộ Tòa 1',
    facts: [
      { label: 'Chiều cao', value: '30 tầng nổi' },
      { label: 'Loại căn', value: '1PN, 2PN, 3PN' },
      { label: 'Diện tích', value: '45 - 88 m²' },
    ],
  },
  {
    id: 'toa-2',
    name: 'Tòa 2',
    title: 'Tòa 2 - Cân bằng và riêng tư',
    description:
      'Tòa căn hộ có tầm nhìn mở, tối ưu thông gió và ánh sáng tự nhiên cho từng căn hộ.',
    image: '/images/floor-plans/tower-2.svg',
    alt: 'Mặt bằng căn hộ Tòa 2',
    facts: [
      { label: 'Chiều cao', value: '32 tầng nổi' },
      { label: 'Loại căn', value: 'Studio, 2PN, 3PN' },
      { label: 'Diện tích', value: '38 - 95 m²' },
    ],
  },
  {
    id: 'toa-3',
    name: 'Tòa 3',
    title: 'Tòa 3 - Tầm nhìn cảnh quan',
    description:
      'Tòa căn hộ hướng về lõi xanh, thích hợp khách hàng ưu tiên sự yên tĩnh và cảnh quan.',
    image: '/images/floor-plans/tower-3.svg',
    alt: 'Mặt bằng căn hộ Tòa 3',
    facts: [
      { label: 'Chiều cao', value: '28 tầng nổi' },
      { label: 'Loại căn', value: '2PN, 3PN, Duplex' },
      { label: 'Diện tích', value: '55 - 120 m²' },
    ],
  },
];

export const masterPlan = {
  image: '/images/floor-plans/master-plan.svg',
  alt: 'Mặt bằng tổng thể dự án gồm ba tòa căn hộ và lõi cảnh quan',
  description:
    'Mặt bằng tổng thể được tổ chức theo mô hình lõi xanh trung tâm, phân tách giao thông cư dân và thương mại.',
};

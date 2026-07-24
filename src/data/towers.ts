import type { Tower } from '@/types';

export const towers: Tower[] = [
  {
    id: 'toa-1',
    name: 'Block A',
    title: 'Block A - Tiện ích kết nối',
    description:
      'Block A được thiết kế với các căn hộ vừa túi tiền, gần khu tiện ích trung tâm.',
    image: '/images/floor-plans/tower-1.svg',
    alt: 'Mặt bằng Block A',
    facts: [
      { label: 'Chiều cao', value: '18 tầng' },
      { label: 'Loại căn', value: '1PN, 2PN, 3PN' },
      { label: 'Diện tích', value: 'Đa dạng' },
    ],
  },
  {
    id: 'toa-2',
    name: 'Block B',
    title: 'Block B - Cân bằng và xanh',
    description:
      'Block B hướng đến không gian sống xanh, tối ưu thông gió và ánh sáng tự nhiên.',
    image: '/images/floor-plans/tower-2.svg',
    alt: 'Mặt bằng Block B',
    facts: [
      { label: 'Chiều cao', value: '18 tầng' },
      { label: 'Loại căn', value: 'Studio, 2PN, 3PN' },
      { label: 'Diện tích', value: 'Đa dạng' },
    ],
  },
  {
    id: 'toa-3',
    name: 'Block C',
    title: 'Block C - View đẹp',
    description:
      'Block C có tầm nhìn hướng ra cảnh quan nội khu và vườn Zen.',
    image: '/images/floor-plans/tower-3.svg',
    alt: 'Mặt bằng Block C',
    facts: [
      { label: 'Chiều cao', value: '18 tầng' },
      { label: 'Loại căn', value: '2PN, 3PN' },
      { label: 'Diện tích', value: 'Đa dạng' },
    ],
  },
];

export const masterPlan = {
  image: '/images/floor-plans/master-plan.svg',
  alt: 'Mặt bằng tổng thể An Zen Residences với 3 block 18 tầng',
  description:
    'An Zen Residences quy mô 1,49 ha, 3 block 18 tầng, 887 căn hộ vừa túi tiền tại trung tâm kết nối Hải Phòng.',
};

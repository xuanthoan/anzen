import type { Amenity } from '@/types';

export const amenities: Amenity[] = [
  {
    id: 'sky-garden',
    title: 'Vườn thiền trên cao',
    description: 'Không gian thư giãn yên tĩnh với mảng xanh và điểm ngắm cảnh.',
    image: '/images/amenities/amenity-1.svg',
    alt: 'Vườn thiền trên cao tại dự án',
    category: 'internal',
  },
  {
    id: 'pool',
    title: 'Hồ bơi resort',
    description: 'Hồ bơi dành cho cư dân, bố trí ghế nghỉ và cảnh quan nhiệt đới.',
    image: '/images/amenities/amenity-2.svg',
    alt: 'Hồ bơi nội khu phong cách resort',
    category: 'internal',
  },
  {
    id: 'kids',
    title: 'Khu vui chơi trẻ em',
    description: 'Khu vận động an toàn giúp trẻ phát triển thể chất và kết nối cộng đồng.',
    image: '/images/amenities/amenity-3.svg',
    alt: 'Khu vui chơi trẻ em nội khu',
    category: 'internal',
  },
  {
    id: 'retail',
    title: 'Thương mại dịch vụ',
    description: 'Chuỗi cửa hàng tiện lợi, cafe và dịch vụ thiết yếu tại khối đế.',
    image: '/images/amenities/amenity-4.svg',
    alt: 'Khu thương mại dịch vụ khối đế',
    category: 'internal',
  },
  {
    id: 'school',
    title: 'Hệ thống trường học',
    description: 'Kết nối nhanh tới các trường học, trung tâm ngoại ngữ và khu giáo dục.',
    image: '/images/amenities/amenity-5.svg',
    alt: 'Tiện ích ngoại khu trường học',
    category: 'external',
  },
  {
    id: 'medical',
    title: 'Y tế và chăm sóc sức khỏe',
    description: 'Dễ dàng tiếp cận bệnh viện, phòng khám và trung tâm chăm sóc sức khỏe.',
    image: '/images/amenities/amenity-6.svg',
    alt: 'Tiện ích ngoại khu y tế',
    category: 'external',
  },
];

# Hướng dẫn chỉnh sửa website An Zen Residences

Tài liệu này dành cho người quản trị nội dung muốn tự thay ảnh, sửa text, thêm bài viết, cấu hình tracking và form trên website.

Website production hiện tại:

```text
https://anzenresidences.vercel.app/
```

Repository GitHub:

```text
https://github.com/xuanthoan/anzen
```

---

## 1. Quy trình cập nhật website

Bạn có thể sửa theo 2 cách.

### Cách 1: Sửa trực tiếp trên GitHub

1. Vào repository GitHub.
2. Mở file cần sửa.
3. Bấm biểu tượng cây bút **Edit this file**.
4. Sửa nội dung.
5. Kéo xuống dưới, nhập mô tả thay đổi.
6. Bấm **Commit changes**.
7. Vercel sẽ tự động deploy lại website.

### Cách 2: Sửa trên máy tính rồi push lên GitHub

Sau khi sửa file trên máy, chạy:

```bash
npm run lint
npm run typecheck
npm run build
```

Nếu không lỗi, commit và push:

```bash
git add .
git commit -m "Update website content"
git push
```

---

## 2. Cấu trúc thư mục quan trọng

```text
src/
  config/
    site.ts          Thông tin chung website, tên dự án, logo, SEO mặc định
    contact.ts       Hotline, email, địa chỉ, Zalo, Messenger, social
    tracking.ts      Cấu hình tracking đọc từ biến môi trường
  data/
    project.ts       Banner, tổng quan dự án, số liệu, khoảng cách vị trí
    amenities.ts     Danh sách tiện ích nội khu và ngoại khu
    towers.ts        Mặt bằng tổng thể, Tòa 1, Tòa 2, Tòa 3
  components/
    sections/        Các section giao diện của trang chủ
content/
  news/              Các bài viết tin tức dạng Markdown
public/
  images/
    common/          Logo, favicon, ảnh dùng chung
    project/         Banner, ảnh dự án, bản đồ vị trí
    amenities/       Ảnh tiện ích
    floor-plans/     Ảnh mặt bằng tổng thể và từng tòa
    news/            Ảnh bài viết tin tức
```

---

## 3. Thay logo

### File cấu hình

```text
src/config/site.ts
```

Tìm dòng:

```ts
logo: '/images/common/logo-placeholder.svg',
```

Nếu bạn upload logo mới vào:

```text
public/images/common/logo.png
```

Thì sửa thành:

```ts
logo: '/images/common/logo.png',
```

### Lưu ý

- Nên dùng `.svg`, `.webp` hoặc `.png`.
- Logo nên có nền trong suốt.
- Kích thước đề xuất: khoảng `300 x 100 px` hoặc SVG vector.

---

## 4. Thay banner đầu trang

### File cần sửa

```text
src/data/project.ts
```

Tìm đoạn:

```ts
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
```

Ví dụ bạn upload ảnh thật vào:

```text
public/images/project/banner-desktop.webp
public/images/project/banner-mobile.webp
```

Thì sửa thành:

```ts
export const heroSlides = [
  {
    desktop: '/images/project/banner-desktop.webp',
    mobile: '/images/project/banner-mobile.webp',
    alt: 'Phối cảnh dự án An Zen Residences',
    title: 'Tiêu đề thật của dự án',
    description: 'Mô tả thật của dự án.',
  },
];
```

### Kích thước đề xuất

| Loại ảnh | Kích thước đề xuất |
|---|---:|
| Desktop banner | 1920 x 1080 px |
| Mobile banner | 768 x 1200 px |

Nên dùng `.webp` hoặc `.avif` để website tải nhanh.

---

## 5. Thay ảnh giới thiệu chủ đầu tư

### File cần sửa

```text
src/components/sections/intro-sections.tsx
```

Tìm đoạn:

```tsx
<Image
  src="/images/project/developer.svg"
  alt="Hình minh họa chủ đầu tư dự án"
  fill
  ...
/>
```

Nếu bạn upload ảnh vào:

```text
public/images/project/chu-dau-tu.webp
```

Thì sửa thành:

```tsx
<Image
  src="/images/project/chu-dau-tu.webp"
  alt="Hình ảnh chủ đầu tư dự án An Zen Residences"
  fill
  ...
/>
```

---

## 6. Thay ảnh phần dòng sản phẩm / thương hiệu

### File cần sửa

```text
src/components/sections/intro-sections.tsx
```

Tìm đoạn:

```tsx
<Image
  src="/images/project/brand.svg"
  alt="Không gian sống xanh và tiện ích cộng đồng"
  fill
  ...
/>
```

Upload ảnh vào:

```text
public/images/project/phong-cach-song.webp
```

Sửa thành:

```tsx
<Image
  src="/images/project/phong-cach-song.webp"
  alt="Không gian sống xanh tại An Zen Residences"
  fill
  ...
/>
```

---

## 7. Thay ảnh giới thiệu dự án

### File cần sửa

```text
src/components/sections/project-section.tsx
```

Tìm đoạn:

```tsx
<Image
  src="/images/project/project-video.svg"
  alt="Video hoặc phối cảnh giới thiệu dự án"
  fill
  ...
/>
```

Upload ảnh vào:

```text
public/images/project/phoi-canh-du-an.webp
```

Sửa thành:

```tsx
<Image
  src="/images/project/phoi-canh-du-an.webp"
  alt="Phối cảnh tổng thể dự án An Zen Residences"
  fill
  ...
/>
```

---

## 8. Thay ảnh bản đồ vị trí

### File cần sửa

```text
src/components/sections/location-section.tsx
```

Tìm đoạn:

```tsx
<Image
  src="/images/project/map.svg"
  alt="Bản đồ vị trí dự án và các kết nối khu vực"
  fill
  ...
/>
```

Upload ảnh vào:

```text
public/images/project/ban-do-vi-tri.webp
```

Sửa thành:

```tsx
<Image
  src="/images/project/ban-do-vi-tri.webp"
  alt="Bản đồ vị trí dự án An Zen Residences"
  fill
  ...
/>
```

---

## 9. Thay ảnh tiện ích

### File cần sửa

```text
src/data/amenities.ts
```

Ví dụ một tiện ích hiện tại:

```ts
{
  id: 'pool',
  title: 'Hồ bơi resort',
  description: 'Hồ bơi dành cho cư dân, bố trí ghế nghỉ và cảnh quan nhiệt đới.',
  image: '/images/amenities/amenity-2.svg',
  alt: 'Hồ bơi nội khu phong cách resort',
  category: 'internal',
}
```

Nếu bạn upload ảnh vào:

```text
public/images/amenities/ho-boi.webp
```

Sửa thành:

```ts
{
  id: 'pool',
  title: 'Hồ bơi resort',
  description: 'Mô tả thật về hồ bơi của dự án.',
  image: '/images/amenities/ho-boi.webp',
  alt: 'Hồ bơi tại An Zen Residences',
  category: 'internal',
}
```

### Ý nghĩa category

```ts
category: 'internal'
```

Là tiện ích nội khu.

```ts
category: 'external'
```

Là tiện ích ngoại khu.

---

## 10. Thay ảnh mặt bằng tổng thể và từng tòa

### File cần sửa

```text
src/data/towers.ts
```

### Mặt bằng tổng thể

Tìm đoạn:

```ts
export const masterPlan = {
  image: '/images/floor-plans/master-plan.svg',
  alt: 'Mặt bằng tổng thể dự án gồm ba tòa căn hộ và lõi cảnh quan',
  description:
    'Mặt bằng tổng thể được tổ chức theo mô hình lõi xanh trung tâm, phân tách giao thông cư dân và thương mại.',
};
```

Upload ảnh vào:

```text
public/images/floor-plans/mat-bang-tong-the.webp
```

Sửa thành:

```ts
export const masterPlan = {
  image: '/images/floor-plans/mat-bang-tong-the.webp',
  alt: 'Mặt bằng tổng thể dự án An Zen Residences',
  description: 'Mô tả thật về mặt bằng tổng thể dự án.',
};
```

### Mặt bằng từng tòa

Cũng trong file:

```text
src/data/towers.ts
```

Ví dụ Tòa 1:

```ts
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
}
```

Upload ảnh vào:

```text
public/images/floor-plans/toa-1.webp
```

Sửa:

```ts
image: '/images/floor-plans/toa-1.webp',
```

Tương tự cho:

```text
public/images/floor-plans/toa-2.webp
public/images/floor-plans/toa-3.webp
```

---

## 11. Sửa tên dự án, mô tả SEO, menu, CTA

### File cần sửa

```text
src/config/site.ts
```

Các trường quan trọng:

```ts
export const siteConfig = {
  name: 'An Zen Residences Demo',
  projectName: 'An Zen Residences Demo',
  description:
    'Website bất động sản hiện đại cho dự án căn hộ xanh, dữ liệu mẫu sẵn sàng thay thế bằng nội dung chính thức.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  logo: '/images/common/logo-placeholder.svg',
  ogImage: '/images/project/hero-desktop.svg',
  ctaLabel: 'Đăng ký tư vấn',
  keywords: ['bất động sản', 'căn hộ', 'dự án xanh', 'nhà ở hiện đại'],
};
```

Nên đổi thành thông tin thật:

```ts
export const siteConfig = {
  name: 'An Zen Residences',
  projectName: 'An Zen Residences',
  description:
    'An Zen Residences - dự án căn hộ hiện đại với không gian sống xanh, tiện ích đồng bộ và kết nối thuận tiện.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://anzenresidences.vercel.app',
  logo: '/images/common/logo.png',
  ogImage: '/images/project/banner-desktop.webp',
  ctaLabel: 'Đăng ký tư vấn',
  keywords: ['An Zen Residences', 'căn hộ An Zen', 'dự án căn hộ', 'bất động sản'],
};
```

Menu cũng nằm trong file này:

```ts
export const navigation = [
  { label: 'Giới thiệu', href: '/gioi-thieu', section: 'gioi-thieu' },
  { label: 'Vị trí', href: '/vi-tri', section: 'vi-tri' },
  ...
];
```

---

## 12. Sửa hotline, Zalo, Messenger, email, địa chỉ

### File cần sửa

```text
src/config/contact.ts
```

Nội dung hiện tại dạng mẫu:

```ts
export const contactConfig = {
  hotline: '0900 000 000',
  hotlineHref: 'tel:0900000000',
  zaloUrl: 'https://zalo.me/0900000000',
  messengerUrl: 'https://m.me/example',
  email: 'sales@example.com',
  address: 'Địa chỉ dự án mẫu - Chủ đầu tư cần cập nhật thông tin chính thức',
  businessHours: '08:00 - 20:00 hằng ngày',
  socials: [
    { label: 'Facebook', href: 'https://facebook.com/example' },
    { label: 'YouTube', href: 'https://youtube.com/@example' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/example' },
  ],
};
```

Ví dụ sửa thành:

```ts
export const contactConfig = {
  hotline: '0988 888 888',
  hotlineHref: 'tel:0988888888',
  zaloUrl: 'https://zalo.me/0988888888',
  messengerUrl: 'https://m.me/anzenresidences',
  email: 'sales@anzenresidences.com',
  address: 'Địa chỉ thật của dự án',
  businessHours: '08:00 - 20:00 hằng ngày',
  socials: [
    { label: 'Facebook', href: 'https://facebook.com/anzenresidences' },
    { label: 'YouTube', href: 'https://youtube.com/@anzenresidences' },
  ],
};
```

---

## 13. Sửa thông tin tổng quan dự án

### File cần sửa

```text
src/data/project.ts
```

### Thông tin tổng quan

```ts
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
```

Bạn thay `value` bằng thông tin thật.

### Con số nổi bật

```ts
export const projectStats: ProjectStat[] = [
  { value: '3', label: 'Tòa căn hộ' },
  { value: '60%+', label: 'Không gian xanh & tiện ích' },
  { value: '1.200+', label: 'Sản phẩm dự kiến' },
  { value: '24/7', label: 'An ninh & vận hành' },
];
```

### Khoảng cách vị trí

```ts
export const locationDistances = [
  { place: 'Trung tâm hành chính', distance: '05 phút' },
  { place: 'Trường học liên cấp', distance: '07 phút' },
  { place: 'Bệnh viện khu vực', distance: '10 phút' },
  { place: 'Trung tâm thương mại', distance: '12 phút' },
  { place: 'Tuyến giao thông huyết mạch', distance: '03 phút' },
];
```

---

## 14. Sửa bài viết tin tức

Tin tức nằm tại:

```text
content/news/
```

Ví dụ:

```text
content/news/cap-nhat-tien-do-du-an.md
content/news/khong-gian-song-xanh.md
content/news/huong-dan-tham-quan-nha-mau.md
```

Cấu trúc một bài viết:

```md
---
title: Tiêu đề bài viết
description: Mô tả ngắn bài viết
date: 2026-07-18
image: /images/news/anh-bai-viet.webp
alt: Mô tả ảnh bài viết
category: Tin dự án
---

## Tiêu đề trong bài

Nội dung bài viết ở đây.
```

### Thêm bài viết mới

Tạo file mới trong:

```text
content/news/
```

Ví dụ:

```text
content/news/bang-gia-an-zen-residences.md
```

Nội dung:

```md
---
title: Cập nhật bảng giá An Zen Residences
description: Thông tin bảng giá và chính sách bán hàng mới nhất.
date: 2026-07-18
image: /images/news/bang-gia.webp
alt: Bảng giá An Zen Residences
category: Bảng giá
---

## Bảng giá An Zen Residences

Nội dung thật viết ở đây.
```

URL bài viết sẽ là:

```text
/tin-tuc/bang-gia-an-zen-residences
```

---

## 15. Cấu hình Google Tag Manager, Google Ads, Facebook Ads

Không nên dán trực tiếp script tracking vào component. Website đã chuẩn bị sẵn hệ thống đọc ID từ biến môi trường.

### Vào đâu trên Vercel?

1. Vào Vercel.
2. Chọn project website.
3. Vào:

```text
Settings → Environment Variables
```

4. Thêm các biến cần dùng.
5. Redeploy website.

---

### Google Tag Manager

Thêm biến:

```env
NEXT_PUBLIC_GTM_ID=GTM-57RZ66NH
```

Website hiện đã cấu hình GTM mặc định:

```env
NEXT_PUBLIC_GTM_ID=GTM-57RZ66NH
```

Khuyến nghị: dùng GTM để quản lý GA4, Meta Pixel và Google Ads Conversion.

---

### Google Analytics GA4

Thêm biến:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Ví dụ:

```env
NEXT_PUBLIC_GA_ID=G-ABCD123456
```

Nếu dùng GTM, bạn nên tạo GA4 tag trong GTM thay vì gắn riêng.

---

### Meta Pixel / Facebook Ads

Thêm biến:

```env
NEXT_PUBLIC_META_PIXEL_ID=123456789012345
```

Khuyến nghị: cài Meta Pixel qua GTM. Trigger Lead nên dùng event:

```text
generate_lead
```

---

### Google Ads Conversion

Thêm biến:

```env
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=xxxxxxxxxxxxxxxx
```

Ví dụ:

```env
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-123456789
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=AbCdEfGhIjKlMnOpQr
```

Khuyến nghị: cấu hình Google Ads Conversion trong GTM và trigger bằng event:

```text
generate_lead
```

---

## 16. Các event tracking đã chuẩn bị

Website đã chuẩn bị các event sau:

```text
page_view
view_project
view_location
view_amenity
view_floor_plan
select_tower
click_hotline
click_zalo
click_messenger
click_register
generate_lead
form_start
form_submit
form_success
form_error
view_news
scroll_50
scroll_90
```

Quan trọng nhất cho quảng cáo chuyển đổi:

```text
generate_lead
```

Event này chỉ được kích hoạt sau khi form gửi thành công từ server, không kích hoạt ngay khi người dùng bấm nút gửi.

---

## 17. Cấu hình form nhận khách hàng

Form gửi dữ liệu về API nội bộ:

```text
src/app/api/leads/route.ts
```

Adapter xử lý lead nằm ở:

```text
src/lib/lead-adapters.ts
```

Để gửi lead về n8n, CRM hoặc webhook, thêm biến môi trường trên Vercel:

```env
FORM_WEBHOOK_URL=https://your-webhook-url.com
```

Ví dụ n8n:

```env
FORM_WEBHOOK_URL=https://n8n.yourdomain.com/webhook/anzen-lead
```

Lưu ý:

- Biến này không có `NEXT_PUBLIC_`.
- Đây là biến server-side.
- Không đưa webhook secret vào frontend.

---

## 18. Cập nhật domain production

Trên Vercel, nên thêm biến:

```env
NEXT_PUBLIC_SITE_URL=https://anzenresidences.vercel.app
```

Nếu sau này dùng domain riêng, ví dụ:

```text
https://anzenresidences.com.vn
```

Thì đổi thành:

```env
NEXT_PUBLIC_SITE_URL=https://anzenresidences.com.vn
```

Biến này ảnh hưởng tới:

- Canonical URL.
- Sitemap.
- Robots.
- Metadata SEO.

---

## 19. Lưu ý tối ưu ảnh

Nên dùng ảnh:

```text
.webp
.avif
```

Kích thước đề xuất:

| Khu vực | Kích thước đề xuất |
|---|---:|
| Hero desktop | 1920 x 1080 |
| Hero mobile | 768 x 1200 |
| Ảnh section | 1200 x 900 |
| Ảnh tiện ích | 1000 x 750 |
| Tin tức | 1200 x 900 |
| Mặt bằng | 1600 x 1200 hoặc lớn hơn |

Dung lượng khuyến nghị:

| Loại ảnh | Dung lượng nên dưới |
|---|---:|
| Hero | 1 MB |
| Ảnh section | 700 KB |
| Ảnh card/tin tức | 500 KB |
| Logo | 100 KB |

---

## 20. Checklist sau khi chỉnh sửa

Sau khi sửa ảnh hoặc text, kiểm tra:

- [ ] Website không lỗi giao diện.
- [ ] Ảnh hiển thị đúng.
- [ ] Không có ảnh bị méo hoặc vỡ.
- [ ] Text không quá dài gây vỡ layout.
- [ ] Mobile menu hoạt động.
- [ ] Form gửi được.
- [ ] Hotline/Zalo đúng.
- [ ] Sitemap truy cập được tại `/sitemap.xml`.
- [ ] Robots truy cập được tại `/robots.txt`.
- [ ] GTM Preview Mode hoạt động nếu có cấu hình GTM.
- [ ] GA4 DebugView nhận event nếu có cấu hình.
- [ ] Meta Pixel Helper nhận event nếu có cấu hình.
- [ ] Google Ads Conversion chỉ bắn sau khi form thành công.

---

## 21. Tóm tắt nhanh

| Muốn sửa | Vào file/thư mục |
|---|---|
| Tên dự án, mô tả SEO, logo, menu | `src/config/site.ts` |
| Hotline, email, địa chỉ, Zalo, Messenger | `src/config/contact.ts` |
| Banner, tổng quan, số liệu, vị trí | `src/data/project.ts` |
| Tiện ích | `src/data/amenities.ts` |
| Mặt bằng tổng thể, Tòa 1/2/3 | `src/data/towers.ts` |
| Bài viết tin tức | `content/news/*.md` |
| Logo | `public/images/common/` |
| Banner, ảnh dự án, bản đồ | `public/images/project/` |
| Ảnh tiện ích | `public/images/amenities/` |
| Ảnh mặt bằng | `public/images/floor-plans/` |
| Ảnh tin tức | `public/images/news/` |
| GTM/GA/Meta/Google Ads | Vercel → Settings → Environment Variables |
| Webhook nhận lead | Vercel → Settings → Environment Variables → `FORM_WEBHOOK_URL` |

---

## 22. Ghi chú quan trọng về bản quyền

Không upload hoặc sử dụng:

- Logo chưa được cấp quyền.
- Ảnh phối cảnh chưa được cấp quyền.
- Ảnh mặt bằng chưa được cấp quyền.
- Nội dung copy từ website khác.
- Thông tin pháp lý chưa được chủ đầu tư xác nhận.

Trước khi public chính thức, hãy thay toàn bộ placeholder bằng tài sản hợp pháp và nội dung đã được kiểm duyệt.

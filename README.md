# An Zen Residences Demo

Website bất động sản hiện đại xây dựng bằng Next.js App Router, TypeScript và Tailwind CSS. Dự án dùng nội dung/ảnh placeholder độc lập, không sao chép tài sản từ website tham khảo.

## Công nghệ

- Next.js App Router, React Server Components khi phù hợp
- TypeScript
- Tailwind CSS
- `next/image`, `next/font`
- ESLint, Prettier
- Lucide React
- Framer Motion đã cài sẵn cho hiệu ứng cần thiết sau này, hiện hạn chế JS phía client
- Markdown tin tức qua `content/news`

## Yêu cầu môi trường

- Node.js 22+
- npm

## Cài đặt và chạy

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
npm start
```

## Cấu trúc thư mục

```text
src/
  app/                 Route, metadata, API lead, sitemap, robots
  components/
    layout/            Header, Footer, floating buttons
    sections/          Các section landing page
    forms/             Lead form
    news/              News card/list
    tracking/          GTM, consent, JSON-LD, tracking bootstrap
    ui/                Component nhỏ tái sử dụng
  config/              site, contact, tracking
  data/                project, amenities, towers
  lib/                 news parser, lead adapters, tracking, UTM, utils
  types/               TypeScript types
content/news/          Bài viết Markdown
public/images/         Placeholder logo, banner, tiện ích, mặt bằng, tin tức
.github/workflows/ci.yml
```

## Chỉnh sửa nội dung

### Thay logo

- File cấu hình: `src/config/site.ts`
- Trường: `logo`
- Ảnh mặc định: `public/images/common/logo-placeholder.svg`
- Thay bằng file mới trong `public/images/common/`, ví dụ `/images/common/logo.svg`.

### Thay banner

- File dữ liệu: `src/data/project.ts`
- Trường: `heroSlides`
- Ảnh desktop/mobile đang nằm tại:
  - `public/images/project/hero-desktop.svg`
  - `public/images/project/hero-mobile.svg`

### Thay hotline, email, địa chỉ, mạng xã hội

- File: `src/config/contact.ts`
- Cập nhật `hotline`, `hotlineHref`, `zaloUrl`, `messengerUrl`, `email`, `address`, `socials`.

### Thêm/sửa thông tin tổng quan dự án

- File: `src/data/project.ts`
- Mảng: `projectFacts`, `projectStats`, `locationDistances`.

### Thêm tiện ích

- File: `src/data/amenities.ts`
- Thêm object mới theo type `Amenity`.
- Ảnh đặt trong `public/images/amenities/`.
- `category` là `internal` hoặc `external`.

### Thay ảnh từng tòa / mặt bằng

- File: `src/data/towers.ts`
- Cập nhật `masterPlan.image` và từng `tower.image`.
- Ảnh đặt trong `public/images/floor-plans/`.

### Thêm bài tin tức

1. Tạo file `.md` trong `content/news/`, ví dụ `content/news/tieu-de-bai-viet.md`.
2. Thêm frontmatter:

```md
---
title: Tiêu đề bài viết
description: Mô tả ngắn
date: 2026-07-17
image: /images/news/news-1.svg
alt: Mô tả ảnh
category: Tin dự án
---

## Nội dung

Viết nội dung ở đây.
```

Slug lấy theo tên file.

## Biến môi trường

Copy `.env.example` thành `.env.local` khi chạy local:

```env
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_GOOGLE_ADS_ID=
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
FORM_WEBHOOK_URL=
```

Không commit `.env.local`.

## Tracking, GTM, Meta Pixel, Google Ads

- Component GTM: `src/components/tracking/trackers.tsx`
- Helper event: `src/lib/tracking.ts`
- Tracking chỉ bật mặc định ở production và khi có consent nếu consent required.
- Không gửi PII như họ tên, điện thoại, email vào dataLayer.
- Conversion lead chỉ kích hoạt sau khi API `/api/leads` xác nhận thành công.

Sự kiện đã chuẩn bị: `page_view`, `view_project`, `view_location`, `view_amenity`, `view_floor_plan`, `select_tower`, `click_hotline`, `click_zalo`, `click_messenger`, `click_register`, `generate_lead`, `form_start`, `form_submit`, `form_success`, `form_error`, `view_news`, `scroll_50`, `scroll_90`.

## Form webhook / CRM

- API route: `src/app/api/leads/route.ts`
- Adapter: `src/lib/lead-adapters.ts`
- Nếu `FORM_WEBHOOK_URL` là URL HTTPS, lead được POST tới webhook.
- Nếu chưa có webhook:
  - Development dùng mock rõ ràng.
  - Production trả lỗi cấu hình, không giả vờ gửi thành công.

Có thể mở rộng adapter để gửi n8n, email service, CRM hoặc database.

## SEO

Đã cấu hình:

- Metadata API
- Canonical, Open Graph, Twitter Card
- `robots.ts`, `sitemap.ts`
- JSON-LD cho ApartmentComplex và Article
- Heading một H1 trên từng trang chính
- Alt text cho ảnh placeholder

Cần cập nhật `NEXT_PUBLIC_SITE_URL` khi deploy production.

## Deploy GitHub và Vercel

1. Tạo repository GitHub mới.
2. Kiểm tra không có `.env.local`, `.next`, `node_modules`, dữ liệu khách hàng.
3. Commit source code:
   ```bash
   git add .
   git commit -m "Initial real estate website"
   ```
4. Push branch chính lên GitHub.
5. Vào Vercel, chọn **Import Project** từ repository.
6. Khai báo biến môi trường production theo `.env.example`.
7. Deploy.
8. Kết nối tên miền.
9. Kiểm tra HTTPS.
10. Gửi thử form production và xác nhận webhook/CRM nhận lead.
11. Kiểm tra GTM bằng Preview Mode.
12. Kiểm tra GA4 DebugView.
13. Kiểm tra Meta Pixel Helper.
14. Kiểm tra Google Ads conversion sau lead thành công.
15. Truy cập `/sitemap.xml` và `/robots.txt`.
16. Gửi sitemap vào Google Search Console.

## Checklist trước khi public

- [ ] Thay logo placeholder
- [ ] Thay hero/banner bằng ảnh được cấp quyền
- [ ] Thay phối cảnh, tiện ích, mặt bằng thật
- [ ] Cập nhật thông tin pháp lý dự án
- [ ] Cập nhật chính sách bảo mật chính thức
- [ ] Cấu hình `NEXT_PUBLIC_SITE_URL`
- [ ] Cấu hình GTM/GA/Meta/Ads nếu sử dụng
- [ ] Cấu hình `FORM_WEBHOOK_URL`
- [ ] Test form production
- [ ] Test responsive 360, 390, 768, 1024, 1280, 1440, 1920 px
- [ ] Chạy `npm run lint && npm run typecheck && npm run build`

## Placeholder đang sử dụng

Tất cả ảnh trong `public/images/**` hiện là SVG placeholder tự tạo. Cần thay bằng tài sản chính thức trước khi public thương mại.

## Quyết định kỹ thuật

- Dùng dữ liệu TypeScript cho project/amenities/towers để dễ chỉnh sửa và type-safe.
- Dùng Markdown cho tin tức để dễ chuyển sang CMS sau này.
- Dùng server API route cho lead để bảo mật webhook secret.
- Dùng consent banner trước khi tải marketing script.
- Hạn chế client component chỉ ở phần cần tương tác: header, lightbox, tabs, form, tracking.

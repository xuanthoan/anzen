Cập nhật website Next.js bất động sản An Zen Residences trong workspace hiện tại.

Yêu cầu:
1. Không hotlink, không tải/copy ảnh từ website tham khảo. Tự tạo các SVG minh hoạ local đẹp hơn để thay placeholder trắng/trống trong public/images/common, public/images/project, public/images/amenities, public/images/floor-plans, public/images/news.
2. Cập nhật nội dung dựa trên thông tin công khai đã biên tập lại, không copy nguyên văn dài:
   - Tên dự án: An Zen Residences.
   - Dòng sản phẩm: EHome.
   - Phát triển bởi Nam Long ADC / Nam Long Group.
   - Vị trí: đường Trang Quan, phường An Hải, TP. Hải Phòng.
   - Quy mô: 1,49 ha.
   - 3 block căn hộ cao 18 tầng.
   - 887 căn hộ.
   - Tiến độ: đang triển khai.
   - Định vị: căn hộ vừa túi tiền tại trung tâm kết nối Hải Phòng.
   - Tiện ích tham khảo để biên tập: sân pickleball, gym ngoài trời, sân thể thao đa năng, clubhouse, BBQ, vườn Zen, vườn café, khu vui chơi trẻ em, nhà trẻ, trạm sạc xe điện, shophouse thương mại.
3. Cập nhật các file nội dung/data: src/config/site.ts, src/config/contact.ts, src/data/project.ts, src/data/amenities.ts, src/data/towers.ts, content/news/*.md.
4. Cập nhật đường dẫn ảnh trong data/component nếu cần để dùng SVG local mới.
5. Giữ GTM hiện tại GTM-57RZ66NH và consentRequired=false. Không bật lại cookie banner.
6. Không phá route hiện có. TypeScript không lỗi. Không dùng any. Không console log production.
7. Sau khi sửa, chạy npm run lint, npm run typecheck, npm run build và tự sửa lỗi nếu có.
8. Báo cáo file đã thay đổi và kết quả kiểm tra.

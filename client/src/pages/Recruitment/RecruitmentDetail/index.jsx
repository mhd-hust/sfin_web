import React from 'react';
import './RecruitmentDetail.scss';

const jobs = [
  {
    ba: [
      {
        name: 'nhân viên kinh doanh',
        amount: '03',
        detail: [
          {
            title: 'Yêu cầu công việc',
            des: [
              <p>
                Tốt nghiệp cao đẳng trở lên. Ưu tiên tốt nghiệp chuyên ngành
                QTKD, Marketing, CNTT hoặc chuyên ngành liên quan;
              </p>,
              <p>Chấp nhận sinh viên mới ra trường.</p>,
              <p>
                Ưu tiên kinh nghiệm làm nhân viên kinh doanh từ 06 tháng trở
                lên; ưu tiên các ứng viên có kinh nghiệm trong các công ty kinh
                doanh thương mại, điện tử, phần mềm, CNTT hoặc các ngành bán lẻ.
              </p>,
              <p>
                Ưu tiên ứng viên có mạng lưới quan hệ rộng với các chủ cửa hàng
                bán lẻ; có kinh nghiệm sử dụng các công cụ quản lý công việc như
                CRM…
              </p>,
              <p>
                Thành tạo tin học văn phòng (Word, Excel) và am hiểu internet,
                mạng xã hội;
              </p>,
              <p>Kỹ năng bán hàng, đàm phán, giao tiếp, giải quyết vấn đề</p>,
              <p>
                Kỹ năng duy trì mối quan hệ với khách hàng, tổ chức công việc,
                quản lý thời gian
              </p>,
              <p>
                Tinh thần trách nhiệm trong công việc, học hỏi, có tố chất phát
                triển
              </p>,
            ],
          },
          {
            title: 'Mô tả công việc:',
            des: [
              <p>Tìm kiếm khách hàng tiềm năng</p>,
              <p>
                Tìm kiếm khách hàng trong các mối quan hệ, mạng xã hội, các công
                cụ online, khai thác thị trường trực tiếp hoặc bất kì nguồn nào
                bạn có thể tìm được.
              </p>,
              <p>
                Tìm hiểu nhu cầu của khách hàng, gặp gỡ và lựa chọn hướng tư vấn
                phù hợp với từng khách hàng.
              </p>,
              <p>Ký kết hợp đồng và hướng dẫn khách hàng sử dụng sản phẩm.</p>,
              <p>
                Xây dựng tài liệu bán hàng, tổ chức đào tạo kênh bán, định hướng
                danh mục sản phẩm, phương án bán hàng từng thời điểm, địa bàn
              </p>,
              <p>
                Bán sản phẩm SSHOP tới tay người dùng cuối: Open Smart Shop
                Platform- Hệ thống nền tảng Thương Mại điện tử hàng đầu ở Việt
                Nam. Cung cấp các nền tảng quản lý bán hàng cho các doanh nghiệp
                với hàng trăm ngành hàng khác nhau; hệ thống quản lý kênh bán
                hàng, đại lý chuyên nghiệp, giúp cho các doanh nghiệp tối ưu
                nguồn lực và tăng trưởng kinh doanh mạnh mẽ.
              </p>,
              <p>Chăm sóc khách hàng hiện có</p>,
              <p>
                Quản lý thông tin khách hàng hiện có & giữ mối quan hệ tốt đẹp
                để mở rộng mạng lưới khách hàng
              </p>,
              <p>
                Kết hợp với các bộ phận Phát triển sản phẩm, Chăm sóc khách hàng
                để đáp ứng những nhu cầu, thắc mắc của khách hàng về sản phẩm.
              </p>,
              <p>
                Lắng nghe, tiếp thu ý kiến từ khách hàng nhằm xây dựng và cải
                thiện sản phẩm ngày càng hoàn thiện.
              </p>,
              <p>Tuân thủ các quy trình và đạo đức nghề nghiệp</p>,
              <p>
                Quản lý công việc bằng các công cụ theo đúng quy trình, quy định
                của công ty, bao gồm: báo cáo công việc, cập nhật cơ sở dữ liệu…
              </p>,
              <p>
                Bảo mật các vấn đề liên quan đến bí mật công nghệ, chiến lược
                kinh doanh, dữ liệu khách hàng của Công ty, thông tin kinh doanh
                và dữ liệu của khách hàng và đối tác.
              </p>,
              <p>
                Đảm bảo hành vi và thái độ làm việc phù hợp với tiêu chuẩn, quy
                định và quy trình của công ty.
              </p>,
            ],
          },
          {
            title: 'Quyền lợi',
            des: [
              <p>Thu nhập cạnh tranh: up to tới 20 triệu/tháng</p>,
              <p>
                Được xét duyệt tăng lương định kỳ & thưởng cuối năm theo kết quả
                công việc
              </p>,
              <p>
                Được hưởng các quyền lợi và chế độ theo luật quy định (Các ngày
                nghỉ lễ, BHXH, BHYT…);
              </p>,
              <p>
                Được hưởng các chế độ phúc lợi theo nội quy, quy chế của Công ty
                (nghỉ mát, team Buiding, thăm khám sức khỏe hàng năm...)
              </p>,
              <p>
                Nâng cấp bản thân với hiểu biết chuyên sâu về các giải pháp phần
                mềm, Business App
              </p>,
              <p>
                Mở rộng mối quan hệ đặc biệt với các doanh nghiệp, chủ doanh
                nghiệp
              </p>,
              <p>
                Môi trường chuyên nghiệp, trẻ trung, lộ trình sự nghiệp rõ ràng
              </p>,
            ],
          },
          {
            title: 'Liên hệ',
            des: [
              <p>
                CV gửi về mail:{' '}
                <span className='text-green'>
                  support@sfin.vn; vananhvdc84@gmail.com
                </span>
              </p>,
              <p>
                Hoặc nộp hồ sơ trực tiếp tại VP: Số 89, đường Hồ Đền Lừ, Hoàng
                Mai.
              </p>,
              <p>
                Ms.Vân Anh:{' '}
                <span className='text-green'>0934589099 (call/sms/zalo)</span>
              </p>,
              <p className='text-red'>
                Hạn nộp hồ sơ 30/9/2023 (Ưu tiên ứng viên nộp hồ sơ sớm)
              </p>,
            ],
          },
        ],
      },
    ],
  },
];

const RecruitmentDetail = () => {
  return (
    <div className='recruitment-detail'>
      <h1>nhân viên kinh doanh</h1>
      <h2>Số lượng: 03</h2>
      <h3 className='text-green'>1. Yêu cầu công việc</h3>
      <ul>
        <li>
          Tốt nghiệp cao đẳng trở lên. Ưu tiên tốt nghiệp chuyên ngành QTKD,
          Marketing, CNTT hoặc chuyên ngành liên quan;
        </li>
        <li>Chấp nhận sinh viên mới ra trường.</li>
        <li>
          Ưu tiên kinh nghiệm làm nhân viên kinh doanh từ 06 tháng trở lên; ưu
          tiên các ứng viên có kinh nghiệm trong các công ty kinh doanh thương
          mại, điện tử, phần mềm, CNTT hoặc các ngành bán lẻ.
        </li>
        <li>
          Ưu tiên ứng viên có mạng lưới quan hệ rộng với các chủ cửa hàng bán
          lẻ; có kinh nghiệm sử dụng các công cụ quản lý công việc như CRM…
        </li>
        <li>
          Thành tạo tin học văn phòng (Word, Excel) và am hiểu internet, mạng xã
          hội;
        </li>
        <li>Kỹ năng bán hàng, đàm phán, giao tiếp, giải quyết vấn đề</li>
        <li>
          Kỹ năng duy trì mối quan hệ với khách hàng, tổ chức công việc, quản lý
          thời gian
        </li>
        <li>
          Tinh thần trách nhiệm trong công việc, học hỏi, có tố chất phát triển
        </li>
      </ul>
      <h3 className='text-green'>2. Mô tả công việc:</h3>
      <ul>
        <li>Tìm kiếm khách hàng tiềm năng</li>
        <li>
          Tìm kiếm khách hàng trong các mối quan hệ, mạng xã hội, các công cụ
          online, khai thác thị trường trực tiếp hoặc bất kì nguồn nào bạn có
          thể tìm được.
        </li>
        <li>
          Tìm hiểu nhu cầu của khách hàng, gặp gỡ và lựa chọn hướng tư vấn phù
          hợp với từng khách hàng.
        </li>
        <li>Ký kết hợp đồng và hướng dẫn khách hàng sử dụng sản phẩm.</li>
        <li>
          Xây dựng tài liệu bán hàng, tổ chức đào tạo kênh bán, định hướng danh
          mục sản phẩm, phương án bán hàng từng thời điểm, địa bàn
        </li>
        <li>
          Bán sản phẩm SSHOP tới tay người dùng cuối: Open Smart Shop Platform-
          Hệ thống nền tảng Thương Mại điện tử hàng đầu ở Việt Nam. Cung cấp các
          nền tảng quản lý bán hàng cho các doanh nghiệp với hàng trăm ngành
          hàng khác nhau; hệ thống quản lý kênh bán hàng, đại lý chuyên nghiệp,
          giúp cho các doanh nghiệp tối ưu nguồn lực và tăng trưởng kinh doanh
          mạnh mẽ.
        </li>
        <li>Chăm sóc khách hàng hiện có</li>
        <li>
          Quản lý thông tin khách hàng hiện có & giữ mối quan hệ tốt đẹp để mở
          rộng mạng lưới khách hàng
        </li>
        <li>
          Kết hợp với các bộ phận Phát triển sản phẩm, Chăm sóc khách hàng để
          đáp ứng những nhu cầu, thắc mắc của khách hàng về sản phẩm.
        </li>
        <li>
          Lắng nghe, tiếp thu ý kiến từ khách hàng nhằm xây dựng và cải thiện
          sản phẩm ngày càng hoàn thiện.
        </li>
        <li>Tuân thủ các quy trình và đạo đức nghề nghiệp</li>
        <li>
          Quản lý công việc bằng các công cụ theo đúng quy trình, quy định của
          công ty, bao gồm: báo cáo công việc, cập nhật cơ sở dữ liệu…
        </li>
        <li>
          Bảo mật các vấn đề liên quan đến bí mật công nghệ, chiến lược kinh
          doanh, dữ liệu khách hàng của Công ty, thông tin kinh doanh và dữ liệu
          của khách hàng và đối tác.
        </li>
        <li>
          Đảm bảo hành vi và thái độ làm việc phù hợp với tiêu chuẩn, quy định
          và quy trình của công ty.
        </li>
      </ul>
      <h3 className='text-green'>3. Quyền lợi</h3>
      <ul>
        <li>Thu nhập cạnh tranh: up to tới 20 triệu/tháng</li>
        <li>
          Được xét duyệt tăng lương định kỳ & thưởng cuối năm theo kết quả công
          việc
        </li>
        <li>
          Được hưởng các quyền lợi và chế độ theo luật quy định (Các ngày nghỉ
          lễ, BHXH, BHYT…);
        </li>
        <li>
          Được hưởng các chế độ phúc lợi theo nội quy, quy chế của Công ty (nghỉ
          mát, team Buiding, thăm khám sức khỏe hàng năm...)
        </li>
        <li>
          Nâng cấp bản thân với hiểu biết chuyên sâu về các giải pháp phần mềm,
          Business App
        </li>
        <li>
          Mở rộng mối quan hệ đặc biệt với các doanh nghiệp, chủ doanh nghiệp
        </li>
        <li>Môi trường chuyên nghiệp, trẻ trung, lộ trình sự nghiệp rõ ràng</li>
      </ul>
      <h3 className='text-green'>4. Liên hệ</h3>
      <ul>
        <li>
          CV gửi về mail:{' '}
          <span className='text-green'>
            support@sfin.vn; vananhvdc84@gmail.com
          </span>
        </li>
        <li>
          Hoặc nộp hồ sơ trực tiếp tại VP: Số 89, đường Hồ Đền Lừ, Hoàng Mai.
        </li>
        <li>
          Ms.Vân Anh:{' '}
          <span className='text-green'>0934589099 (call/sms/zalo)</span>
        </li>
        <li className='text-red'>
          Hạn nộp hồ sơ 30/9/2023 (Ưu tiên ứng viên nộp hồ sơ sớm)
        </li>
      </ul>
    </div>
  );
};

export default RecruitmentDetail;

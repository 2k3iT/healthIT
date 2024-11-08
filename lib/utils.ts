import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDateTime(isoString: string): string {
  const date = new Date(isoString);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Tháng bắt đầu từ 0
  const year = date.getFullYear();

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

export const postsData = [
  {
    avatar: "/doctor/09.jpg",
    id: 1,
    price: "150000 vnd",
    name: "BS CKI. Đoàn Thị Bích Vân",
    class: "Da Liễu",
    role: "Bác sĩ chuyên khoa",
    order: "Da liễu Viêm da cơ địa, vẩy nến, nấm da...",
    profile:
      "Bác sĩ Đoàn Thị Bích Vân là một chuyên gia nữ trong lĩnh vực da liễu, sở hữu nhiều năm kinh nghiệm đáng kể trong việc điều trị các vấn đề liên quan đến da.Bác sĩ Bích Vân có chuyên môn cao trong việc khám và chẩn đoán các bệnh da liễu đa dạng, bao gồm viêm da cơ địa, vẩy nến, nấm da, và nhiều tình trạng da khác. Sự tận tâm của bác không chỉ thể hiện qua kiến thức chuyên sâu mà còn qua khả năng tương tác tốt với người bệnh, tạo cảm giác tin tưởng và thoải mái trong quá trình điều trị.",
  },
  {
    avatar: "/doctor/08.jpg",
    id: 2,
    price: "300.00đ",
    name: "BS CKII. Nguyễn Thị Thùy Vân",
    class: "nhi khoa",
    role: "Bác sĩ chuyên khoa",
    order:
      " Động kinh, Đau đầu cấp và mạn, Rối loạn giấc ngủ, Tăng động ,Kém tập trung, Chậm phát triển tâm vận, Học kém, Yếu liệt khu trú, Sốt co giật, Viêm...",
    profile:
      "Bác sĩ Nguyễn Thị Thùy Vân - Chuyên khoa II chuyên sâu về Thần kinh Nhi với hơn 16 năm kinh nghiệm trong lĩnh vực nhi khoa. Bác sĩ Vân có thế mạnh trong chẩn đoán và điều trị các bệnh lý thần kinh thường gặp ở trẻ em, bao gồm: Động kinh; Đau đầu; Rối loạn giấc ngủ; Tăng động, giảm chú ý; Chậm phát triển tâm thần;...Ngoài ra, Bác sĩ Vân còn chuyên sâu về các bệnh lý nhi khoa tổng quát như: tay chân miệng, viêm hô hấp, viêm phế quản, thủy đậu, sởi, sốt phát ban, rối loạn tiêu hóa, quai bị, viêm gan, viêm ruột",
    exp: "2007 - 2011: Bác sĩ Nội tổng quát tại Bệnh viện Quận 1. 2013 : Bác sĩ Thần kinh Nhi, phụ trách Khoa Nhiễm Thần Kinh tại Bệnh viện Nhi Đồng 1.Quá trình học và đào tạo: 2001 - 2007: Tốt nghiệp Đại học Y Dược TP.HCM với chuyên ngành Bác sĩ đa khoa.,2011 - 2013: Hoàn thành chương trình Thạc sĩ Thần kinh học tại Đại học Y Dược TP.HCM.,2020 - 2022: Bác sĩ chuyên khoa II Thần kinh Nhi tại Đại học Y Dược TP.HCM.",
  },
  {
    avatar: "/doctor/03.jpg",
    id: 3,
    price: "150.000đ",
    name: "BS CKII. Bác sĩ Nguyễn Thị Hường",
    class: "Mắt",
    role: "Bác sĩ chuyên khoa",
    order:
      " Bác sĩ Nguyễn Thị Hường với nhiều năm khám, tư vấn, điều trị các bệnh lý trong nhãn khoa: viêm kết mạc, viêm giác mạc, khô mắt, mộng thịt.",
    profile:
      "Bác sĩ Nguyễn Thị Hường là một chuyên gia trong lĩnh vực nhãn khoa, với nhiều năm kinh nghiệm tích lũy trong việc khám, tư vấn, và điều trị một loạt các bệnh lý đa dạng liên quan đến mắt.",
    exp: "2020-2021: Bệnh viện Thống Nhất Đồng Nai.2021-2023: Bệnh viện 30-4 Bộ Công an.quá trình học và đào tạo: Hoàn thành lớp vi phẫu trong nhãn khoa tại Đại học Y Dược TP. Hồ Chí Minh.Hoàn thành khoá OCT trong nhãn khoa tại Bệnh viện Mắt Trung ương.Khám, tư vấn, và điều trị các bệnh lý về mắt tại Khoa Mắt Bệnh viện 30-4..",
  },
  {
    avatar: "/doctor/04.jpg",
    id: 4,
    price: "150000 vnd",
    name: "Bác sĩ Lê Thiên Thi",
    class: "Tim mạch",
    role: "Bác sĩ chuyên khoa.",
    order:
      "Bác sĩ chuyên khoa Tim Mạch. điều trị bệnh mạn tính nội tim mạch.giới thiệu:Bác sĩ Lê Thiên Thi với 4 năm kinh nghiệm chuyên ngành nội khoa, chuyên khám và điều trị bệnh mạn tính nội tim mạch.",
    profile:
      " Hoàn thành chương trình Bác Sĩ Đa Khoa tại trường Đại Học Tây Nguyên.Đang học bác sĩ chuyên khoa cấp I tại trường Đại Học Y Khoa Phạm Ngọc Thạch.hkhinh nghiệm từng công tác: 2020-2023: Bệnh Viện Đa Khoa Vùng Tây Nguyên.",
  },

  {
    star: 5,
    _createdAt: Date.now(),
    avatar: "/doctor/07.jpg",
    id: 5,
    price: "200.000đ",
    name: "BS CKI. Nguyễn Trí Khoa",
    class: "nhi khoa",
    role: "Bác sĩ chuyên khoa",
    order:
      " Bệnh người lớn và trẻ em: chàm, viêm da cơ địa, nấm da, mày đay dị ứng, mụn trứng cá, thuỷ đậu, zona, viêm mô bào",
    profile:
      "Bác sĩ Nguyễn Trí Khoa có kinh nghiệm dày dặn về khám, chẩn đoán điều trị các bệnh lý Nội Da liễu người lớn và trẻ em như viêm da cơ địa, viêm da tiết bã, nấm da, nấm móng ,v...v..Bác sĩ Khoa luôn nhiệt tình, tận tâm hỗ trợ và giải đáp chi tiết nhất các vấn đề tình trạng bệnh, đề ra hướng điều trị phù hợp cho người bệnh.Quá trình học và đào tạo:  Hoàn thành lớp Chuyên khoa 1 Da liễu tại Đại Học Y Khoa Phạm Ngọc Thạch. Hoàn thành các khoá đào tạo liên tục ở Đại học Y Dược TP. HCM và Đại Học Y Khoa Phạm Ngọc Thạch.",
    exp: "2016-2018: Bệnh Viện Bình Chánh, 2018-2021: Phòng Khám Đa Khoa Phú Đức,2021: Bác Sĩ Nội Nhi Da Liễu tại phòng khám đa khoa Tâm Bình Medic tại Phòng Khám Đa Khoa Tâm Bình Medic.",
  },

  {
    star: 5,
    _createdAt: Date.now(),
    avatar: "/doctor/07.jpg",
    id: 6,
    price: "200.000đ",
    name: "BS CKI. Nguyễn Trí Khoa",
    class: "nhi khoa",
    role: "Bác sĩ chuyên khoa",
    order:
      " Bệnh người lớn và trẻ em: chàm, viêm da cơ địa, nấm da, mày đay dị ứng, mụn trứng cá, thuỷ đậu, zona, viêm mô bào",
    profile:
      "Bác sĩ Nguyễn Trí Khoa có kinh nghiệm dày dặn về khám, chẩn đoán điều trị các bệnh lý Nội Da liễu người lớn và trẻ em như viêm da cơ địa, viêm da tiết bã, nấm da, nấm móng ,v...v..Bác sĩ Khoa luôn nhiệt tình, tận tâm hỗ trợ và giải đáp chi tiết nhất các vấn đề tình trạng bệnh, đề ra hướng điều trị phù hợp cho người bệnh.Quá trình học và đào tạo:  Hoàn thành lớp Chuyên khoa 1 Da liễu tại Đại Học Y Khoa Phạm Ngọc Thạch. Hoàn thành các khoá đào tạo liên tục ở Đại học Y Dược TP. HCM và Đại Học Y Khoa Phạm Ngọc Thạch.",
    exp: "2016-2018: Bệnh Viện Bình Chánh, 2018-2021: Phòng Khám Đa Khoa Phú Đức,2021: Bác Sĩ Nội Nhi Da Liễu tại phòng khám đa khoa Tâm Bình Medic tại Phòng Khám Đa Khoa Tâm Bình Medic.",
  },
];

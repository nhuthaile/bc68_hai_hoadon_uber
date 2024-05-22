const UBER_CAR = "uberCar";
const UBER_SUV = "uberSUV";
const UBER_BLACK = "uberBlack";

const kiemTraGiaTienKmDauTien = (loaiXe) => {
  // kiểm tra loại xe và trả về giá tiền phù hợp
  switch (loaiXe) {
    case UBER_CAR:
      return 8000;

    case UBER_SUV:
      return 9000;

    case UBER_BLACK:
      return 10000;

    default:
      break;
  }
};

// Hàm lấy giá tiền km từ 1 đến 19
const kiemTraGiaTien1Den19 = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 7500;

    case UBER_SUV:
      return 8500;

    case UBER_BLACK:
      return 9500;

    default:
      break;
  }
};

// Hàm lấy giá tiền từ 19km trở lên
const kiemTraGiaTien19TroLen = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 7000;

    case UBER_SUV:
      return 8000;

    case UBER_BLACK:
      return 9000;

    default:
      break;
  }
};
// Hàm lấy giá tiền thời gian chờ
const kiemTraTienThoiGianCho3Phut = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 2000;

    case UBER_SUV:
      return 3000;

    case UBER_BLACK:
      return 3500;

    default:
      break;
  }
};

document.getElementById("btnTinhTien").onclick = () => {
  console.log("nut tinh tien");
  //   lấy dữ liệu lưu trữ (loại xe, số km, thời gian chờ)
  let soKm = document.getElementById("txt-km").value * 1;
  console.log(soKm);
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  let loaiXe = document.querySelector("input[type='radio']:checked").value;
  console.log(loaiXe);

  let giaTienKmDauTien = kiemTraGiaTienKmDauTien(loaiXe);
  console.log(giaTienKmDauTien);
  let giaTienKm1Den19 = kiemTraGiaTien1Den19(loaiXe);
  console.log(giaTienKm1Den19);
  let giaTienKm19TroLen = kiemTraGiaTien19TroLen(loaiXe);
  console.log(giaTienKm19TroLen);
  let giaTienThoiGianCho3Phut = kiemTraTienThoiGianCho3Phut(loaiXe);
  console.log(giaTienThoiGianCho3Phut);

  // TH 1: đi 1KM => số KM người dùng đi * giaTienKmDauTien nếu (soKm<=1 && soKm > 0)
  // TH 2: đi trong khoản >1km và <=19km: (số km di chuyển-1) * giaTienKmTu1Den19 + giaTienKmDauTien
  // TH 3: di chuyển >19km: giaTienKmDauTien + (19-1)* giaTienKmTu1Den19 + (so km di chuyen - 19) * giaTienKmTu19TroLen
  // Tính giá tiền chờ => if(thoi gian cho >3) => math.floor(thoi gian cho/3)-1

  let tongTien = 0;
  if (soKm <= 1 && soKm > 0) {
    tongTien = soKm * giaTienKmDauTien;
  } else if (soKm > 1 && soKm <= 19) {
    tongTien = giaTienKmDauTien + (soKm - 1) * giaTienKm1Den19;
  } else {
    tongTien =
      giaTienKmDauTien + 18 * giaTienKm1Den19 + (soKm - 19) * giaTienKm19TroLen;
  }

  tongTien += Math.floor(thoiGianCho / 3) * giaTienThoiGianCho3Phut;

  // console.log(document.getElementById("divThanhTien"));
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = tongTien.toLocaleString(
    "vi-VN",
    { style: "currency", currency: "VND" }
  );
};

document.getElementById("btn_inHoaDon").onclick = () => {
  // Xóa nội dung cũ trước khi thêm thông tin mới
  document.getElementById("suDung1").innerHTML = "";
  document.getElementById("suDung2").innerHTML = "";
  document.getElementById("suDung3").innerHTML = "";
  document.getElementById("suDung4").innerHTML = "";
  document.getElementById("donGia1").innerHTML = "";
  document.getElementById("donGia2").innerHTML = "";
  document.getElementById("donGia3").innerHTML = "";
  document.getElementById("donGia4").innerHTML = "";
  document.getElementById("thanhTien1").innerHTML = "";
  document.getElementById("thanhTien2").innerHTML = "";
  document.getElementById("thanhTien3").innerHTML = "";
  document.getElementById("thanhTien4").innerHTML = "";
  document.getElementById("tongTienHoaDon").innerHTML = "";

  //   lấy dữ liệu lưu trữ (loại xe, số km, thời gian chờ)
  let soKm = document.getElementById("txt-km").value * 1;
  if (isNaN(soKm) || soKm <= 0) return;
  console.log(soKm);
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  let loaiXe = document.querySelector("input[type='radio']:checked").value;
  console.log(loaiXe);

  let giaTienKmDauTien = kiemTraGiaTienKmDauTien(loaiXe);
  console.log(giaTienKmDauTien);
  let giaTienKm1Den19 = kiemTraGiaTien1Den19(loaiXe);
  console.log(giaTienKm1Den19);
  let giaTienKm19TroLen = kiemTraGiaTien19TroLen(loaiXe);
  console.log(giaTienKm19TroLen);
  let giaTienThoiGianCho3Phut = kiemTraTienThoiGianCho3Phut(loaiXe);
  console.log(giaTienThoiGianCho3Phut);

  // DOM đến các thẻ cần thay đổi nội dung
  let suDung1Div = document.getElementById("suDung1");
  let suDung2Div = document.getElementById("suDung2");
  let suDung3Div = document.getElementById("suDung3");
  let suDung4Div = document.getElementById("suDung4");

  let donGia1Div = document.getElementById("donGia1");
  let donGia2Div = document.getElementById("donGia2");
  let donGia3Div = document.getElementById("donGia3");
  let donGia4Div = document.getElementById("donGia4");

  let thanhTien1Div = document.getElementById("thanhTien1");
  let thanhTien2Div = document.getElementById("thanhTien2");
  let thanhTien3Div = document.getElementById("thanhTien3");
  let thanhTien4Div = document.getElementById("thanhTien4");

  let tongTienHoaDonDiv = document.getElementById("tongTienHoaDon");

  let tienThoiGianCho = Math.floor(thoiGianCho / 3) * giaTienThoiGianCho3Phut;

  // KIỂM TRA ĐIỀU KIỆN NGƯỜI DÙNG NHẬP
  if (soKm <= 1 && soKm > 0) {
    suDung1Div.innerHTML = soKm;
    donGia1Div.innerHTML = giaTienKmDauTien.toLocaleString("vi");
    thanhTien1Div.innerHTML = (soKm * giaTienKmDauTien).toLocaleString("vi");
    tongTienHoaDonDiv.innerHTML = (
      soKm * giaTienKmDauTien +
      tienThoiGianCho
    ).toLocaleString("vi");
  } else if (soKm > 1 && soKm <= 19) {
    // DONG DAU TIEN
    suDung1Div.innerHTML = 1;
    donGia1Div.innerHTML = giaTienKmDauTien.toLocaleString("vi");
    thanhTien1Div.innerHTML = (1 * giaTienKmDauTien).toLocaleString("vi");
    // DONG THU 2
    suDung2Div.innerHTML = soKm - 1;
    donGia2Div.innerHTML = giaTienKm1Den19.toLocaleString("vi");
    thanhTien2Div.innerHTML = ((soKm - 1) * giaTienKm1Den19).toLocaleString(
      "vi"
    );
    tongTienHoaDonDiv.innerHTML = (
      (soKm - 1) * giaTienKm1Den19 +
      giaTienKmDauTien +
      tienThoiGianCho
    ).toLocaleString("vi", { style: "currency", currency: "VND" });
  } else {
    // DONG DAU TIEN
    suDung1Div.innerHTML = 1;
    donGia1Div.innerHTML = giaTienKmDauTien.toLocaleString("vi");
    thanhTien1Div.innerHTML = (1 * giaTienKmDauTien).toLocaleString("vi");
    // DONG THU 2
    suDung2Div.innerHTML = 18;
    donGia2Div.innerHTML = giaTienKm1Den19.toLocaleString("vi");
    thanhTien2Div.innerHTML = (18 * giaTienKm1Den19).toLocaleString("vi");

    // DONG THU 3
    suDung3Div.innerHTML = soKm - 19;
    donGia3Div.innerHTML = giaTienKm19TroLen.toLocaleString("vi");
    thanhTien3Div.innerHTML = ((soKm - 19) * giaTienKm19TroLen).toLocaleString(
      "vi"
    );
    tongTienHoaDonDiv.innerHTML = (
      giaTienKmDauTien +
      18 * giaTienKm1Den19 +
      (soKm - 19) * giaTienKm19TroLen +
      tienThoiGianCho
    ).toLocaleString("vi");
  }

  // KIEM TRA THOI GIAN CHO
  suDung4Div.innerHTML = `${thoiGianCho} phút`;
  donGia4Div.innerHTML = `${giaTienThoiGianCho3Phut.toLocaleString(
    "vi"
  )} <br/> mỗi 3 phút`;
  thanhTien4Div.innerHTML = (
    Math.floor(thoiGianCho / 3) * giaTienThoiGianCho3Phut
  ).toLocaleString("vi");
};

/*












*/
// Repo: BC68_HAI_Baitapbuoi??

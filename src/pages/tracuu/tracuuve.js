import React, { useState } from 'react';
import './tracuuve.css';
import ReCAPTCHA from "react-google-recaptcha";
import { database } from '../../API/firebaseconfig';
import { ref, get, child } from "firebase/database";

function TraCuuVe() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bookingCode, setBookingCode] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const [ticketInfo, setTicketInfo] = useState(null); // Trạng thái để lưu thông tin vé
<<<<<<< HEAD
  const [notFoundMessage, setNotFoundMessage] = useState(""); // Trạng thái để lưu thông báo không tìm thấy
=======
  const [notFoundMessage, setNotFoundMessage] = useState("");
>>>>>>> b08c117 (Cập nhật dự án lên GitHub)

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log("Captcha value:", value);
  };

  const handleLookup = async () => {
    setTicketInfo(null); // Xóa thông tin vé cũ mỗi khi tra cứu mới
    setNotFoundMessage(""); // Xóa thông báo không tìm thấy cũ
<<<<<<< HEAD
    if (!phoneNumber || !bookingCode) {
      alert("Vui lòng nhập số điện thoại và mã vé.");
      return;
    }
    if (!captchaValue) {
      alert("Vui lòng xác nhận Captcha.");
=======
    if (!phoneNumber) {
      setNotFoundMessage("Vui lòng nhập số điện thoại.");
      return;
    }
    if (!bookingCode) {
      setNotFoundMessage("Vui lòng nhập mã vé.");
      return;
    }
    if (!captchaValue) {
      setNotFoundMessage("Vui lòng xác nhận Captcha.");
>>>>>>> b08c117 (Cập nhật dự án lên GitHub)
      return;
    }

    try {
      const dbRef = ref(database);
      const snapshot = await get(child(dbRef, `bookings/${phoneNumber}/${bookingCode}`));

      if (snapshot.exists()) {
        const ticketData = snapshot.val();
<<<<<<< HEAD
        setTicketInfo(ticketData); // Lưu thông tin vé vào trạng thái để hiển thị
        setNotFoundMessage(""); // Đảm bảo không có thông báo lỗi khi tìm thấy vé
      } else {
        setTicketInfo(null);
        setNotFoundMessage("Thông tin vé không được tìm thấy. Vui lòng kiểm tra lại số điện thoại và mã vé."); // Hiển thị thông báo lỗi
=======
        setTicketInfo(ticketData); 
        setNotFoundMessage(""); 
      } else {
        setNotFoundMessage("Thông tin vé không được tìm thấy. Vui lòng kiểm tra lại số điện thoại và mã vé.");
        setTicketInfo(null);
>>>>>>> b08c117 (Cập nhật dự án lên GitHub)
      }
    } catch (error) {
      console.error("Lỗi khi tra cứu dữ liệu từ Firebase:", error);
      alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
    }
  };

  return (
<<<<<<< HEAD
    <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto", padding: "0 20px" }}>
      <h2>TRA CỨU THÔNG TIN ĐẶT VÉ</h2>
      <input 
=======
    <div
      style={{
        textAlign: "center",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "0 20px",
      }}
    >
      <h2>TRA CỨU THÔNG TIN ĐẶT VÉ</h2>
      <input
>>>>>>> b08c117 (Cập nhật dự án lên GitHub)
        type="text"
        placeholder="Vui lòng nhập số điện thoại"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
<<<<<<< HEAD
        className='input-sdt'
        style={{ width: "100%", padding: "10px", marginBottom: "10px"}}
=======
        className="input-sdt"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
>>>>>>> b08c117 (Cập nhật dự án lên GitHub)
      />
      <input
        type="text"
        placeholder="Vui lòng nhập mã vé"
        value={bookingCode}
        onChange={(e) => setBookingCode(e.target.value)}
<<<<<<< HEAD
        className='input-idve'
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <ReCAPTCHA
        className='recapcha'
        sitekey="6LdS-nQqAAAAAJVcHK0HtBwpCCasvZkEmMv5Zwk7"
        onChange={handleCaptchaChange}
      />
      <button onClick={handleLookup}
=======
        className="input-idve"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <ReCAPTCHA
        className="recapcha"
        sitekey="6LdS-nQqAAAAAJVcHK0HtBwpCCasvZkEmMv5Zwk7"
        onChange={handleCaptchaChange}
      />
      <button
        onClick={handleLookup}
        className="btn-search"
>>>>>>> b08c117 (Cập nhật dự án lên GitHub)
        style={{
          marginTop: "20px",
          padding: "12px 50px",
          backgroundColor: "#fdece5",
          border: "none",
          borderRadius: "30px",
          cursor: "pointer",
          color: "#f25c27",
          fontWeight: "bold",
          fontSize: "16px",
          textAlign: "center",
          marginBottom: "20px",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        Tra cứu
      </button>
<<<<<<< HEAD
      
=======

>>>>>>> b08c117 (Cập nhật dự án lên GitHub)
      {/* Hiển thị thông báo không tìm thấy nếu vé không tồn tại */}
      {notFoundMessage && (
        <p style={{ color: "red", marginTop: "10px" }}>{notFoundMessage}</p>
      )}

      {/* Hiển thị thông tin vé theo thứ tự yêu cầu nếu tìm thấy */}
      {ticketInfo && (
<<<<<<< HEAD
        <div className='thongtinve' style={{
          padding: "20px",
          marginBottom: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(100px, 1fr))",
          gap: "10px",
          textAlign: "center",
        }}>
          <div style={{ padding: "10px" }}>
            <strong>Ngày:</strong> <p>{ticketInfo.date}</p>
          </div>
          <div style={{ padding: "10px" }}>
            <strong>Giờ đi:</strong> <p>{ticketInfo.hour}</p>
          </div>
          <div style={{ padding: "10px" }}>
            <strong>Từ:</strong> <p>{ticketInfo.from}</p>
          </div>
          <div style={{ padding: "10px" }}>
            <strong>Đến:</strong> <p>{ticketInfo.to}</p>
          </div>
          <div style={{ padding: "10px" }}>
            <strong>Biển số xe:</strong> <p>{ticketInfo.idxe}</p>
          </div>
          <div style={{ padding: "10px" }}>
            <strong>Ghế:</strong> <p>{ticketInfo.ghe}</p>
          </div>
          <div style={{ padding: "10px" }}>
            <strong>Hành khách:</strong> <p>{ticketInfo.name}</p>
          </div>
          <div style={{ padding: "10px" }}>
            <strong>Giá:</strong> <p>{ticketInfo.price} VND</p>
          </div>
        </div>
=======
        <>
          <p style={{ color: "black", fontSize: "24px", fontWeight: "600" }}>
            Thông tin vé của bạn
          </p>
          <div
            className="thongtinve"
            style={{
              padding: "20px",
              marginBottom: "20px",
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(100px, 1fr))",
              gap: "10px",
              textAlign: "center",
            }}
          >
            <div style={{ padding: "10px" }}>
              <strong>Ngày:</strong> <p>{ticketInfo.date}</p>
            </div>
            <div style={{ padding: "10px" }}>
              <strong>Giờ đi:</strong> <p>{ticketInfo.hour}</p>
            </div>
            <div style={{ padding: "10px" }}>
              <strong>Từ:</strong> <p>{ticketInfo.from}</p>
            </div>
            <div style={{ padding: "10px" }}>
              <strong>Đến:</strong> <p>{ticketInfo.to}</p>
            </div>
            <div style={{ padding: "10px" }}>
              <strong>Biển số xe:</strong> <p>{ticketInfo.idxe}</p>
            </div>
            <div style={{ padding: "10px" }}>
              <strong>Ghế:</strong> <p>{ticketInfo.ghe}</p>
            </div>
            <div style={{ padding: "10px" }}>
              <strong>Hành khách:</strong> <p>{ticketInfo.name}</p>
            </div>
            <div style={{ padding: "10px" }}>
              <strong>Giá:</strong>
              <p>{ticketInfo.price / 1000}.000 VND</p>
            </div>
          </div>
        </>
>>>>>>> b08c117 (Cập nhật dự án lên GitHub)
      )}
    </div>
  );
}

export default TraCuuVe;

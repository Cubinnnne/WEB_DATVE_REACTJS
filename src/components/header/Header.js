import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { auth } from '../../firebase'; // Import Firebase auth
import '../../components/header/Header.css';
import vnFlag from '../../assets/images/logovn.png';
import ukFlag from '../../assets/images/logouk.png';
import appIcon from '../../assets/images/app.svg';
import userIcon from '../../assets/images/user.png';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAppDropdownOpen, setIsAppDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('VI');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && user.phoneNumber) {
        const formattedPhoneNumber = user.phoneNumber.startsWith('+84')
          ? user.phoneNumber.replace('+84', '0')
          : user.phoneNumber;
          
        setPhoneNumber(formattedPhoneNumber);
        setIsLoggedIn(true);
      } else {
        setPhoneNumber(null);
        setIsLoggedIn(false);
      }
    });
  
    return () => unsubscribe();
  }, []);
  

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsLanguageDropdownOpen(false); 
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    setIsDropdownOpen(false); 
  };

  const toggleAppDropdown = () => {
    setIsAppDropdownOpen(!isAppDropdownOpen);
  };

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        setIsLoggedIn(false);
        setPhoneNumber(null); 
        navigate('/'); 
      })
      .catch((error) => console.error('Lỗi đăng xuất:', error));
  };

  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="navbar-left">
          <div className="language-selector">
            <div className="selected-language" onClick={toggleLanguageDropdown}>
              <img
<<<<<<< HEAD
                src={selectedLanguage === 'VI' ? vnFlag : ukFlag}
=======
                src={selectedLanguage === "VI" ? vnFlag : ukFlag}
>>>>>>> b08c117 (Cập nhật dự án lên GitHub)
                alt="Language Flag"
                className="flag-icon"
              />
              <span>{selectedLanguage}</span>
              <span className="dropdown-icon">▼</span>
            </div>
            {isLanguageDropdownOpen && (
              <ul className="language-dropdown">
<<<<<<< HEAD
                <li onClick={() => changeLanguage('VI')}>
                  <img src={vnFlag} alt="Vietnam Flag" className="flag-icon" />
                  <span>VI</span>
                </li>
                <li onClick={() => changeLanguage('EN')}>
=======
                <li onClick={() => changeLanguage("VI")}>
                  <img src={vnFlag} alt="Vietnam Flag" className="flag-icon" />
                  <span>VI</span>
                </li>
                <li onClick={() => changeLanguage("EN")}>
>>>>>>> b08c117 (Cập nhật dự án lên GitHub)
                  <img src={ukFlag} alt="UK Flag" className="flag-icon" />
                  <span>EN</span>
                </li>
              </ul>
            )}
          </div>

          <div className="app-download">
            <div className="selected-app" onClick={toggleAppDropdown}>
              <img src={appIcon} alt="Download Icon" className="icon" />
              <span>Tải ứng dụng</span>
              <span className="dropdown-icon">▼</span>
            </div>
            {isAppDropdownOpen && (
              <ul className="app-dropdown">
<<<<<<< HEAD
                <li><span>ANDROID</span></li>
                <li><span>IOS</span></li>
=======
                <li>
                  <span>ANDROID</span>
                </li>
                <li>
                  <span>IOS</span>
                </li>
>>>>>>> b08c117 (Cập nhật dự án lên GitHub)
              </ul>
            )}
          </div>
        </div>

        <div className="navbar-right-2">
          {isLoggedIn ? (
            <div className="user-info-container" onClick={toggleDropdown}>
<<<<<<< HEAD
            <img src={userIcon} alt="User Icon" className="icon" />
=======
              <img src={userIcon} alt="User Icon" className="icon" />
>>>>>>> b08c117 (Cập nhật dự án lên GitHub)
              <div className="user-info">
                <span>{phoneNumber} ▼</span>
              </div>
              {isDropdownOpen && (
                <ul className="user-dropdown">
<<<<<<< HEAD
                  <li onClick={handleLogout}>
                    <span>Đăng xuất</span>
=======
                  <li>
                    <span onClick={handleLogout} className="btn-logout">
                      Đăng xuất
                    </span>
>>>>>>> b08c117 (Cập nhật dự án lên GitHub)
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <NavLink to="/login" className="login-button">
              <img src={userIcon} alt="User Icon" className="icon" />
              <span>Đăng nhập</span>
            </NavLink>
          )}
        </div>
      </div>

      <div className="navbar-menu">
        <ul>
<<<<<<< HEAD
          <li><NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>TRANG CHỦ</NavLink></li>
          <li><NavLink to="/schedule" className={({ isActive }) => (isActive ? "active-link" : "")}>LỊCH TRÌNH</NavLink></li>
          <li><NavLink to="/rescueticket" className={({ isActive }) => (isActive ? "active-link" : "")}>TRA CỨU VÉ</NavLink></li>
          <li><NavLink to="/tintuc" className={({ isActive }) => (isActive ? "active-link" : "")}>TIN TỨC</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>LIÊN HỆ</NavLink></li>
          <li><NavLink to="/aboutus" className={({ isActive }) => (isActive ? "active-link" : "")}>VỀ CHÚNG TÔI</NavLink></li>
=======
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              TRANG CHỦ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/schedule"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              LỊCH TRÌNH
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rescueticket"
              className={({ isActive }) =>
                `rescueticket-link ${isActive ? "active-link" : ""}`
              }
            >
              TRA CỨU VÉ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tintuc"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              TIN TỨC
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              LIÊN HỆ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              VỀ CHÚNG TÔI
            </NavLink>
          </li>
>>>>>>> b08c117 (Cập nhật dự án lên GitHub)
        </ul>
      </div>
    </div>
  );
}

export default Header;

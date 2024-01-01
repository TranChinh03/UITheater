import styles from './header.module.scss';
import {SVG_Human, SVG_LOGO, SVG_Search} from '../../assets/icons';
import {NavLink} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import SignIn from '../SignInModal/SignIn';
import axios from 'axios';
import {useEffect, useState} from 'react';
import getLastWord from '../../store/getLastWord';
import { Select } from "antd";
import {IM_EN_Flag, IM_VN_Flag} from "../../assets/imgs"
import { useTranslation } from 'react-i18next';



const Header = () => {
  const { t, i18n } = useTranslation();
  const options = [
    { image: IM_VN_Flag, title: "VI" },
    { image: IM_EN_Flag, title: "EN" }]

  const { Option } = Select;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState(localStorage.language);
  const navigate = useNavigate();
  const [response, setResponse] = useState('');
  const Token = localStorage.getItem('Token');
  const showModal = () => {
    console.log('1');
    setIsModalOpen(true);
  };
  const handleOk = () => {
    console.log('2');
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    console.log('3');
    setIsModalOpen(false);
  };
  const isLogin = () => {
    if (Token === null) {
      return false;
    }
    return true;
  };
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://uitlogachcu.onrender.com/me',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Token,
    },
  };
  const Logout = () => {
    localStorage.removeItem('Token');
    navigate('/');
  };
  useEffect(() => {
    axios
      .request(config)
      .then(response => {
        console.log(response.data.name);
        setResponse(response.data.name);
      })
      .catch(error => {
        console.log(error);
      });
  }, [isLogin]);

  return (
    <div className={styles.headerContainer}>
      <img className={styles.headerLogo} src={SVG_LOGO} alt="Logo" />
      <div className={styles.headerOthers}>
        <div className={styles.searchAndSignInContainer}>
          <Select
                style={{ width: 200, marginRight: 20 }}
                placeholder="Choose Language"
                value={language}
                onChange={
                  (e) =>
                  {
                    setLanguage(e);
                    i18n.changeLanguage(e);
                    localStorage.setItem('language', e);
                  } 
                }
              >
                {options.map((option, index) => (
                  <Option key={index} value={option.title}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <div>{option.title}</div>
                      <img
                        src={option.image}
                        alt="Flag"
                        style={{ width: "30px", height: "20px" }}
                      />
                    </div>
                  </Option>
                ))}
              </Select>

          {!isLogin() ? (
            <div className={styles.signIn} onClick={showModal} isDefault={true}>
              <div className={styles.signInText}>{t('login.login')}</div>
            </div>
          ) : (
            <div class={styles.dropdown}>
              <button
                style={{backgroundColor: 'transparent', border: 'none'}}
                className={styles.signIn}
                onClick={() => {
                  navigate('/me');
                }}>
                <img className={styles.human} src={SVG_Human} alt="avt" />
                <div className={styles.signInText}>{getLastWord(response)}</div>
              </button>
              <div style={{width: '100%', height: '0.5vw'}} />
              <div class={styles.dropdownContent}>
                <a href="\me">Information</a>
                <a href="\changepassword">Password</a>
                <a href="#" onClick={Logout}>
                  Log Out
                </a>
              </div>
            </div>
            // Code cho sidebarDrawer
          )}
        </div>
        <div className={styles.NavBar}>
          <NavLink to="/" exact={true}>
            <div className={styles.NavBarText}>Home</div>
          </NavLink>
          <NavLink to="/movies" className={styles.BetweenNav}>
            <div className={styles.NavBarText}>Movies</div>
          </NavLink>
          <NavLink to="/schedule" className={styles.BetweenNav}>
            <div className={styles.NavBarText}>Schedule</div>
          </NavLink>
          <NavLink to="/about" className={styles.EndNav}>
            <div className={styles.NavBarText}>About</div>
          </NavLink>
        </div>
      </div>
      <SignIn isModalOpen={isModalOpen} handleCancel={handleCancel} />
    </div>
  );
};

export default Header;

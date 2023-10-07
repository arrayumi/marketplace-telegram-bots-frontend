import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Close } from '../../images/close-icon.svg';
import { ReactComponent as Eye } from '../../images/eye1.svg';
import AuthForm from '../AuthForm/AuthForm';
import AuthInput from '../AuthInput/AuthInput';
import Login from '../Login/Login';
import Register from '../Register/Register';
import './AuthModal.css';

const AuthModal = ({ onClose, isLogin, setIsLogin }) => {
  const [userType, setUserType] = useState('Покупатель');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Validation

  const validateEmail = (email) => {
    email = email.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.length < 7 || email.length > 129)
      return 'Invalid length for email.';
    if (!emailRegex.test(email)) return 'Email format is invalid.';
    if (email.split('@').length > 2)
      return "Email must contain only one '@' symbol.";
    return '';
  };

  const validatePassword = (pass) => {
    pass = pass.trim();
    const passRegex = /^[a-zA-Z0-9!#$%.]*$/;
    if (pass.length < 8 || pass.length > 40)
      return 'Invalid length for password.';
    if (pass === email) return 'Email and password cannot be the same.';
    if (!(/[a-zA-Z]/.test(pass) && /[0-9]/.test(pass)))
      return 'Password must contain both numbers and letters.';
    if (!passRegex.test(pass)) return 'Invalid password format.';
    return '';
  };

  const validateConfirmPassword = (confirmPass) => {
    confirmPass = confirmPass.trim();
    if (confirmPass !== password) return 'Passwords do not match.';
    return validatePassword(confirmPass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      userType,
      email,
      password,
      rememberMe,
    };

    if (!isLogin) {
      formData.confirmPassword = confirmPassword;
    }

    // Отправить formData на сервер
  };

  return (
    <div className='modal__container'>
      <div className='modal__content'>
        <h2 className='modal__title'>{isLogin ? 'Вход' : 'Регистрация'}</h2>
        <Close className='modal__close' onClick={onClose} />
        {isLogin ? <Login isLogin={isLogin} /> : <Register isLogin={isLogin} />}
        {isLogin ? (
          <>
            <Link
              className='modal__span modal__span_type_reset-password'
              to='/reset-password'
            >
              Забыли пароль?
            </Link>
            <div className='modal__toggle-form'>
              <span className='modal__span'>
                Нет аккаунта?{' '}
                <span
                  className='modal__span modal__span_link'
                  onClick={() => setIsLogin(false)}
                >
                  Зарегистрироваться
                </span>
              </span>
            </div>
          </>
        ) : (
          <div className='modal__toggle-form'>
            <span className='modal__span'>
              Есть аккаунт?{' '}
              <span
                className='modal__span modal__span_link'
                onClick={() => setIsLogin(true)}
              >
                Войти
              </span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;

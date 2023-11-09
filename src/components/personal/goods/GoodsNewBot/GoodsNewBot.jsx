/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './GoodsNewBot.css';
import info from '../../../../images/Help.svg';
import plus from '../../../../images/ic_plus-16.svg';
import { CATEGORY_OPTIONS } from '../../../../utils/constants';
import { getSearchFormData } from '../../../../store';
import { setCategories } from '../../../../store/searchFormDataSlice';
import PopupCategory from '../../../popups/PopupCategory/PopupCategory';
import PopupName from '../../../popups/PopupName/PopupName';
import PopupDescription from '../../../popups/PopupDescription/PopupDescription';
import PopupFunction from '../../../popups/PopupFunction/PopupFunction';
import PopupPhoto from '../../../popups/PopupPhoto/PopupPhoto';
import PopupVideo from '../../../popups/PopupVideo/PopupVideo';
import PopupPriceBot from '../../../popups/PopupPrice/PopupPriceBot';
import { useFormAndValid } from '../../../../hooks/useFormAndValid';
import getBase64 from '../../../../utils/getBase64';

const GoodsNewBot = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(getSearchFormData);
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    dispatch(setCategories({ [id]: checked }));
  };
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);
  const [showNamePopup, setShowNamePopup] = useState(false);
  const [showDescriptionPopup, setShowDescriptionPopup] = useState(false);
  const [showFunctionPopup, setShowFunctionPopup] = useState(false);
  const [showPricePopup, setShowPricePopup] = useState(false);
  const [showPhotoPopup, setShowPhotoPopup] = useState(false);
  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const { formValue, setFormValue, handleChange, inputCount, isValid, errors } = useFormAndValid({});
  const [isFirstFunctionShown, setIsFirstFunctionShown] = useState(false);
  const [isSecondFunctionShown, setIsSecondFunctionShown] = useState(false);
  const [isThirdFunctionShown, setIsThirdFunctionShown] = useState(false);
  const [isFourthFunctionShown, setIsFourthFunctionShown] = useState(false);

  useEffect(() => {
    setFormValue('');
  }, [setFormValue]);

  function handleCategoryPopupClick() {
    setShowCategoryPopup(true);
  }

  function handleNamePopupClick() {
    setShowNamePopup(true);
  }

  function handleDescriptionPopupClick() {
    setShowDescriptionPopup(true);
  }

  function handleFunctionPopupClick() {
    setShowFunctionPopup(true);
  }

  function handlePricePopupClick() {
    setShowPricePopup(true);
  }

  function handlePhotoPopupClick() {
    setShowPhotoPopup(true);
  }

  function handleVideoPopupClick() {
    setShowVideoPopup(true);
  }

  function closeAllPopups() {
    setShowCategoryPopup(false);
    setShowNamePopup(false);
    setShowDescriptionPopup(false);
    setShowFunctionPopup(false);
    setShowPricePopup(false);
    setShowPhotoPopup(false);
    setShowVideoPopup(false);
  }

  function handleFirstFunctionClick() {
    setIsFirstFunctionShown(!isFirstFunctionShown);
  }

  function handleSecondFunctionClick() {
    setIsSecondFunctionShown(!isSecondFunctionShown);
  }

  function handleThirdFunctionClick() {
    setIsThirdFunctionShown(!isThirdFunctionShown);
  }

  function handleFourthFunctionClick() {
    setIsFourthFunctionShown(!isFourthFunctionShown);
  }

  return (
    <section className='new-bot'>
      <form className='new-bot__form'>
        <div className='new-bot__row'>
          <h3 className='new-bot__title'>Категория бота</h3>
          <img
            className='new-bot__icon'
            src={info}
            alt='информация'
            onClick={handleCategoryPopupClick}
            id='category'
          />
        </div>
        {CATEGORY_OPTIONS.map((input, i) => {
          const { id, labelName } = input;
          return (
            <div key={i} className='new-bot__input-container'>
              <input
                className='new-bot__input-radio'
                type='radio'
                id={id}
                checked={categories[id]}
                onChange={handleCheckboxChange}
              ></input>
              <label htmlFor={id} className='new-bot__label-radio'>
                {labelName}
              </label>
            </div>
          );
        })}
        <div className='new-bot__row'>
          <h3 className='new-bot__title'>Название бота</h3>
          <img
            className='new-bot__icon'
            src={info}
            alt='информация'
            onClick={handleNamePopupClick}
          />
        </div>
        <input
          className='new-bot__name'
          type='text'
          id='name-input'
          name='name'
          value={formValue.name || ''}
          onChange={handleChange}
          placeholder='Название может содержать от 20 до 70 символов. Только строчные буквы.'
          autoComplete='off'
          minLength={20}
          maxLength={70}
          required
        />
        <div className='new-bot__span-row'>
          <span className={`new-bot__name-error name-input-error ${isValid ? '' : 'new-bot__error_visible'}`}>
            {errors.name}
          </span>
          <span className='new-bot__span'>{`${inputCount}/70`}</span>
        </div>
        <div className='new-bot__row new-bot__margin_type_twelve'>
          <h3 className='new-bot__title'>Описание бота</h3>
          <img
            className='new-bot__icon'
            src={info}
            alt='информация'
            onClick={handleDescriptionPopupClick}
          />
        </div>
        <textarea
          className='new-bot__description'
          type='text'
          id='description-input'
          name='description'
          value={formValue.description || ''}
          onChange={handleChange}
          placeholder='Описание может содержать от 50 до 500 символов. Только строчные буквы.'
          autoComplete='off'
          minLength={50}
          maxLength={500}
          required
        />
        <div className='new-bot__span-row'>
          <span className={`new-bot__description-error description-input-error ${isValid ? '' : 'new-bot__error_visible'}`}>
            {errors.description}
          </span>
          <span className='new-bot__span'>{`${inputCount}/500`}</span>
        </div>
        <div className='new-bot__row new-bot__margin_type_twelve'>
          <h3 className='new-bot__title'>Функции</h3>
          <img
            className='new-bot__icon'
            src={info}
            alt='информация'
            onClick={handleFunctionPopupClick}
          />
        </div>
        <input
          className='new-bot__function'
          type='text'
          id='function-input'
          name='function'
          value={formValue.function || ''}
          onChange={handleChange}
          placeholder='Описание функции может содержать до 200 символов. Только строчные буквы.'
          autoComplete='off'
          maxLength={200}
        />
        <div className='new-bot__span-row'>
          <span className={`new-bot__function-error function-input-error ${isValid ? '' : 'new-bot__error_visible'}`}>
            {errors.function}
          </span>
          <span className='new-bot__span'>{`${inputCount}/200`}</span>
        </div>
        {!isFirstFunctionShown && (
          <button
            className='new-bot__button-add new-bot__button-add_type_function'
            type='button'
            onClick={handleFirstFunctionClick}
            aria-label='Добавить функцию'
          >
            <img className='new-bot__icon-16' src={plus} alt='плюс добавить' />
            <p className='new-bot__add'>Добавить</p>
          </button>
        )}
        {isFirstFunctionShown && (
          <>
            <input
              className='new-bot__function'
              type='text'
              id='function'
              name='function'
              value={formValue.function || ''}
              onChange={handleChange}
              placeholder='Описание функции может содержать до 200 символов. Только строчные буквы.'
              autoComplete='off'
              maxLength={200}
            />
            <span className='new-bot__span'>{`${inputCount}/200`}</span>
            {!isSecondFunctionShown && (
            <button
              className='new-bot__button-add new-bot__button-add_type_function'
              type='button'
              onClick={handleSecondFunctionClick}
              aria-label='Добавить функцию'
            >
              <img className='new-bot__icon-16' src={plus} alt='плюс добавить' />
              <p className='new-bot__add'>Добавить</p>
            </button>
            )}
          </>
        )}
        {isSecondFunctionShown && (
          <>
            <input
              className='new-bot__function'
              type='text'
              id='function'
              name='function'
              value={formValue.function || ''}
              onChange={handleChange}
              placeholder='Описание функции может содержать до 200 символов. Только строчные буквы.'
              autoComplete='off'
              maxLength={200}
            />
            <span className='new-bot__span'>{`${inputCount}/200`}</span>
            {!isThirdFunctionShown && (
            <button
              className='new-bot__button-add new-bot__button-add_type_function'
              type='button'
              onClick={handleThirdFunctionClick}
              aria-label='Добавить функцию'
            >
              <img className='new-bot__icon-16' src={plus} alt='плюс добавить' />
              <p className='new-bot__add'>Добавить</p>
            </button>
            )}
          </>
        )}
        {isThirdFunctionShown && (
          <>
            <input
              className='new-bot__function'
              type='text'
              id='function'
              name='function'
              value={formValue.function || ''}
              onChange={handleChange}
              placeholder='Описание функции может содержать до 200 символов. Только строчные буквы.'
              autoComplete='off'
              maxLength={200}
            />
            <span className='new-bot__span'>{`${inputCount}/200`}</span>
            {!isFourthFunctionShown && (
            <button
              className='new-bot__button-add new-bot__button-add_type_function'
              type='button'
              onClick={handleFourthFunctionClick}
              aria-label='Добавить функцию'
            >
              <img className='new-bot__icon-16' src={plus} alt='плюс добавить' />
              <p className='new-bot__add'>Добавить</p>
            </button>
            )}
          </>
        )}
        {isFourthFunctionShown && (
          <>
            <input
              className='new-bot__function'
              type='text'
              id='function'
              name='function'
              value={formValue.function || ''}
              onChange={handleChange}
              placeholder='Описание функции может содержать до 200 символов. Только строчные буквы.'
              autoComplete='off'
              maxLength={200}
            />
            <span className='new-bot__span'>{`${inputCount}/200`}</span>
          </>
        )}
        <div className='new-bot__row'>
          <h3 className='new-bot__title'>Цена</h3>
          <img
            className='new-bot__icon'
            src={info}
            alt='информация'
            onClick={handlePricePopupClick}
          />
        </div>
        <input
          className='new-bot__price'
          type='text'
          id='price-input'
          name='price'
          value={formValue.price || ''}
          onChange={handleChange}
          placeholder='0 ₽'
          autoComplete='off'
          required
        />
        <div className='new-bot__span-row'>
          <span className={`new-bot__price-error price-input-error ${isValid ? '' : 'new-bot__error_visible'}`}>
            {errors.price}
          </span>
        </div>
        <div className='new-bot__row new-bot__margin_type_thirty'>
          <h3 className='new-bot__title'>Фото</h3>
          <img
            className='new-bot__icon'
            src={info}
            alt='информация'
            onClick={handlePhotoPopupClick}
          />
        </div>
        <form>
          <input
            className="new-bot__input-photo"
            type="file"
            id="image-file"
            onChange={getBase64}
          />
          <label className="new-bot__button-add new-bot__button-add_type_photo" for="image-file">
            <img className='new-bot__icon-16' src={plus} alt='плюс добавить' />
            <p className='new-bot__add'>Добавить</p>
          </label>
        </form>
        <div className='new-bot__row'>
          <h3 className='new-bot__title'>Видео</h3>
          <img
            className='new-bot__icon'
            src={info}
            alt='информация'
            onClick={handleVideoPopupClick}
          />
        </div>
        <input
          className='new-bot__video'
          type='url'
          id='video'
          name='video'
          value={formValue.video || ''}
          onChange={handleChange}
          placeholder='Загрузите ссылку вида https://www.youtube.com/ABCDEF'
          autoComplete='off'
        />
        <div className='new-bot__buttons-row'>
          <button
            className='new-bot__save-button'
            type='button'
            aria-label='Добавить товар'
          >
            Сохранить
          </button>
          <button
            className='new-bot__cancel-button'
            type='button'
            aria-label='Добавить товар'
          >
            Отменить
          </button>
        </div>
      </form>
      <PopupCategory isOpen={showCategoryPopup} onClose={closeAllPopups} />
      <PopupName isOpen={showNamePopup} onClose={closeAllPopups} />
      <PopupDescription isOpen={showDescriptionPopup} onClose={closeAllPopups} />
      <PopupFunction isOpen={showFunctionPopup} onClose={closeAllPopups} />
      <PopupPhoto isOpen={showPhotoPopup} onClose={closeAllPopups} />
      <PopupVideo isOpen={showVideoPopup} onClose={closeAllPopups} />
      <PopupPriceBot isOpen={showPricePopup} onClose={closeAllPopups} />
    </section>
  );
};

export default GoodsNewBot;
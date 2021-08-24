import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  fetchAwards,
  orderAward,
} from '../../../redux/awards/awardsOperations';
import {
  getAllAwards,
  getLoading,
} from '../../../redux/awards/awardsSelectors';
import sprite from './sprite.svg';
import styles from './awardsList.module.css';
import AwardsSubmitButton from '../awardsSubmitButton/AwardsSubmitButton';
import Loader from 'react-loader-spinner';
import CongratsModal from '../CongratsModal/CongratsModal';
// import {getUserBalance} from "../../../redux/auth/authSelectors"

export default function AwardsList() {
  const dispatch = useDispatch();
  const isLoadingAwards = useSelector(getLoading);
  const awards = useSelector(getAllAwards);
  // const totalBalance = useSelector(getUserBalance);

  const [gifts, setGifts] = useState(awards);
  const [showModal, setShowModal] = useState(false);

  const onFetchAwards = () => dispatch(fetchAwards());
  useEffect(() => {
    onFetchAwards();
  }, []);

  useEffect(() => {
    setGifts(awards);
  }, [awards]);

  // useEffect(() => {
  //   showModal && dispatch(orderAward());
  //   return;
  //   // dispatch(orderAward());
  // }, [showModal, dispatch]);

  const onClose = () => {
    setShowModal(false);
  };

  const { t } = useTranslation();

  const onHandleSubmit = () => {
    setShowModal(true);
    const data = gifts
      .filter(gift => gift.isSelected)
      .map(gift => Number(gift.id));
    dispatch(
      orderAward({
        giftIds: data,
      }),
    );
  };

  const setSelected = event => {
    const { name } = event.target;
    setGifts(prev =>
      prev.map(gift =>
        Number(gift.id) === Number(name)
          ? { ...gift, isSelected: !gift.isSelected }
          : gift,
      ),
    );
  };

  return (
    <div className={styles.Awards__Container}>
      {isLoadingAwards && (
        <Loader type="ThreeDots" color="#ffbc33" height={70} width={70} />
      )}
      <ul className={styles.Awards__List}>
        {gifts.map(award => (
          <li className={styles.Awards__ListItem} key={award.id}>
            <div className={styles.Awards__ListItemWrapper}>
              <img
                src={award.imageUrl}
                alt={award.title}
                className={styles.Awards__ListImage}
              />
              <div className={styles.Awards__ListFooter}>
                <h3 className={styles.Awards__ListName}>{award.title}</h3>
                <div className={styles.Awards__ListTextWrapper}>
                  <p className={styles.Awards__ListText}>
                    {award.price} {t('POINTS')}
                  </p>
                </div>
                <div className={styles.Switch}>
                  <svg className={styles.Switch__iconCheck}>
                    <use
                      href={sprite + '#icon-check'}
                      aria-label="Иконка галочка"
                      width="10"
                      height="8"
                    ></use>
                  </svg>
                  <div className={styles.Switch__control}>
                    <input
                      className={styles.Switch__toggle}
                      type="checkbox"
                      name={award.id}
                      id={award.id}
                      aria-label="Переключить между выбрано и не выбрано"
                      onChange={setSelected}
                    />
                    <label
                      aria-hidden="true"
                      className={styles.Switch__track}
                      htmlFor={award.id}
                    ></label>
                    <div
                      aria-hidden="true"
                      className={styles.Switch__marker}
                    ></div>
                  </div>
                  <svg className={styles.Switch__iconSign}>
                    <use
                      href={sprite + '#icon-sign'}
                      role="img"
                      aria-label="Иконка внимание"
                      width="5"
                      heigth="18"
                    ></use>
                  </svg>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <AwardsSubmitButton onHandleSubmit={onHandleSubmit} />
      {showModal && <CongratsModal onClose={onClose} />}
      <marquee
        className={styles.running__string}
        direction="left"
        behavior="scroll"
      >
        {t('Take your')} <span className={styles.presents}>{t('GIFTS')} </span>
        {t('now')}
      </marquee>
    </div>
  );
}

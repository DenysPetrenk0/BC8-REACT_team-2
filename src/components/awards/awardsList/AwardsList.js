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

// =============================================================
// import React, { Component } from 'react';
// import sprite from './sprite.svg';
// import axios from 'axios';
// import styles from './awardsList.module.css';
// import fetchAwards from '../../../redux/awards/awardsOperations';
// import { connect } from 'react-redux';
// import {
//   getAllAwards,
//   getLoading,
// } from '../../../redux/awards/awardsSelectors.js';

// class AwardsList extends Component {
//   state = {
//     awards: [],
//     isLoading: false,
//   };

//   async componentDidMount() {
//     this.setState({ isLoading: true });
//     try {
//       const data = await axios.get('https://kidslikev1.herokuapp.com/gift', {
//         headers: {
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTFkMTNlMTU2MjBjZDAwMTdlOGU0OWEiLCJzaWQiOiI2MTFkMTNlMTU2MjBjZDAwMTdlOGU0OWIiLCJpYXQiOjE2MjkyOTU1ODV9.dri2dzlsnubjeNl6DKWKQR87cVihgWaVRrfxODq5QI0`,
//         },
//       });
//       this.setState({ awards: data.data.ruGifts, isLoading: false });
//       // console.log(`data`, data.data.ruGifts);
//     } catch (error) {
//       throw new Error(error);
//     }
//   }

//   render() {
//     const awards = this.state.awards;
//     // console.log(`awards`, awards);
//     return (
//       <div className={styles.Awards__Container}>
//         <ul className={styles.Awards__List}>
//           {awards.map(award => (
//             <li className={styles.Awards__ListItem} key={award.id}>
//               <div className={styles.Awards__ListItemWrapper}>
//                 <img
//                   src={award.imageUrl}
//                   alt={award.title}
//                   className={styles.Awards__ListImage}
//                 />
//                 <div className={styles.Awards__ListFooter}>
//                   <h3 className={styles.Awards__ListName}>{award.title}</h3>
//                   <div className={styles.Awards__ListTextWrapper}>
//                     <p className={styles.Awards__ListText}>
//                       {award.price} БАЛЛОВ
//                     </p>
//                   </div>
//                   <div className={styles.Switch}>
//                     <svg className={styles.Switch__iconCheck}>
//                       <use
//                         href={sprite + '#icon-check'}
//                         aria-label="Иконка галочка"
//                         width="10"
//                         height="8"
//                       ></use>
//                     </svg>
//                     <div className={styles.Switch__control}>
//                       <input
//                         className={styles.Switch__toggle}
//                         type="checkbox"
//                         name="switch-toggle"
//                         id={award.id}
//                         aria-label="Переключить между выбрано и не выбрано"
//                       />
//                       <label
//                         aria-hidden="true"
//                         className={styles.Switch__track}
//                         for={award.id}
//                       ></label>
//                       <div
//                         aria-hidden="true"
//                         className={styles.Switch__marker}
//                       ></div>
//                     </div>
//                     <svg className={styles.Switch__iconSign}>
//                       <use
//                         href={sprite + '#icon-sign'}
//                         role="img"
//                         aria-label="Иконка внимание"
//                         width="5"
//                         heigth="18"
//                       ></use>
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default AwardsList;

// const mapStateToProps = state => ({
//   awards: getAllAwards(state),
//   isLoadingAwards: getLoading(state),
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchAllAwards: () => dispatch(fetchAwards()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(AwardsList);

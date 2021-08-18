import React, { Component } from 'react';
// import awards from '../awardsOld.json';
import axios from 'axios';
import styles from './awardsList.module.css';
// import fetchAwards from '../../../redux/awards/awardsOperations';
// import { connect } from 'react-redux';
// import {
//   getAllAwards,
//   getLoading,
// } from '../../../redux/awards/awardsSelectors.js';

class AwardsList extends Component {
  state = {
    awards: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const data = await axios.get('https://kidslikev1.herokuapp.com/gift', {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTFkMTNlMTU2MjBjZDAwMTdlOGU0OWEiLCJzaWQiOiI2MTFkMTNlMTU2MjBjZDAwMTdlOGU0OWIiLCJpYXQiOjE2MjkyOTU1ODV9.dri2dzlsnubjeNl6DKWKQR87cVihgWaVRrfxODq5QI0`,
        },
      });
      this.setState({ awards: data.data.ruGifts, isLoading: false });
      // console.log(`data`, data.data.ruGifts);
    } catch (error) {
      throw new Error(error);
    }
  }

  render() {
    const awards = this.state.awards;
    console.log(`awards`, awards);
    return (
      <div className={styles.Awards__Container}>
        <ul className={styles.Awards__List}>
          {awards.map(award => (
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
                      {award.price} БАЛЛОВ
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AwardsList;

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

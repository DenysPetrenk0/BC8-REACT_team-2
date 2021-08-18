import React, { Component } from 'react';
import AwardsList from '../../components/awards/awardsList/AwardsList';
import AwardsSubmitButton from '../../components/awards/awardsSubmitButton/AwardsSubmitButton';
import AwardsTitle from '../../components/awards/awardsTitle/AwardsTitle';

class AwardsPage extends Component {
  state = {};
  render() {
    return (
      <>
        <AwardsTitle />
        <AwardsList />
        <AwardsSubmitButton />
        {/* <CongratsModal/> */}
      </>
    );
  }
}

export default AwardsPage;

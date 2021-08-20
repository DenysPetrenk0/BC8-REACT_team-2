import React, { Component } from 'react';
import AwardsList from '../../components/awards/awardsList/AwardsList';
// import AwardsSubmitButton from '../../components/awards/awardsSubmitButton/AwardsSubmitButton';
import AwardsTitle from '../../components/awards/awardsTitle/AwardsTitle';
// import CongratsModal from '../../components/awards/CongratsModal/CongratsModal';

class AwardsPage extends Component {
  state = {};
  render() {
    return (
      <>
        <AwardsTitle />
        <AwardsList />
        {/* <CongratsModal /> */}
      </>
    );
  }
}

export default AwardsPage;

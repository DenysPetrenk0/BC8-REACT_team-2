import React, { Component } from 'react';
import AwardsList from '../../components/awards/awardsList/AwardsList';
import AwardsSection from '../../components/awards/awardsSection/AwardsSection';
import AwardsSubmitButton from '../../components/awards/awardsSubmitButton/AwardsSubmitButton';
import AwardsTitle from '../../components/awards/awardsTitle/AwardsTitle';

class AwardsPage extends Component {
  state = {};
  render() {
    return (
      <AwardsSection>
        <AwardsTitle />
        <AwardsList />
        <AwardsSubmitButton />
        {/* <CongratsModal/> */}
      </AwardsSection>
    );
  }
}

export default AwardsPage;

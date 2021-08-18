import React from 'react';
import ContentSwitcher from '../../contentSwitcher/ContentSwitcher';
import { weekDays } from '../../routes/weekRoutes';

const WeekTabs = () => {
  return <ContentSwitcher routes={weekDays} />;
};

export default WeekTabs;

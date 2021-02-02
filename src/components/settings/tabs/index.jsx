import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styles';
import Button from '../../common/button';

export default function Tabs({ tabs, currentTab, setCurrentTab }) {
  return (
    <Wrapper>
      {tabs.map((tab) => (
        <Button
          secondary={currentTab === tab}
          onClick={() => setCurrentTab(tab)}
          key={tab}
        >
          {tab}
        </Button>
      ))}
    </Wrapper>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentTab: PropTypes.string.isRequired,
  setCurrentTab: PropTypes.func.isRequired,
};

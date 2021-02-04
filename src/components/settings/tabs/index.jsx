import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/button';

export default function Tabs({ tabs, currentTab, setCurrentTab }) {
  return (
    <>
      {tabs.map((tab) => (
        <Button
          primary={currentTab === tab}
          onClick={() => setCurrentTab(tab)}
          key={tab}
        >
          {tab}
        </Button>
      ))}
    </>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentTab: PropTypes.string.isRequired,
  setCurrentTab: PropTypes.func.isRequired,
};

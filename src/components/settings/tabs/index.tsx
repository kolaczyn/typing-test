import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/button';

type Props = {
  tabs: string[];
  currentTab: string;
  setCurrentTab: (tab: string) => void;
};

const Tabs: React.FC<Props> = ({ tabs, currentTab, setCurrentTab }) => (
  <>
    {tabs.map(tab => (
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
export default Tabs;

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentTab: PropTypes.string.isRequired,
  setCurrentTab: PropTypes.func.isRequired,
};

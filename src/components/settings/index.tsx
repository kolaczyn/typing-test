import React, { useState } from 'react';

import Box from '../common/box';
import Tabs from './tabs';
import VertSplit, { LeftSection } from '../common/vert-split';

import ChooseTheme from './choose-theme';
import TypingOptions from './typing-options';
import Account from './account';

const tabs = ['Change Theme', 'Typing Options', 'Account'];

const tabToComponents: Record<string, React.FC> = {
  'Change Theme': ChooseTheme,
  'Typing Options': TypingOptions,
  Account,
};

const Settings: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const Component = tabToComponents[currentTab];

  return (
    <Box title="Hi, what's up?">
      <VertSplit>
        <LeftSection>
          <Tabs
            tabs={tabs}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        </LeftSection>
        <Component />
      </VertSplit>
    </Box>
  );
};
export default Settings;

import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <ul>
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? 'active' : ''}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div>
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;

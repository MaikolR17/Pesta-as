import React, { useState } from 'react';
import './Tabs.module.css';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);
  const [animation, setAnimation] = useState(null);

  const handleTabChange = (label, callback) => {
    setActiveTab(label);
    callback && callback();
    setAnimation(`animate-tab-${label}`);
    setTimeout(() => {
      setAnimation(null);
    }, 500);
  };

  return (
    <div className="tabs">
      <ul className="tab-header">
        {tabs.map((tab) => (
          <li key={tab.label} className="flex-item">
            <button
              className={`${tab.label === activeTab ? 'active' : ''} ${animation}`}
              onClick={() => handleTabChange(tab.label, tab.callback)}
              style={tab.label === activeTab ? { backgroundColor: 'black', color: 'white' } : {}} >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        <h4>{tabs.find((tab) => tab.label === activeTab)?.content}</h4>
      </div>
    </div>
  );
};

export default Tabs;

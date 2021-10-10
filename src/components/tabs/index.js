import React from 'react';
import Tabs from './tabs'
import { useState } from 'react';
import {TabLabels} from './constant'

export const TabsComponent = () => {
    const [activeTab,setActiveTab]= useState(TabLabels.TEAM_INFO);
    const onClickTab = (tab) =>{
        setActiveTab(tab);
    }
    return (
        <div>
            <Tabs activeTabName={activeTab} onClickTab={onClickTab} />
        </div>
    )
}
export default TabsComponent;
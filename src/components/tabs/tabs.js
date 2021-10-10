import React from 'react'
import {TabLabels} from './constant'
import {Link} from 'react-router-dom'
import './tabs.css'

const Tabs = ({activeTab,onClickTab}) => {
    const {TEAM_INFO,ABOUT_OUR_PROJECT,OUR_APP}=TabLabels;

    const renderTabTitle = (tabTitle,isActive,icon,id) =>(
 <div onClick={()=>onClickTab(tabTitle)} 
 id={id} 
 className={`tab-item ${isActive &&"tab-border"}`}>
  <i className={icon}></i>
  <p>{tabTitle} </p>
 </div>
    );
    return (
      <>
            <section className="tabs">
                <div className="container">
               {renderTabTitle(TEAM_INFO,activeTab===TEAM_INFO,
                "fas,fa-door-open fa-3x",
                "tab-1")}
                {renderTabTitle(ABOUT_OUR_PROJECT,activeTab===ABOUT_OUR_PROJECT,
                "fas,fa-door-open fa-3x",
                "tab-1")}
                {renderTabTitle(OUR_APP,activeTab===OUR_APP,
                "fas,fa-tablet-alt fa-3x",
                "tab-1")}
                </div>
            </section>
            </>
    )


        
}

export default Tabs

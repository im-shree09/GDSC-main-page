import React from 'react'
import {TabLabels} from './constant'
import {Link} from 'react-router-dom'
import './tabs.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';


const Tabs = ({activeTabName,onClickTab}) => {
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
               {renderTabTitle(TEAM_INFO,activeTabName===TEAM_INFO,
                "fas,fa-door-open fa-3x",
                "tab-1")}
                {renderTabTitle(ABOUT_OUR_PROJECT,activeTabName===ABOUT_OUR_PROJECT,
                 " fas,fa-info,fa-3x ",
                "tab-1")}
                {renderTabTitle(OUR_APP,activeTabName===OUR_APP,
                "fas,fa-tablet-alt fa-3x",
                "tab-1")}
                </div>
            </section>
            {activeTabName===TEAM_INFO &&(
                <section className="tab-content">
                    <div className="container">
                      <div id="tab-1-content" className={`tab-content-item ${activeTabName===TEAM_INFO && "show"}`}>
                       <div className="tab-1-content-inner">
                       <div>
                       <p className="text-lg">
                           This is our Hardworking team for this project
                       </p>
                      
                       </div>
                       </div>
                      </div>
                    </div>
                </section>
            )}
            {activeTabName === ABOUT_OUR_PROJECT &&(
                <section className="tab-content">
                    <div className="container">
                      <div id="tab-2-content" className={`tab-content-item ${activeTabName===ABOUT_OUR_PROJECT && "show"}`}>
                       <div className="tab-2-content-inner">
                       <div>
                       <p className="text-lg">
                      we have made a app where you chit chat and gossip with your friends about the recent webseries you watched.
                       </p>
                       </div>
                       </div>
                      </div>
                    </div>
                </section>
            )}
            {activeTabName === OUR_APP &&(
                <section className="tab-content">
                    <div className="container">
                      <div id="tab-3-content" className={`tab-content-item ${activeTabName===OUR_APP && "show"}`}>
                       <div className="tab-3-content-bottom">
                       <div>
                       <p className="text-lg">
                      we have made a app which can be used for android user, so that you can just lay back on your couch and enjoy chatting!!
                       </p>
                       <Link to="/netflix-show" className="btn btn-xl btn-header">
                   Download now
                   </Link>
                   <div>
                   <img src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png"/>
                   <p className="text-md">
                       Use it on Mobiles and Tablets!!
                   </p>
                   </div>
                       </div>
                       </div>
                      </div>
                    </div>
                </section>
            )}
            </>
    )


        
}

export default Tabs

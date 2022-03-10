import React from 'react';
import APILink from './APILink.js'

const Sidebar = props => {
    let organizationConfig = props.organizationConfig
    let apiLinks = []

    if (props.definitionList === null) {
        props.getOrganizationData(organizationConfig.orgName)
    } else {
        for (let i = 0; i < props.definitionList.length; i++) {
            if (props.definitionList[i].properties[4].value === "true") {
                apiLinks.push(
                    <APILink 
                        key={i}
                        apiLinkData={props.definitionList[i]}
                        updateDefinitionLink={props.updateDefinitionLink}
                    />
                )
            }
        }
    }

  return (
    <div className="side-bar">
        <div className="side-bar-header">
            <img src={organizationConfig.displayImage} alt="logo"/>
            <h3>{organizationConfig.displayTag}</h3>
        </div>
        <div className="side-bar-body">
            {apiLinks}
        </div>
    </div>
  )
}

export default Sidebar;
import React from 'react';
import Leadership from './Leadership'
import ScaledAgile from './ScaledAgile';
import ScrumAlliance from './ScrumAlliance';
import ScrumOrg from './ScrumOrg';
import ProjectManagement from './ProjectManagement';


const Public = () => {
    return(
        <div>
            <Leadership/>
            <ScaledAgile/>
            <ScrumOrg/>
            <ScrumAlliance/>
            <ProjectManagement/>
           
        </div>
    );
}

export default Public;
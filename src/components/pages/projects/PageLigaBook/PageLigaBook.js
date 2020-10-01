import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ProjectPageTemplate from '../../ProjectPageTemplate/ProjectPageTemplate';

const PageLigaBook = props => {
  const projectId = 4;
  const allProjectsData = props.projectsData;
  const technologiesData = props.techData;

  const [dataIsReady, setDataIsReady] = useState(false);
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    if (Object.keys(allProjectsData).length !== 0 && Object.keys(technologiesData).length !== 0) {
      setDataIsReady(true);
    } else {
      setDataIsReady(false);
    }
  }, [allProjectsData, technologiesData]);

  useEffect(() => {
    if (dataIsReady) {
      setProjectData(findProject());
    }
  }, [dataIsReady]);

  function findProject() {
    function isThisProject(DBElem) {
      return DBElem.id === projectId;
    }
    return allProjectsData.find(isThisProject);
  }

  if (projectData) {
    return (
      <ProjectPageTemplate
        projectData={projectData}
        technologiesData={technologiesData}
        allProjectsData={allProjectsData}
      />
    )
  } else {
    return (
      <div>Loading...</div> // Replace with Loader!!!
    )
  }
}

const mapStateToProps = state => ({
  projectsData: state.portfolioData.projectsData,
  techData: state.portfolioData.technologiesData
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PageLigaBook);
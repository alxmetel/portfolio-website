import React, { useEffect } from 'react';

const PageIndexProjects = () => {
  
  useEffect(() => {
    fetchProjectsData();
  }, []);

  const fetchProjectsData = () => {
    const url = 'https://portfolio-website-18313.firebaseio.com/projects.json';

    fetch(url).then(response => response.json()).then(data => {
      console.log(data)
    })
  }

  return (
    <div className="page-index-projects">
      Projects
    </div>
  )
}

export default PageIndexProjects;
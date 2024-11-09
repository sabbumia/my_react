import styles from './ProjectsStyles.module.css';
import educational from '../../assets/educational.jpg';
import viperTravel from '../../assets/3d-travel-icon-with-airplane.jpg';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={educational}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="NSU"
          p="Educational Webapp"
        />
        <ProjectCard
          src={viperTravel}
          link="https://github.com/sazzadadib"
          h3="Viper Travels"
          p="Travel Webapp"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;

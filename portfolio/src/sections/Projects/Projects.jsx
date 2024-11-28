import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
       <a href="https://website1-a323e.web.app/"><ProjectCard
          src={viberr}
 h3="Chariter"
          p="Chariter"
        /></a> 
        <ProjectCard
          src={freshBurger}
          link="https://auth-2bf19.web.app/"
          h3="Logis"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link="https://fir-2-6357b.web.app/"
          h3="ONEDER"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://react1-aa1e1.web.app/"
          h3="CoHost"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;

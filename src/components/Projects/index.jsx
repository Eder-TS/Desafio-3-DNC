import projects from './projects'
import Card from '../elements/Card'
import styles from './Projects.module.css'

export default function Projects(){
    return(
        <section className={styles.projects} id='projects'>
            <h1>Projetos</h1>

            <div className={styles.cards}>
                {projects.map((project) => 
                    <Card key={project.id} 
                        site={project.site}
                        src={project.src}
                        alt={project.alt}
                        title={project.title}
                        description={project.description}
                        repo={project.repo}
                /> )}
            </div>
        </section>
    )
}
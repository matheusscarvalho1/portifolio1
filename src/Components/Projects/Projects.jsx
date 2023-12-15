import { ProjectsContent } from "./ProjectsStyles";

import Title from "../Templates/TemplateTitle/TemplateTitle";
import Project from "../Project/Project";

const Projects = ({ id }) => {
  return (
    <>
      <Title id={id}>Projetos</Title>
      <ProjectsContent>
        <Project
          image="../images/project-1.png"
          title="Projeto Barber Shop"
          description="💈✂️ Página Web responsiva desenvolvida em React.JS & Next.JS de
          uma barbearia ilustrando os tipos de serviços prestados,
          história da barbearia, localização e formulário para agendamento
          de horário."
        />
        <Project
          image="../images/project-2.png"
          title="Projeto 2"
          description="Texto projeto-2"
        />
        <Project
          image="../images/project-3.png"
          title="Projeto 3"
          description="Texto projeto-3"
        />
        <Project
          image="../images/project-4.png"
          title="Projeto 4"
          description="Text projeto-4"
        />
        <Project
          image="../images/project-5.png"
          title="Projeto 5"
          description="Text projeto-5"
        />
        <Project
          image="../images/project-6.png"
          title="Projeto 6"
          description="Text projeto-6"
        />
      </ProjectsContent>
    </>
  );
};
export default Projects;
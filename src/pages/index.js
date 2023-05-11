import ContainerInformation from "@src/components/containers/ContainerInformation";
import ContainerMaxWidth from "@src/components/containers/ContainerMaxWidth";
import { useState } from "react";


export default function Home() {
  const [profile, setProfile] = useState([
    {subtitle: '', link:'', description: 'Egresado de la carrera de ingeniería de sistemas, responsable, con facilidad de aprendizaje, adaptación, resolución de problemas y capacidad de trabajo en equipo, con muchas ganas de desarrollarme profesionalmente.' }
  ]);

  const [skills, setSkills] = useState([
    {subtitle: '', link:'', description: 'C++ / C# / .NET*HTML / CSS / JAVASCRIPT*REACT / NODEJS*COBOL*JAVA*ANDROID STUDIO*GIT*MICROSOFT EXCEL (VBA)*SQLSERVER / ORACLE*METODOLOGÍAS AGILES*GHERKIN*SOAPUI / POSTMAN*AZURE / CLOUD COMPUTING' }
  ]);

  const [languages, setLanguages] = useState([
    {subtitle: '', link:'', description: 'Español (Nativo)*Inglés (Intermedio)' }
  ]);

  const [experiences, setExperiences] = useState([
    {subtitle: 'Asistente en el área de facturación.', link:'', description: "LICEX PERU*2015 - 2022" },
    {subtitle: 'Programador.', link:'', description: "IT&B Consulting*07/2021 - 09/2021" }
  ]);

  const [education, setEducation] = useState([
    {subtitle: 'UNIVERSIDAD PRIVADA DEL NORTE.', link:'', description: "Ingeniería de sistemas computacionales*2016 – 2020*Sede: UPN – Lima Centro*Situación: Egresado*Calificación media: Notable" }
  ]);

  const [contact, setContact] = useState([
    {subtitle: '', link:'', description: "Teléfono: 928892316*e-mail: mzb9607@gmail.com" }
  ]);

  const [projects, setProjects] = useState([
    {subtitle: 'LICEX', link:'https://zingy-basbousa-a31bde.netlify.app/', description: "Single Page usando ReactJS y Tailwind."},
    {subtitle: 'KITTENS', link:'https://stately-cassata-351d79.netlify.app/', description: "Aplicación web usando ReactJS y Tailwind."},
    {subtitle: 'BALL#', link:'https://play.google.com/store/apps/details?id=com.Deizoforia.Ball', description: "Videojuego educativo desarrollado en Unity3D."},
    {subtitle: 'Censo Arbóreo', link:'https://play.google.com/store/apps/details?id=com.CensoArboreoApp.ProyectoCensoArboreo', description: "Aplicación desarrollada en Android Studio"},
  ]);

  return (
    <div className="w-full  h-full bg-neutral-50 dark:bg-neutral-800 font-sans">
      <ContainerMaxWidth bg="" spacing="p-8"   item={<div></div>}/>
      <ContainerMaxWidth bg="bg-normalmodeblue-800 dark:bg-darkmodeblue-400" spacing="p-8 mb-16"   item={<div></div>}/>
      
      <ContainerMaxWidth item={
        <>
          <h1 className="text-4xl md:text-6xl my-4 text-center font-Poppins text-normalmodeblue-700 dark:text-neutral-100">
            MAURICIO ZÚÑIGA BACA
          </h1>
          <h1 className="text-2xl my-4 text-center text-normalmodeblue-600 dark:text-darkmodeblue-300">
            Bachiller en ingeniería de sistemas computacionales
          </h1>
        </>
      }/>
      <ContainerMaxWidth item={<div className="bg-normalmodeblue-800 dark:bg-neutral-50  py-1 my-4"></div>}/>
      <ContainerMaxWidth item={
        <div className="px-2 mx-8 grid sm:grid-cols-2 gap-x-6 gap-y-0">
          <div >
            <ContainerInformation title="PERFIL PERSONAL" info={profile}/>
            <ContainerInformation title="FORMACIÓN" info={education}/>
            <ContainerInformation title="CONOCIMIENTOS" info={skills}/>
            
          </div>
          <div >
            <ContainerInformation title="EXPERIENCIA LABORAL" info={experiences} />
            <ContainerInformation title="IDIOMAS" info={languages}/>
            <ContainerInformation title="PROYECTOS" info={projects}/>
            <ContainerInformation title="DATOS DE CONTACTO" info={contact}/>
          </div>
        </div>
      }/>
      <ContainerMaxWidth bg="bg-normalmodeblue-800 dark:bg-darkmodeblue-400" spacing="mt-2 p-6"   item={<div></div>}/>
    </div>
  )
}

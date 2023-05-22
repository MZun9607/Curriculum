import ContainerInformation from "@src/components/containers/ContainerInformation";
import ContainerMaxWidth from "@src/components/containers/ContainerMaxWidth";
import { useEffect, useState } from "react";


export default function Home() {


  const [profile, setProfile] = useState([]);

  const [skills, setSkills] = useState([]);

  const [languages, setLanguages] = useState([]);

  const [experiences, setExperiences] = useState([]);

  const [education, setEducation] = useState([]);

  const [contact, setContact] = useState([]);

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getCVData();
  }, []);

  async function getCVData(){
    const res = await fetch(process.env.API_BASE + process.env.API_CURRICULUM_DATA);
    const data = await res.json();
    setProfile(data[0]["PERFIL PERSONAL"]);
    setSkills(data[0]["CONOCIMIENTOS"]);
    setLanguages(data[0]["IDIOMAS"]);
    setExperiences(data[0]["EXPERIENCIA LABORAL"]);
    setEducation(data[0]["FORMACIÓN"]);
    setProjects(data[0]["PROYECTOS"]);
    setContact(data[0]["DATOS DE CONTACTO"]);
  }

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

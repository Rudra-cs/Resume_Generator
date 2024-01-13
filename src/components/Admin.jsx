import { useState } from "react";
import Editor from "./Editor/Editor";
import Header from "./Header/Header";

const Admin = () => {
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    skills: "Skills",
    education: "Education",
  };

  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.skills]: {
      id: sections.skills,
      sectionTitle: sections.skills,
      points: [],
    },
  });

  return (
    <div>
      <Header />
      <Editor
        sections={sections}
        information={resumeInformation}
        setInformation={setResumeInformation}
      />
    </div>
  );
};

export default Admin;

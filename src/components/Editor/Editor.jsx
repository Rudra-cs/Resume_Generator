/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import InputControl from "./InputControl";

const Editor = ({ sections, information }) => {
  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );

  const [activeInformation, setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
  );

  const [sectionTitle, setSectionTitle] = useState(
    information[sections[Object.keys(sections)[0]]]
  );

  const [values, setValues] = useState({
    name: activeInformation?.detail?.name || "",
    title: activeInformation?.detail?.title || "",
    linkedin: activeInformation?.detail?.linkedin || "",
    github: activeInformation?.detail?.github || "",
    phone: activeInformation?.detail?.phone || "",
    email: activeInformation?.detail?.email || "",
  });

  const workExpBody = (
    <div className="flex flex-col gap-3 mt-2">
      <div className="flex gap-2">
        <div className="flex-1">
          <InputControl
            label="Title"
            placeholder="Enter title eg. Frontend developer"
            // value={values.title}
            // onChange={(event) =>
            //   setValues((prev) => ({ ...prev, title: event.target.value }))
            // }
          />
        </div>
        <div className="flex-1">
          <InputControl
            label="Company Name"
            placeholder="Enter company name eg. amazon"
            // value={values.companyName}
            // onChange={(event) =>
            //   setValues((prev) => ({ ...prev, companyName: event.target.value }))
            // }
          />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex-1">
          <InputControl
            label="Certificate Link"
            placeholder="Enter certificate link"
            // value={values.certificationLink}
            // onChange={(event) =>
            //   setValues((prev) => ({
            //     ...prev,
            //     certificationLink: event.target.value,
            //   }))
            // }
          />
        </div>
        <div className="flex-1">
          <InputControl
            label="Location"
            placeholder="Enter location eg. Remote"
            // value={values.location}
            // onChange={(event) =>
            //   setValues((prev) => ({ ...prev, location: event.target.value }))
            // }
          />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex-1">
          <InputControl
            label="Start Date"
            type="date"
            placeholder="Enter start date of work"
            // value={values.startDate}
            // onChange={(event) =>
            //   setValues((prev) => ({ ...prev, startDate: event.target.value }))
            // }
          />
        </div>
        <div className="flex-1">
          <InputControl
            label="End Date"
            type="date"
            placeholder="Enter end date of work"
            // value={values.endDate}
            // onChange={(event) =>
            //   setValues((prev) => ({ ...prev, endDate: event.target.value }))
            // }
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <label>Enter work description</label>
        <InputControl
          placeholder="Line 1"
          // value={values.points ? values.points[0] : ""}
          // onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          // value={values.points ? values.points[1] : ""}
          // onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          // value={values.points ? values.points[2] : ""}
          // onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
      </div>
    </div>
  );

  const projectBody = (
    <div className="flex flex-col gap-3 mt-2">
      <div className="gap-4 ">
        <InputControl
          label="Title"
          placeholder="Enter title eg. Chat app"
          // value={values.title}
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, title: event.target.value }))
          // }
        />
      </div>
      <InputControl
        label="Overview"
        placeholder="Enter basic overview of project"
        // value={values.overview}
        // onChange={(event) =>
        //   setValues((prev) => ({ ...prev, overview: event.target.value }))
        // }
      />
      <div className="flex gap-4">
        <div className="flex-1">
          <InputControl
            label="Deployed Link"
            placeholder="Enter deployed link of project"
            // value={values.link}
            // onChange={(event) =>
            //   setValues((prev) => ({ ...prev, link: event.target.value }))
            // }
          />
        </div>
        <div className="flex-1">
          <InputControl
            label="Github Link"
            placeholder="Enter github link of project"
            // value={values.github}
            // onChange={(event) =>
            //   setValues((prev) => ({ ...prev, github: event.target.value }))
            // }
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <label>Enter project description</label>
        <InputControl
          placeholder="Line 1"
          // value={values.points ? values.points[0] : ""}
          // onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          // value={values.points ? values.points[1] : ""}
          // onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          // value={values.points ? values.points[2] : ""}
          // onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          // value={values.points ? values.points[3] : ""}
          // onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );
  const educationBody = (
    <div className="flex flex-col gap-3 mt-2">
      <div className="flex-1 gap-4">
        <InputControl
          label="Title"
          placeholder="Enter title eg. B-tech"
          // value={values.title}
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, title: event.target.value }))
          // }
        />
      </div>
      <InputControl
        label="College/School Name"
        placeholder="Enter name of your college/school"
        // value={values.college}
        // onChange={(event) =>
        //   setValues((prev) => ({ ...prev, college: event.target.value }))
        // }
      />
      <div className="flex gap-4">
        <div className="flex-1">
          <InputControl
            label="Start Date"
            type="date"
            placeholder="Enter start date of this education"
            // value={values.startDate}
            // onChange={(event) =>
            //   setValues((prev) => ({ ...prev, startDate: event.target.value }))
            // }
          />
        </div>
        <div className="flex-1">
          <InputControl
            label="End Date"
            type="date"
            placeholder="Enter end date of this education"
            // value={values.endDate}
            // onChange={(event) =>
            //   setValues((prev) => ({ ...prev, endDate: event.target.value }))
            // }
          />
        </div>
      </div>
    </div>
  );
  const basicInfoBody = (
    <div className="flex flex-col gap-3 mt-2 ">
      <div className="flex gap-4">
        <div className="flex-1">
          <InputControl
            label="Name"
            placeholder="Enter your full name eg. Aashu"
            // value={values.name}
            // onChange={(event) =>
            //   setValues((prev) => ({ ...prev, name: event.target.value }))
            // }
          />
        </div>
        <div className="flex-1">
          <InputControl
            label="Title"
            placeholder="Enter your title eg. Frontend developer"
            // value={values.title}
            // onChange={(event) =>
            //   setValues((prev) => ({ ...prev, title: event.target.value }))
            // }
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <InputControl
            label="Linkedin Link"
            placeholder="Enter your linkedin profile link"
            // value={values.linkedin}
            // onChange={(event) =>
            //   setValues((prev) => ({ ...prev, linkedin: event.target.value }))
            // }
          />
        </div>
        <div className="flex-1">
          <InputControl
            label="Github Link"
            placeholder="Enter your github profile link"
            // value={values.github}
            // onChange={(event) =>
            //   setValues((prev) => ({ ...prev, github: event.target.value }))
            // }
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <InputControl
            label="Email"
            placeholder="Enter your email"
            // value={values.email}
            // onChange={(event) =>
            //   setValues((prev) => ({ ...prev, email: event.target.value }))
            // }
          />
        </div>
        <div className="flex-1">
          <InputControl
            label="Enter phone"
            placeholder="Enter your phone number"
            // value={values.phone}
            // onChange={(event) =>
            //   setValues((prev) => ({ ...prev, phone: event.target.value }))
            // }
          />
        </div>
      </div>
    </div>
  );
  const skillsBody = (
    <div className="flex flex-col gap-3 mt-2">
      <div className="flex flex-col gap-2">
        <label>List your skills</label>
        <InputControl
          placeholder="Line 1"
          // value={values.points ? values.points[0] : ""}
          // onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          // value={values.points ? values.points[1] : ""}
          // onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          // value={values.points ? values.points[2] : ""}
          // onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          // value={values.points ? values.points[3] : ""}
          // onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );

  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workExp:
        return workExpBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.skills:
        return skillsBody;
      default:
        return null;
    }
  };

  useEffect(() => {
    setActiveInformation(information[sections[activeSectionKey]]);
    setSectionTitle(sections[activeSectionKey]);
  }, [activeSectionKey, information, sections]);

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="bg-white rounded-md shadow-md p-4">
        <div className="flex space-x-4">
          {Object.keys(sections)?.map((key) => (
            <div
              key={key}
              onClick={() => setActiveSectionKey(key)}
              className={`font-medium cursor-pointer px-4 py-2 border-b-2 ${
                activeSectionKey === key ? "border-blue-500" : ""
              }`}
            >
              {sections[key]}
            </div>
          ))}
        </div>
        <div className="mt-4">
          <InputControl
            label={"Title"}
            placeholder={"Enter Section Title"}
            value={sectionTitle}
            onChange={(e) => setSectionTitle(e.target.value)}
          />
          <div className="chips flex flex-wrap items-center gap-20 ">
            <div className=" text-blue-500 font-bold tracking-wide cursor-pointer">
              +New
            </div>
            {activeInformation?.details &&
              activeInformation?.details.map((item, index) => (
                <div
                  key={item.title + index}
                  className="flex gap-2 items-center my-2 px-2 py-1 bg-blue-500 rounded-full cursor-default"
                >
                  <p className="font-semibold text-white">
                    {sections[activeSectionKey]}
                    {index + 1}
                  </p>
                  <svg
                    className="text-white h-6 w-6 cursor-pointer"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <text
                      x="50%"
                      y="50%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      fontSize="12"
                      fill="currentColor"
                    >
                      X
                    </text>
                  </svg>
                </div>
              ))}
          </div>
          {generateBody()}

          <button
            className="py-2 px-10 my-4 w-100 text-sm font-semibold cursor-pointer border rounded-md focus:outline-none hover:bg-blue-600 focus:border-blue-500 bg-blue-500 text-white tracking-widest"
            type="button"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editor;

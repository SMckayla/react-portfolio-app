import { useState } from "react";
import ProjectCard from "./components/ProjectCard";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Portfolio Website",
      description: "Built using React"
    },
    {
      id: 2,
      title: "E-commerce App",
      description: "Online shopping platform"
    }
  ]);

  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // ADD PROJECT
  const addProject = () => {
    if (!title || !description) return;

    const newProject = {
      id: Date.now(),
      title,
      description
    };

     setProjects([...projects, newProject]);
    setTitle("");
    setDescription("");
  };

const filteredProjects = projects.filter((project) =>
  project.title.toLowerCase().includes(search.toLowerCase())
);
const deleteProject = (id) => {
  setProjects(projects.filter((project) => project.id !== id));
};

return (
  <div>
   <h1>My Portfolio App</h1>
    <p>Total Projects: {projects.length}</p>

    <input
      className="input"
      placeholder="Search projects..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <br /><br />

    <input
      className="input"
      placeholder="Project title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />

    <input
      className="input"
      placeholder="Project description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />

    <button onClick={addProject}>
      Add Project
    </button>

    <br /><br />

    {/* now you use filteredProjects here */}
    {filteredProjects.map((project) => (
     <ProjectCard
  id={project.id}
  title={project.title}
  description={project.description}
  onDelete={deleteProject}
/>
    ))}

  </div>
);
}
export default App;

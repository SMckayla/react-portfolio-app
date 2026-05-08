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

 return (
  <div>

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

  </div>
);

   <button onClick={addProject}>Add Project</button>

      <br /><br />
      
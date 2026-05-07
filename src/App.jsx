import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div>
      <h1>My Portfolio App</h1>
      <ProjectCard />
    </div>
  );
}

export default App;

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Built using React"
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "Online shopping platform"
  },
];
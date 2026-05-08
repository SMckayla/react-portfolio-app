function ProjectCard(title, description, onDelete) {
  return (
    <div className="card">
      <h2>{title}</h2>
<p>{description}</p>

<button onClick={() => onDelete(id)}>
  Delete
</button>
    </div>
  );
}

export default ProjectCard;

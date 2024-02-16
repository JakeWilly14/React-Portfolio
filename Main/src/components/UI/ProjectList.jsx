export default function ProjectList({ projects }) {
  return (
      <div className="container-fluid">    
        <ul className="me-auto mb-2 mb-lg-0">
          {projects.map((project) => project)}
        </ul>
      </div>

  );
}
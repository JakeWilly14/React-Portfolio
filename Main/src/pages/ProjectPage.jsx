import { Link } from 'react-router-dom';
import ProjectList from '../components/UI/ProjectList';

export default function ProjectPage() {
  // The Projects UI component will render each of the Link elements in the links prop with our projects
  return (
    <ProjectList
      projects={[       
        <Link key={1} className="text-light" to="https://github.com/JakeWilly14/Text-Editor">
          Text Editor
        </Link>,
        <Link key={2} className="text-light" to="https://github.com/JakeWilly14/Social-Network-API">
          Social Network API
        </Link>,
        <Link key={3} className="text-light" to="https://github.com/JakeWilly14/E-Commerce-Back-End">
          ECommerce Backend
        </Link>
      ]}
    />
  );
}
import { Link } from 'react-router-dom';

export default function ResumePage() {
  return (
    <div className="container pt-4">
      <h1>Resume</h1>
      <Link to="../../public/Resume.docx" target="_blank" download>Download</Link>
      <img src='resume2024.png'></img>
    </div>
  );
}
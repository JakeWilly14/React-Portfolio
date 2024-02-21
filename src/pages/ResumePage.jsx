import { Link } from 'react-router-dom';

export default function ResumePage() {
  return (
    <div className="container">
      <h1>Resume</h1>
      <Link to="../../public/Resume.docx" target="_blank" download>Download</Link>
      <div className="scroll-container">
        <img src='PageOneResume.png'></img>
        <img src='PageTwoResume.png'></img>
      </div>
    </div>
  );
}
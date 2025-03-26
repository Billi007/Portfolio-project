import { FaDownload } from "react-icons/fa";

const ResumeSection = () => {
  return (
    <div className="flex justify-center items-center mt-6">
      <a
        href="https://drive.google.com/file/d/1oTePe-QrLrD39_ScIvA-mDqh8Mz1WiWO/view?usp=drive_link"
        download="My_Resume.pdf"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
      >
        <FaDownload className="mr-2" /> Download Resume
      </a>
    </div>
  );
};

export default ResumeSection;
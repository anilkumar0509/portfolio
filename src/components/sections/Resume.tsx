import { FileText, Download, Eye } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/anil_resume.pdf';
    link.download = 'B_Venkata_Anil_Kumar_Resume.pdf';
    link.click();
  };

  const handleView = () => {
    window.open('/anil_resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="min-h-screen py-20 px-8 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
            Resume
          </span>
        </h2>

        <div className="bg-black/40 backdrop-blur-sm p-12 rounded-xl max-w-2xl mx-auto border border-blue-400/20 galaxy-glow">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500/20 to-red-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-blue-400/30">
            <FileText size={48} className="text-blue-400" />
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">
            Download My Resume
          </h3>

          <p className="text-gray-400 mb-8 text-lg">
            Get a comprehensive overview of my skills, experience, and projects.
            Perfect for recruiters and hiring managers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleView}
              className="flex items-center justify-center gap-2 px-6 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-colors font-medium"
            >
              <Eye size={20} />
              View Resume
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-lg hover:from-blue-500 hover:to-red-500 transition-all duration-300 font-medium galaxy-glow"
            >
              <Download size={20} />
              Download PDF
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-600">
            <h3 className="text-xl font-semibold text-purple-400 mb-6">Quick Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-gray-300">
              <div>
                <h4 className="font-semibold text-white">Education</h4>
                <p>Computer Science Student</p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Focus Areas</h4>
                <p>Full-Stack Development, DSA, AI/ML</p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Experience</h4>
                <p>Multiple Projects & Competitive Programming</p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Status</h4>
                <p>Open to SDE Internships</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;

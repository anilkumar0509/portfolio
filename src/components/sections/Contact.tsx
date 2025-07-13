import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bhumireddyvenkataanilkumar@gmail.com',
      href: 'mailto:bhumireddyvenkataanilkumar@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9391121982',
      href: 'tel:+919391121982'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'SRM INSTITUTE OF SCIENCE AND TECHNOLOGY, Chennai, Tamil Nadu, India',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-8 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/venkata-anil-kumar-bhumireddy-948415334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" // replace with your profile
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 group galaxy-glow-hover"
          >
            <div className="p-3 bg-gradient-to-r from-blue-500/20 to-red-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors border border-blue-400/30">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25v-.375a2.625 2.625 0 00-5.25 0V8.25m-3 0V7.875a2.625 2.625 0 015.25 0V8.25m1.5 0h-8.25M21 21H3V8.25h18V21z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-white">LinkedIn</h4>
              <p className="text-gray-400">Connect with me</p>
            </div>
          </a>

          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              className="flex items-center gap-4 p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 group galaxy-glow-hover"
            >
              <div className="p-3 bg-gradient-to-r from-blue-500/20 to-red-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors border border-blue-400/30">
                <info.icon size={24} className="text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white">{info.label}</h4>
                <p className="text-gray-400">{info.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Why Work With Me Box */}
        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-blue-400/20 max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold text-purple-400 mb-4 text-center">Why Work With Me?</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Strong problem-solving skills</li>
            <li>Passionate about learning new technologies</li>
            <li>Dedicated to writing clean, efficient code</li>
            <li>Team player with excellent communication skills</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;

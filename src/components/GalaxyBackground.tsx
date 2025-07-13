
const GalaxyBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base galaxy gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-black" />
      
      {/* Animated stars */}
      <div className="absolute inset-0">
        {/* Large moving stars */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300 rounded-full opacity-80 animate-pulse star-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-red-300 rounded-full opacity-60 animate-pulse star-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-70 animate-pulse star-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 left-1/5 w-1 h-1 bg-red-400 rounded-full opacity-50 animate-pulse star-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-blue-200 rounded-full opacity-60 animate-pulse star-float" style={{ animationDelay: '3s' }} />
        
        {/* Small twinkling stars */}
        <div className="absolute top-1/6 left-2/3 w-0.5 h-0.5 bg-white rounded-full opacity-40 animate-ping" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/5 left-1/2 w-0.5 h-0.5 bg-blue-100 rounded-full opacity-30 animate-ping" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-2/3 right-1/5 w-0.5 h-0.5 bg-red-100 rounded-full opacity-35 animate-ping" style={{ animationDelay: '2.5s' }} />
      </div>
      
      {/* Nebula effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl galaxy-drift" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl galaxy-drift" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl galaxy-drift" style={{ animationDelay: '6s' }} />
      </div>
      
      {/* Wave gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-red-500/5 wave-animation" />
      <div className="absolute inset-0 bg-gradient-to-l from-red-500/3 via-transparent to-blue-500/3 wave-animation" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default GalaxyBackground;

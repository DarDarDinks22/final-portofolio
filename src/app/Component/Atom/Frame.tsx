const Frame = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-10 left-10 w-24 h-px bg-lime-400 animate-pulse" />
      <div className="absolute top-10 left-10 h-24 w-px bg-lime-400 animate-pulse" />
      <div className="absolute top-10 right-10 w-24 h-px bg-lime-400 animate-pulse" />
      <div className="absolute top-10 right-10 h-24 w-px bg-lime-400 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-24 h-px bg-lime-400 animate-pulse" />
      <div className="absolute bottom-10 left-10 h-24 w-px bg-lime-400 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-24 h-px bg-lime-400 animate-pulse" />
      <div className="absolute bottom-10 right-10 h-24 w-px bg-lime-400 animate-pulse" />
    </div>
  );
};

export default Frame;

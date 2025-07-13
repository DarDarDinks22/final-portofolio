const Frame = () => {
    return (
        <>
            <div className="absolute top-10 left-10 w-24 h-px bg-lime-400 animate-pulse" />
            <div className="absolute top-10 left-10 h-24 w-px bg-lime-400 animate-pulse" />
            <div className="absolute top-10 right-10 w-24 h-px bg-lime-400 animate-pulse" />
            <div className="absolute top-10 right-10 h-24 w-px bg-lime-400 animate-pulse" />
            <div className="absolute bottom-10 left-10 w-24 h-px bg-lime-400 animate-pulse" />
            <div className="absolute bottom-10 left-10 h-24 w-px bg-lime-400 animate-pulse" />
            <div className="absolute bottom-10 right-10 w-24 h-px bg-lime-400 animate-pulse" />
            <div className="absolute bottom-10 right-10 h-24 w-px bg-lime-400 animate-pulse" />
            <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400 rounded-full blur-xl opacity-[0.7] " />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full blur-xl opacity-[0.7] " />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-white blur-xl opacity-10 rounded-full" />
        </>
    )
};

export default Frame;
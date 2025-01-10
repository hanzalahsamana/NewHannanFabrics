
const Loader = () => {
    return (
        <div className="fixed top-0 left-0 flex items-center justify-center h-screen z-[100000] backdrop-blur-md bg-[#0000005f] w-full">
            <div className="loader border-4 border-t-blue-500 rounded-full w-12 h-12 animate-spin"></div>
        </div>
    )
}

export default Loader
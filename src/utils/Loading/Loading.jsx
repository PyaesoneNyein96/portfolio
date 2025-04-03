import './Loading.css';

const Loading = () => {
    return (
        <div className='top-wraper'>
            <div className="w-full h-screen bg-gray-500 bg-opacity-50 flex justify-center items-center pb-20">
                <div className="loader relative z-50"></div>
            </div>

        </div>

    )
};

export default Loading;
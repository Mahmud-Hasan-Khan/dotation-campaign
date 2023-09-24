
const Banner = () => {
    return (
        <div className="flex h-[600px] justify-center items-center flex-col">
            <div
                className="w-full h-[600px] bg-[url('https://i.ibb.co/drj3x0X/banner-bg.jpg')] bg-cover bg-center">
                <div className="w-full h-full flex flex-col justify-center items-center bg-white bg-opacity-90">

                    <span className="text-[#0B0B0B] text-2xl lg:text-5xl font-bold text-center">I Grow By Helping People In Need</span>

                    <div className="form-control mt-10">
                        <label className="input-group">
                            <input type="text" placeholder="Search here...." className="input input-bordered w-[220px] md:w-[360px] " />
                            <span className="bg-[#FF444A] text-white text-base font-semibold">Search</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
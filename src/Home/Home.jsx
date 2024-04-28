import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div className=" mt-24">
          

            <div  className=" w-[80%] mx-auto">
                <Banner/>
            </div>

            <div className=" my-96 bg-green-500">
                <h1>Popular Tourist Spot</h1>
            </div>
        </div>
    );
};

export default Home;
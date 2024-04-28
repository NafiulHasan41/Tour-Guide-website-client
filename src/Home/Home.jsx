import Banner from "../Banner/Banner";
import Question from "../Question/Question";



const Home = () => {
    return (
        <div className=" mt-24">
          

            <div  className=" w-[80%] mx-auto">
                <Banner/>
            </div>

            <div className=" my-40 bg-green-500">
                <h1>Popular Tourist Spot</h1>
            </div>

            <div className=" my-10 md:my-24">
                <h1 className=" text-cyan-500 drop-shadow-2xl text-xl md:text-4xl font-bold text-center my-5 md:my-10">Frequently Asked Question</h1>
                <Question/>
            </div>


        </div>
    );
};

export default Home;
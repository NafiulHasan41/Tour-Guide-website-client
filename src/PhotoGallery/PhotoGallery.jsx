

const PhotoGallery = () => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:max-h-[350px]">
            <div className=" col-span-1  ">
            <div className=" m-2 md:flex md:w-full"><img className=" w-[90%] mx-auto rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtz6dpYdp7eVd9UeuNZOOPRNQN6pNywnF7eWOoEyQ5hA&s" alt="" /></div>
            <div className=" m-2 md:flex md:w-full"><img className=" w-[90%] mx-auto rounded-xl" src="https://assets-news.housing.com/news/wp-content/uploads/2022/09/04183109/MALAYSIA-FEATURE-compressed.jpg" alt="" /></div>
            </div>
            <div className=" col-span-2 row-span-2 md:flex"><img className=" w-[90%] mx-auto rounded-xl" src="https://www.sunderbannationalpark.in/wp-content/uploads/2020/02/banner7.jpg" alt="" /></div>
            <div className=" col-span-1 md:flex md:w-full md:h-full"><img className=" w-[90%] mx-auto rounded-xl" src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/05125410/22.jpg" alt="" /></div>
           
        </div>
    );
};

export default PhotoGallery;
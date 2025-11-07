const burgers = [
  {
    id: 1,
    name: "Cheeseburger",
    price: "₹250",
    image:  "Images/BURGER.jpg",
  },
  {
    id: 2,
    name: "Classic Burger",
    price: "₹320",
    image: "Images/burger-chili-cheese-rezept.jpg",
  },
   {
    id:3,
    name: "Chicken Burger",
    price: "₹320",
    image: "Images/Purger.png",
  },
  {
    id:4,
    name: " Butter Burger",
    price: "₹320",
    image:  "Images/burger.jpeg",
  },

];

const Burgerpage = () => {
  return (
    <div className="p-10">
         
      <h1 className="text-3xl font-bold text-center mb-8">Our Burger Varieties </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {burgers.map((burger) => (
          <div
            key={burger.id}
            className="bg-white rounded-2xl shadow-lg p-4 text-center hover:shadow-2xl transition"
          >
            <img
              src={burger.image}
              alt={burger.name}
              className="rounded-xl h-40 w-full object-cover"
            />
            <h2 className="mt-3 text-lg font-semibold">{burger.name}</h2>
            <p className="text-gray-600">{burger.price}</p>
            <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Burgerpage;

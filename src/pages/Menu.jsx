import { Link } from "react-router-dom";

const Home = () => {
  const items = [
    { name: "Pizza", image: "/images/pizza.jpg", path: "/pizza" },
    { name: "Burger", image: "/images/burger.jpeg", path: "/burger" },
    { name: "Pasta", image: "/images/pasta.jpg", path: "/pasta" },
    { name: "Sandwitch", image: "/images/grilledsandwitch.jpg", path: "/sandwitch" },
    { name: "Drinks", image: "/images/RefreshingDrinks.jpg", path: "/Drinks" },
    { name: "Fries", image: "/images/french-fries-1.jpg", path: "/fries" },
    { name: "chicken", image: "/images/kfc.jpg", path: "/chicken" },
    { name: "momos", image: "/images/whole-wheat-momos-recipe.jpg", path: "/momos" },
  ];

  return (
    <div className="bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-8">
    "Where every flavor tells a story"
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 p-3 text-center"
          >
            <Link to={item.path}>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-xl mb-3"
              />
              <h2 className="text-xl font-semibold text-gray-800 hover:text-red-500">
                {item.name}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

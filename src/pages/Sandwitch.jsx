const Staters = [
  {
    id: 1,
    name: "Chicken-Sandwitch",
    price: "₹190",
    image: "/images/grilledsan.jpg",
  },
  {
    id: 2,
    name: "veg-Sandwitch",
    price: "₹100",
    image: "/images/grilledsandwitch.jpg",
  },
   {
    id:3,
    name: "panner sandwitch",
    price: "₹180",
    image: "/images/sandwich.jpg",
  },
  {
    id:4,
    name: " Mushroom sandwitch",
    price: "₹120",
    image: "/images/grilledsan.jpg",
    
  },

];

const Sandwitch = () => {
  return (
    <div className="p-10">
         
      <h1 className="text-3xl font-bold text-center mb-8">Sandwitch </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {Staters.map((stater) => (
          <div
            key={stater.id}
            className="bg-white rounded-2xl shadow-lg p-4 text-center hover:shadow-2xl transition"
          >
            <img
              src={stater.image}
              alt={stater.name}
              className="rounded-xl h-40 w-full object-cover"
            />
            <h2 className="mt-3 text-lg font-semibold">{stater.name}</h2>
            <p className="text-gray-600">{stater.price}</p>
            <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sandwitch;

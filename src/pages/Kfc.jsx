const Chickens= [
  {
    id: 1,
    name: "6-piece combo",
    price: "₹290",
    image: "/images/Kfc.jpg",
  },
  {
    id: 2,
    name: "wings",
    price: "₹150",
    image: "/images/kfc-fried-chicken-masala.jpg",
  },
   {
    id:3,
    name: "chicken thig",
    price: "₹350",
    image: "/images/FREESTRIPS.jpg",
  },
  {
    id:4,
    name: "smoky grilled ",
    price: "₹320",
    image: "/images/KFC1jpg.jpg",
  },

];

const Kfc = () => {
  return (
    <div className="p-10">
         
      <h1 className="text-3xl font-bold text-center mb-8">Chicken</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {Chickens.map((chicken) => (
          <div
            key={chicken.id}
            className="bg-white rounded-2xl shadow-lg p-4 text-center hover:shadow-2xl transition"
          >
            <img
              src={chicken.image}
              alt={chicken.name}
              className="rounded-xl h-40 w-full object-cover"
            />
            <h2 className="mt-3 text-lg font-semibold">{chicken.name}</h2>
            <p className="text-gray-600">{chicken.price}</p>
            <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kfc;

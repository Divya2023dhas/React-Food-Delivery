const Stars = [
  {
    id: 1,
    name: "Chicken-Momo",
    price: "₹190",
    image: "images/chicken-momo.jpeg",
  },
  {
    id: 2,
    name: "veg-momo",
    price: "₹200",
    image: "images/momos.jpg",
  },
   {
    id:3,
    name: "Veg-Spicy Momo",
    price: "₹180",
    image: "images/momo2.jpeg",
  },
  {
    id:4,
    name: " Steam-WheatMomo",
    price: "₹320",
    image: "images/Recipemomo.jpg",
    
  },

];

const Momos = () => {
  return (
    <div className="p-10">
         
      <h1 className="text-3xl font-bold text-center mb-8">Our Noodles & Pasta Varieties </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {Stars.map((star) => (
          <div
            key={star.id}
            className="bg-white rounded-2xl shadow-lg p-4 text-center hover:shadow-2xl transition"
          >
            <img
              src={star.image}
              alt={star.name}
              className="rounded-xl h-40 w-full object-cover"
            />
            <h2 className="mt-3 text-lg font-semibold">{star.name}</h2>
            <p className="text-gray-600">{star.price}</p>
            <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Momos;

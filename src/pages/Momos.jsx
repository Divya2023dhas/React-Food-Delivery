const Stars = [
  {
    id: 1,
    name: "veg momos",
    price: "₹190",
    image: "/images/momos.jpg",
  },
  {
    id: 2,
    name: "spicy momos",
    price: "₹200",
    image: "/images/momo2.jpeg",
  },
   {
    id:3,
    name: "veg-spicy noodless",
    price: "₹180",
    image: "/images/noodles1.jpg",
  },
  {
    id:4,
    name: " chicken noodless",
    price: "₹320",
    image: "/images/noodles.jpeg",
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

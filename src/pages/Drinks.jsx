const stars = [
  {
    id: 1,
    name: "Mojito",
    price: "₹250",
    image: "images/Drink1.jpg",
  },
  {
    id: 2,
    name: "Fresh juice",
    price: "₹320",
    image:"Images/drinks2.jpg",
  },
   {
    id:3,
    name: "soda-juice",
    price: "₹320",
    image: "Images/RefreshingDrinks.jpg",
  },
 

];

const Drinks = () => {
  return (
    <div className="p-10">
        
      <h1 className="text-3xl font-bold text-center mb-8">Chill &Cool</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 p-8">
        {stars.map((star) => (
          <div
            key={star.id}
            className="bg-white rounded-2xl shadow-lg p-4 text-center hover:shadow-2xl transition"
          >
            <img
              src={star.image}
              alt={star.name}
              className="rounded-xl h-56 w-full object-cover"
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

export default Drinks;


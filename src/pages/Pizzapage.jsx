const pizzas = [
  {
    id: 1,
    name: "Margherita",
    price: "₹250",
    image:  process.env.PUBLIC_URL +"/images/PIZ1.jpeg",
  },
  {
    id: 2,
    name: "Cheese Burst",
    price: "₹320",
    image:  process.env.PUBLIC_URL +"/images/PIZZ2.jpg",
  },
   {
    id:3,
    name: "VEG -loaaded ",
    price: "₹320",
    image: process.env.PUBLIC_URL + "/images/Pizza.jpg",
  },
  {
    id:4,
    name: "Honey-carlic chicken ",
    price: "₹320",
    image:  process.env.PUBLIC_URL +"/images/Pizza-3007395.jpg",
  },

];

const PizzaPage = () => {
  return (
    <div className="p-10">
         <div className="relative">
        <img
          src={process.env.PUBLIC_URL +"/images/deals.jpg" }  
          alt="Pizza Banner"
          className="w-full h-auto object-contain"
        />
        </div>
      <h1 className="text-3xl font-bold text-center mb-8">Our Pizza Varieties 🍕</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {pizzas.map((pizza) => (
          <div
            key={pizza.id}
            className="bg-white rounded-2xl shadow-lg p-4 text-center hover:shadow-2xl transition"
          >
            <img
              src={pizza.image}
              alt={pizza.name}
              className="rounded-xl h-40 w-full object-cover"
            />
            <h2 className="mt-3 text-lg font-semibold">{pizza.name}</h2>
            <p className="text-gray-600">{pizza.price}</p>
            <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaPage;

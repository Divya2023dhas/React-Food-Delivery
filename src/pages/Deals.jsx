import { Link } from "react-router-dom";
const  Panners = [
  {
    id: 1,
   image: "Images/Orange Red and Yellow Bold Burger Day Offer Instagram Post.png",
  },
  {
    id: 2,
   
    image: "Images/Red Black Modern Boneless Chicken Food Instagram Post.png",
  },
   {
    id:3,
    image:"Images/KFC1jpg.jpg",
  },
  {
    id:4,
   
    image: "Images/Pizza-3007395.jpg",
  },

];

const Deals = () => {
  return (
    <div className="p-10">
         <div className="relative">
        <img
          src="Images/Red White Orange Modern Minimalist Fast-food Promotion Banner.png"  
          alt="Pizza Banner"
          className="w-full h-auto object-contain"
        />
        </div>
      <h1 className="text-3xl font-bold text-center mb-8">Hot Deals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {Panners.map((panner) => (
          <div
            key={panner.id}
            className="bg-white rounded-2xl shadow-lg p-4 text-center hover:shadow-2xl transition"
          > 
          
          
          <img
              src={panner.image}
              alt={panner.name}
              className="rounded-xl h-40 w-full object-cover"
          />
          <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;

import { Link } from "react-router-dom";

const Thanku = () => {
  return (
    <>
     <div className="flex items-center justify-center h-[100px] bg-[#EDEDE9]">
      <h1 className="text-4xl font-bold text-green-600">
        Thank you, Your Response!
      </h1>
      
      </div>
     <div className="flex justify-center">
      <Link to="/first">
          <button className="bg-[#1F618D] text-white border font-bold border-gray-300 py-2 px-[50px] rounded-lg hover:bg-[#F89A00] hover:text-white transition duration-300">
            PREV
          </button>
      </Link>
     </div>
    </>
  );
};

export default Thanku;

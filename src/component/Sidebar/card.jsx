import React from "react";
import { FaShoppingCart, FaChartLine, FaUsers } from "react-icons/fa";

function Card() {
  return (
    <div className="container mx-auto flex flex-wrap justify-center gap-6 p-4">
      {/* Card 1 */}
      <div className="card1 bg-white shadow-lg rounded-lg p-6 w-full sm:w-80">
        <div className="flex items-center justify-center mb-4">
          <FaShoppingCart className="text-blue-500 text-4xl" />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-blue-500 transition-colors duration-300">
            Total Sales
          </h3>
          <p className="text-gray-600 text-sm hover:text-blue-400 transition-colors duration-300">
            Track the total sales made this week. Analyze trends and improve your sales strategy.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card1 bg-white shadow-lg rounded-lg p-6 w-full sm:w-80">
        <div className="flex items-center justify-center mb-4">
          <FaChartLine className="text-green-500 text-4xl" />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-green-500 transition-colors duration-300">
            Revenue Growth
          </h3>
          <p className="text-gray-600 text-sm hover:text-green-400 transition-colors duration-300">
            Monitor your revenue growth and identify key areas for improvement.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card1 bg-white shadow-lg rounded-lg p-6 w-full sm:w-80">
        <div className="flex items-center justify-center mb-4">
          <FaUsers className="text-purple-500 text-4xl" />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-purple-500 transition-colors duration-300">
            Customer Engagement
          </h3>
          <p className="text-gray-600 text-sm hover:text-purple-400 transition-colors duration-300">
            Understand customer behavior and improve engagement with personalized strategies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
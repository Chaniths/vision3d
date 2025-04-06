import { Star } from "lucide-react";

const StarRating = ({ filled = 5 }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={18}
          className={i < filled ? "text-[#0A1930]" : "text-gray-400"}
          fill={i < filled ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <div className="bg-white py-16 px-4 md:px-20 text-center space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Users love the ease of use and functionality
        </h2>
        <p className="text-gray-600 text-lg">
          4.0 Based on over 100 user reviews
        </p>
        <div className="flex justify-center">
          <StarRating filled={4} />
        </div>
      </div>

      {/* Testimonials */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Testimonial 1 */}
        <div className="border-2 border-[#0A1930] rounded-lg p-6 text-left space-y-4">
          <StarRating filled={5} />
          <p className="text-gray-700">
            This is a great resource for both personal and professional use. As
            a professional, look forward to using this as a tool for my design
            concepts and plans.
          </p>
          <p className="font-semibold">Anne</p>
        </div>

        {/* Testimonial 2 */}
        <div className="border-2 border-[#0A1930] rounded-lg p-6 text-left space-y-4">
          <StarRating filled={5} />
          <p className="text-gray-700">
            Great product so far, even with no design skills you can quickly put
            something together! Love the interface and the library seems quite
            extensive as well.
          </p>
          <p className="font-semibold">Frank</p>
        </div>
      </div>
    </div>
  );
}
import { Star } from "lucide-react";
import { testimonials } from "../constant/temtimonial";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial,index) => (
          <motion.div
            key={testimonial.id}
            className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm md:max-w-md lg:max-w-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-2 text-orange-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-600 italic">&quot;{testimonial.review}&quot;</p>
            <h4 className="font-bold mt-4">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;

import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import MaxWidthContainer from "@/components/shared/max-width-container";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 space-y-8">
        
     
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Contact Us
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            We’d love to hear from you! Fill out the form below or reach out directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
         
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-1 w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="mt-1 w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#D55053] text-white font-medium py-3 rounded-lg hover:bg-pink-700 transition mx-auto"
            >
              Send Message
            </button>
          </form>

        
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Our Office</h2>
              <p className="text-gray-600 dark:text-gray-400">
               234 JobHub St, Lagos, Nigeria
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h2>
              <p className="text-gray-600 dark:text-gray-400">jobhub@gmail.com</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h2>
              <p className="text-gray-600 dark:text-gray-400">+234 800 123 4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

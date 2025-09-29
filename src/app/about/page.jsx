import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import MaxWidthContainer from "@/components/shared/max-width-container";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
     
      <section className="text-center py-16 px-6 bg-[#FAE9D7] text-[#30232d]">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          At <span className="font-semibold">JobHub</span>, we connect
          talented professionals with top companies across Nigeria. Our mission
          is to simplify the hiring process while empowering individuals to
          build meaningful careers.
        </p>
      </section>

     
      <section className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-3 text-[#30232d]">Our Mission</h2>
          <p className="text-gray-600">
            To create opportunities by bridging the gap between employers and job
            seekers through technology, trust, and transparency.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-3 text-[#30232d]">Our Vision</h2>
          <p className="text-gray-600">
            To be Africa’s leading job-matching platform, empowering millions to
            build meaningful careers.
          </p>
        </div>
      </section>

     
      <section className="py-16 px-6 bg-white max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#30232d]">
          What We Do
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 text-[#30232d]">
          <li className="p-4 border-l-4 border-[#30232d] bg-gray-50 rounded">
            Curated job opportunities across industries.
          </li>
          <li className="p-4 border-l-4 border-[#30232d] bg-gray-50 rounded">
            Easy application process for job seekers.
          </li>
          <li className="p-4 border-l-4 border-[#30232d] bg-gray-50 rounded">
            Tools for companies to find the right talent faster.
          </li>
          <li className="p-4 border-l-4 border-[#30232d] bg-gray-50 rounded">
            Focus on quality, not just quantity of listings.
          </li>
        </ul>
      </section>

     
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#30232d]">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {["Integrity", "Innovation", "Community", "Growth"].map((value) => (
            <div key={value} className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">{value}</h3>
              <p className="text-gray-600">
                {value === "Integrity" &&
                  "We value honesty and fairness in every connection."}
                {value === "Innovation" &&
                  "Leveraging technology to make job search smarter."}
                {value === "Community" &&
                  "Building strong relationships between employers and seekers."}
                {value === "Growth" &&
                  "Helping individuals and businesses achieve their goals."}
              </p>
            </div>
          ))}
        </div>
      </section>

     
      <section className="text-center py-16 px-6 bg-[#FAE9D7] text-[#30232d]">
        <h2 className="text-4xl font-bold mb-4">
          Ready to take the next step in your career?
        </h2>
        <p className="max-w-xl mx-auto mb-6">
          Explore opportunities today and let’s shape the future of work
          together.
        </p>
        <button className="bg-[#D55053] text-[#FAE9D7] px-6 py-3 rounded font-semibold hover:bg-[#f1c095] transition">
          Browse Jobs
        </button>
      </section>
    
    </div>
  );
}
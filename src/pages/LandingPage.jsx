import { Link } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const LandingPage = () => {
 
  const features = [
    {
      title: "Experienced Instructors",
      description: "Customized courses based on your goals.",
    },
    {
      title: "AI Tutor Assistance",
      description: "24×7 help with your queries and assignments.",
    },
    {
      title: "Smart Job Matching",
      description: "Find jobs tailored to your skills and progress.",
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-900 img">
    {/* Hero Section */}
    <section className="text-center pt-24  px-8">
      <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg 
                     animate-fade-up transition-all duration-500 hover:scale-105 bg-gradient-to-r from-[#E63946] via-[#457B9D] to-[#1D3557] 
               bg-clip-text text-transparent">
        A Whole Universe of Learning
      </h1>
      <p className="text-lg text-gray-200 mb-8 animate-fade-in">
        A complete education plateform ! By <span className="text-red-600 underline text-2xl font-bold">Sheryians</span> 
      </p>
       <Link to={'/upload'} className="bg-[#E63946] font-semibold text-white px-8 py-3 rounded-xl shadow-lg transition-all 
                         duration-300 transform hover:scale-105 hover:bg-[#FF6B9F] hover:shadow-2xl">
                    Get Started       
       </Link>
       
    </section>
  
    {/* Features Section */}
    <section className="py-8 bg-[#EEF1F6] bg-zinc-900 overflow-hidden">
      <h2 className="text-4xl font-extrabold text-center text-[#1D3557] mb-12
                     transition-all duration-500 hover:scale-102 hover:text-[#E63946] bg-gradient-to-r from-[#E63946] via-[#457B9D] to-[#1D3557] 
               bg-clip-text text-transparent">
        Our Key Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="transform transition-all duration-300 hover:shadow-xl">
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
    </section>
  
    {/* Footer */}
    <Footer />
  </div>
  
  );
};

export default LandingPage;

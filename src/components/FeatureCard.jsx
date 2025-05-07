const FeatureCard = ({ title, description ,icon }) => {
    return (
      <div className="bg-gradient-to-r from-[#6495ED] to-[#CCCCFF] p-6 rounded-2xl shadow-xl text-center transform transition-all duration-300 
      hover:scale-102 hover:shadow-2xl">
{/* Icon with Animated Glow */}
<div className="text-4xl mb-4 black transition-all duration-300 hover:scale-110 ">
{icon}
</div>

{/* Title with Smooth Transition */}
<h3 className="text-xl font-bold text-zinc-700 mb-2 transition-all duration-500 ">
{title}
</h3>

{/* Description with Soft Visibility Effect */}
<p className="text-zinc-100 transition-all duration-300 hover:text-gray-500">
{description}
</p>
</div>

    );
  };
  
  export default FeatureCard;
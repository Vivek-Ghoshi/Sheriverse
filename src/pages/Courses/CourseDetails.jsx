import { useDispatch, useSelector } from "react-redux";
import { enrollCourse, getEnrolledCourses, verifyPayment } from "../../redux/features/StudentSlice";
import { useNavigate, useParams } from "react-router-dom";
import { GraduationCap, Clock, DollarSign, User2, PlayCircle, Zap } from "lucide-react";
import loadRazorpay from "../../utils/razorpayLoader";
import toast from "react-hot-toast";
import { createOrder } from "../../redux/features/PaymentSlice";


const CourseDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { courseDetails } = useSelector((state) => state.student);
  const {user} = useSelector(state => state.auth.user);
  const { loading } = useSelector((state) => state.payment);
 
   const handlePayment = async (id) => {
    const razorpayLoaded = await loadRazorpay();
    if (!razorpayLoaded) {
      toast.error("Razorpay SDK failed to load.");
      return;
    }

    try {
      const res = await dispatch(createOrder(id)).unwrap();

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: res.amount,
        currency: "INR",
        name: "Sheriverse LMS",
        description: courseDetails.title,
        order_id: res.orderId,
        handler: async function (response) {
          const paymentData = {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
            courseId: id,
          };

          const success = await dispatch(verifyPayment(paymentData)).unwrap();
          if (success) {
            toast.success("Payment successful! You're enrolled.");
                navigate("/student/dashboard");

          }
        },
        prefill: {
          name: user?.name,
          email: user?.email,
        },
        theme: {
          color: "#1D3557",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      toast.error(error || "Something went wrong");
    }
  };
  // const enrollHandler = (id) => {
  //   dispatch(enrollCourse(id));
  //   navigate("/student/dashboard");
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1D3557] to-[#000000] text-white py-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Hero Video Section */}
        <div className="relative w-full h-[250px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg border border-zinc-700">
          <video
            controls
            autoPlay
            muted
            loop
            src={courseDetails.introUrl}
            className="w-full h-full object-cover"
          ></video>
          <div className="absolute top-4 left-4 bg-black bg-opacity-50 p-2 rounded-lg text-sm flex items-center gap-2">
            <PlayCircle size={18} />
            Intro Video
          </div>
        </div>

        {/* Title and Description */}
        <div className="mt-10 px-2">
          <h1 className="text-4xl sm:text-5xl font-extrabold capitalize mb-4 tracking-wide text-white">
            {courseDetails.title}
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-3xl">
            {courseDetails.description}
          </p>
        </div>

        {/* Course Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 text-lg">
          <div className="flex items-center gap-3 bg-zinc-800 p-4 rounded-lg shadow hover:scale-[1.02] transition">
            <User2 className="text-blue-400" />
            <span>Instructor: {courseDetails.instructor?.name}</span>
          </div>
          <div className="flex items-center gap-3 bg-zinc-800 p-4 rounded-lg shadow hover:scale-[1.02] transition">
            <Clock className="text-yellow-400" />
            <span>Duration: {courseDetails.duration}</span>
          </div>
          <div className="flex items-center gap-3 bg-zinc-800 p-4 rounded-lg shadow hover:scale-[1.02] transition">
            <DollarSign className="text-green-400" />
            <span>Price: ₹{courseDetails.price}</span>
          </div>
        </div>

        {/* Syllabus */}
        {courseDetails.syllabus?.length > 0 && (
          <>
            <h2 className="text-3xl font-semibold mt-12 mb-4">📘 What You'll Learn</h2>
            <ul className="space-y-2 bg-zinc-900 p-6 rounded-xl border border-zinc-700">
              {courseDetails.syllabus.map((item, index) => (
                <li key={index} className="text-zinc-300 text-lg list-disc ml-6">
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Call to Action */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gradient-to-r from-[#2ED573] via-[#43B581] to-[#1DD1A1] p-6 rounded-2xl shadow-xl text-black">
          <div className="mb-4 sm:mb-0">
            <h3 className="text-2xl sm:text-3xl font-bold">Don’t Miss Out!</h3>
            <p className="text-md sm:text-sm font-medium">
              Thousands have already started. Make your future self proud.
            </p>
          </div>
          <button
            onClick={()=>handlePayment(id)}
            disabled={loading}
            className="bg-black text-white font-semibold px-8 py-3 rounded-xl shadow hover:bg-zinc-800 transition-all duration-300 hover:scale-105"
          >
            {loading ? "Processing..." : courseDetails.price === 0 ? "Enroll for Free" : `Buy ₹${courseDetails.price}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

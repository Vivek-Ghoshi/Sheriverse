import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { assignment } from "../redux/features/StudentSlice";

const AssignmentsQuizzes = () => {
    const dispatch = useDispatch();
    const {assignments} = useSelector(state => state.student);

    useEffect(()=>{
      dispatch(assignment());
    },[]);

    return (
      <div className="min-h-screen bg-gray-900 text-white px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Assignments & Quizzes</h1>
  
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {assignments?.map((task) => (
            <div
              key={task._id}
              className={`p-6 rounded-lg shadow-lg ${
                task.status === "Completed"
                  ? "bg-green-700"
                  : task.status === "In Progress"
                  ? "bg-yellow-600"
                  : "bg-red-700"
              }`}
            >
              <h2 className="text-2xl font-semibold capitalize">{task.title}</h2>
              <h2 className="text-2xl font-semibold text-sm">{task.description}</h2>
              {/* <p className="mt-2">Type: {task.type}</p> */}
              {/* <p className="mt-2">Due Date: {task.dueDate}</p> */}
              {/* <p className="mt-2">Status: {task.status}</p> */}
  
              <button
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg transition duration-300"
                disabled={task.status === "Completed"}
              >
                {task.status === "Completed" ? "Submitted" : "Submit Now"}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default AssignmentsQuizzes;
  
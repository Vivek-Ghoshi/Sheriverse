import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  LandingPage from './pages/LandingPage'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import StudentDashboard from './pages/Dashboard/StudentDashboard'
import InstructorDashboard from './pages/Dashboard/InstructorDashboard'
import CourseCreation from './pages/CourseCreation'
import AdminDashboard from './pages/Dashboard/AdminDashboard'
import CourseList from './pages/Courses/CourseList'
import CourseDetails from './pages/Courses/CourseDetails'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import AssignmentsQuizzes from './pages/AssignmentsQuizzes'
import MyCourses from './pages/MyCourses'
import AddInstructor from './pages/AddInstructor'
import Instructors from './pages/Profile/Instructors'
import CreateAssignment from './pages/CreateAssignment'
import Allassignments from './pages/Allassignments'
import AboutUs from './pages/AboutUs'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        {/* {public routes} */}
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/about' element={ <AboutUs/> }/>

        {/* {Student Routes} */}
        <Route path='/student/dashboard' element={ <StudentDashboard/> }/>
        {/* <Route path='/student/profile' element={ <Profile/> }/> */}
        {/* <Route path='/student/job-matchings' element={ <JobMatching/> }/> */}
        {/* <Route path='/student/ai-tutor' element={ <AITutor/> }/> */}
        <Route path='/student/assignments-quiz' element={ <AssignmentsQuizzes/> }/>

        {/* {Instructor Routes} */}
        <Route path='/instructor/dashboard' element={ <InstructorDashboard/> }/>
        {/* <Route path='/instructor/profile' element={ <InstructorDashboard/> }/> */}
        {/* <Route path='/instructor/ai-content' element={ <ContentGenerator/> }/> */}
        <Route path='/admin/create-course' element={ <CourseCreation/> }/>
        <Route path='/instructor/assignments-quiz' element={ <AssignmentsQuizzes/> }/>
        <Route path='/instructor/create-assignment' element={ <CreateAssignment/> }/>
        <Route path='/instructor/all-assignment' element={ <Allassignments/> }/>


        {/* {Admin Routes} */}
        <Route path='/admin/dashboard' element={ <AdminDashboard/> }/>
        <Route path='/admin/add-instructor' element={ <AddInstructor/> }/>
        <Route path='/admin/all-instructors' element={ <Instructors/> }/>

        {/* {Cousers Routes } */}
        <Route path='/courses' element={ <CourseList/>}/>
        <Route path='/Enrolled-courses' element={ <MyCourses/> }/>
        
        <Route path='/courses/:id' element={ <CourseDetails/> }/>

        {/* {Ai Hub} */}
        {/* <Route path='/ai-hub' element={ <AIHub/> }/> */}

        {/* {notFound route} */}
        <Route path='*' element={ <NotFound/> }/>
      </Routes>
    </>
  )
}

export default App

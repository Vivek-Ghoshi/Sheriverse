import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../../utils/apis/ApiInstance";

export const enrollCourse = createAsyncThunk("student/enroll", async (id) => {
  try {
    await apiInstance.get(`/student/courses/${id}/enroll`);
    return id;
  } catch (error) {
    console.log(error.message);
  }
});

export const getEnrolledCourses = createAsyncThunk(
  "student/getenrolledcourses",
  async () => {
    try {
      const { data } = await apiInstance.get(`/student/enrolled-courses`);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
export const getDetails = createAsyncThunk(
  "student/course-details",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await apiInstance.get(`/student/courses/${id}`);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(
        error.respose?.data || "Something went wrong in fetching details"
      );
    }
  }
);
export const getCourseContent = createAsyncThunk(
  "student/getcoursecontent",
  async (id) => {
    try {
      const { data } = await apiInstance.get(`/student/courses/${id}/content`);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const assignment = createAsyncThunk("student/assignments", async () => {
  const { data } = await apiInstance.get("/student/assignments");
  return data;
});

export const editProfile = createAsyncThunk(
  "student/editprofile",
  async (details,thunkAPI) => {
    const { data } = await apiInstance.post("/student/edit-profile", details, {
      headers: {
                "Content-Type": "multipart/form-data",
              },
    });
    await thunkAPI.dispatch(studentProfile());
    return data;
  }
);
export const submitAssignment = createAsyncThunk(
  "student/submitassignment",
  async ({ id, submissionData }) => {
    try {
      const { data } = await apiInstance.post(
        `/student/assignments/${id}/submit`,
        submissionData
      );
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

//verify razorpay order
export const verifyPayment = createAsyncThunk("verifypayment",async(paymentData,thunkAPI)=>{
    try {
        const {data} = await apiInstance.post("/payment/verify",paymentData);
        await thunkAPI.dispatch(getEnrolledCourses());
        return data;
    } catch (error) {
        console.log(error.message);
    }
})

export const studentProfile = createAsyncThunk("studentprofile",async()=>{
  try {
    const {data} = await apiInstance.get("/student/profile");
    return data;
  } catch (error) {
    console.log(error.message);
  }
})
const studentSlice = createSlice({
  name: "student",
  initialState: {
    student: null,
    enrollCourses: [],
    courseContent: {},
    courseDetails: {},
    assignments: [],
    submittedassignments: [],
    loading: false,
    error:null,
    success:false
  },
  reducres: {},
  extraReducers: (builder) => {
    builder
      //    .addCase(getCourses.fulfilled,(state,action)=> {
      //     state.courses = action.payload;
      //    })
      // .addCase(enrollCourse.fulfilled, (state, action) => {
      //   state.enrollCourses.push(action.payload);
      // })
      .addCase(getEnrolledCourses.fulfilled, (state, action) => {
        state.enrollCourses = action.payload;
      })
      .addCase(getCourseContent.pending, (state) => (state.loading = true))
      .addCase(getCourseContent.fulfilled, (state, action) => {
        state.loading = false;
        state.courseContent = action.payload;
      })
      .addCase(getDetails.fulfilled, (state, action) => {
        state.courseDetails = action.payload;
      })
      .addCase(assignment.fulfilled, (state, action) => {
        state.assignments = action.payload;
      })
      .addCase(submitAssignment.fulfilled, (state, action) => {
        state.submittedassignments.push(action.payload);
      })
      .addCase(editProfile.pending,(state)=>{
        state.loading = true;
      })
      .addCase(editProfile.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(verifyPayment.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyPayment.fulfilled, (state,action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(verifyPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(studentProfile.fulfilled, (state,action)=>{
         state.student = action.payload;
      })
  },
});

export default studentSlice.reducer;

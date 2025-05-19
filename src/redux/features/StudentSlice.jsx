import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../../utils/apis/ApiInstance";

export const enrollCourse = createAsyncThunk("student/enroll", async (id) => {
  try {
    await apiInstance.get(`/student/courses/${id}/enroll`, {
      withCredentials: true,
    });
    return id;
  } catch (error) {
    console.log(error.message);
  }
});

export const getEnrolledCourses = createAsyncThunk(
  "student/getenrolledcourses",
  async () => {
    try {
      const { data } = await apiInstance.get(`/student/enrolled-courses`, {
        withCredentials: true,
      });
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
      const { data } = await apiInstance.get(`/student/courses/${id}`, {
        withCredentials: true,
      });
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
  const { data } = await apiInstance.get("/student/assignments", {
    withCredentials: true,
  });
  return data;
});

export const editProfile = createAsyncThunk(
  "student/editprofile",
  async (details) => {
    for (let pair of details.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    const { data } = await apiInstance.post("/student/edit-profile", details, {
      headers: {
                "Content-Type": "multipart/form-data",
              },
      withCredentials: true,
    });
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
  },
  reducres: {},
  extraReducers: (builder) => {
    builder
      //    .addCase(getCourses.fulfilled,(state,action)=> {
      //     state.courses = action.payload;
      //    })
      .addCase(enrollCourse.fulfilled, (state, action) => {
        state.enrollCourses.push(action.payload);
      })
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
      .addCase(editProfile.fulfilled, (state, action) => {
        state.student = action.payload;
      });
  },
});

export default studentSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../../utils/apis/ApiInstance";
import { submitAssignment } from "./StudentSlice";

export const createAssignment = createAsyncThunk(
  "instructor/assignment",
  async (formData) => {
    try {
      const { data } = await apiInstance.post(
        `/instructor/create-assignment`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
export const getAssignments = createAsyncThunk(
  "instructor/getAssignments",
  async () => {
    try {
      const { data } = await apiInstance.get(`/instructor/assignments`, {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const getAssignmentSubmissions = createAsyncThunk(
  "instructor/getAssignmentSubmissions",
  async (id) => {
    try {
      const { data } = await apiInstance.get(
        `/instructor/assignments/${id}/submissions`
      );
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const updateAssignment = createAsyncThunk(
  "instructor/updateAssignment",
  async ({ id, formData }) => {
    try {
      const { data } = await apiInstance.post(
        `/instructor/assignments/${id}/update`,
        formData,
        { withCredentials: true }
      );
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const deleteAssignment = createAsyncThunk(
  "instructor/deleteAssignment",
  async (id) => {
    try {
      await apiInstance.get(`/instructor/assignments/${id}/delete`, {
        withCredentials: true,
      });
      return id;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const instructorSlice = createSlice({
  name: "instructor",
  initialState: { assignments: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAssignment.fulfilled, (state, action) => {
        state.assignments.push(action.payload);
      })
      .addCase(getAssignments.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAssignments.fulfilled, (state, action) => {
        state.loading = false;
        state.assignments = action.payload;
      })
      .addCase(getAssignmentSubmissions.fulfilled, (state, action) => {
        const { id, submissions } = action.payload;
        const assignmentIndex = state.assignments.findIndex((a) => a.id === id);
        if (assignmentIndex != -1) {
          state.assignments[assignmentIndex].submissions = submissions;
        }
      })
      .addCase(updateAssignment.fulfilled, (state, action) => {
        const index = state.assignments.findIndex(
          (a) => a._id === action.payload._id
        );
        if (index !== -1) {
          state.assignments[index] = action.payload;
        }
      })
      .addCase(deleteAssignment.fulfilled, (state, action) => {
        state.assignments = state.assignments.filter(
          (assign) => assign.id !== action.payload
        );
      });
  },
});

export default instructorSlice.reducer;

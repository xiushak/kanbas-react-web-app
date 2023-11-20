import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
  assignments: db.assignments,
  assignment: {
    title: "New Assignment",
    description: "New Description",
    points: 100,
  },
};

const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments
        .find((assignment) => assignment.course === action.payload.course)
        .assignments.push({
          _id: new Date().getTime().toString(),
          title: action.payload.title,
          description: action.payload.description,
          points: action.payload.points,
        });
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignmentGroup) => {
        if (
          assignmentGroup.assignments &&
          assignmentGroup.course === action.payload.course
        ) {
          return {
            ...assignmentGroup,
            assignments: assignmentGroup.assignments.filter(
              (assignment) => assignment._id !== action.payload._id
            ),
          };
        } else {
          return assignmentGroup;
        }
      });
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignmentGroup) => {
        if (
          assignmentGroup.assignments &&
          assignmentGroup.course === action.payload.courseId
        ) {
          return {
            ...assignmentGroup,
            assignments: assignmentGroup.assignments.map((assignment) => {
              if (assignment._id === action.payload._id) {
                return {
                  ...assignment,
                  title: action.payload.title,
                  description: action.payload.description,
                  points: action.payload.points,
                };
              } else {
                return assignment;
              }
            }),
          };
        } else {
          return assignmentGroup;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} = assignmentSlice.actions;
export default assignmentSlice.reducer;

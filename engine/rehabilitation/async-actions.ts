// Modules
import { createAsyncThunk } from "@reduxjs/toolkit";

import { mockExercise } from "../../constants/mockExercise";

const getRehabillitationsAsync = createAsyncThunk(
  "rehabillitation/get-rehabillitation",
  async () => {
    return new Promise((res) => {
      setTimeout(() => {
        res([
          {
            id: 1,
            name: "Knee to chest",
            imageUrl: "https://reactjs.org/logo-og.png",
            descriptions: [
              {
                description1:
                  "Lie on your back with your knees bent and feet flat on the floor.",
              },
              {
                description2:
                  "Bring one knee to your chest, helping yourself with the hands under your thigh.",
              },
              {
                description3:
                  "Return to the starting position and repeat with the same leg.",
              },
            ],
          },
          {
            id: 2,
            name: "Knee to arm",
            imageUrl: "https://reactjs.org/logo-og.png",
            descriptions: [
              {
                description1:
                  "Lie on your back with your knees bent and feet flat on the floor.",
              },
              {
                description2:
                  "Bring one knee to your chest, helping yourself with the hands under your thigh.",
              },
              {
                description3:
                  "Return to the starting position and repeat with the same leg.",
              },
            ],
          },
        ]);
      }, 700);
    }).then((res) => res);
  }
);

const getFilteredRehabillitationAsync = createAsyncThunk(
  "rehabillitation/filter-rehabillitation",
  async (name: any) => {
    return new Promise((res) => {
      setTimeout(() => {
        res(
          mockExercise.filter((exercise) => {
            if (name === "") {
              return exercise;
            } else if (
              exercise.name.toLowerCase().includes(name.toLowerCase())
            ) {
              return exercise;
            }
          })
        );
        console.log(res, "res");
      }, 100);
    }).then((res) => res);
  }
);

const rehabillitationActionsAsync = {
  getRehabillitationsAsync,
  getFilteredRehabillitationAsync,
};

export default rehabillitationActionsAsync;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://65411ae3f0b8287df1fdcfbe.mockapi.io/asm_fer/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const json = await response.json();
      return json;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const readAllUsers = createAsyncThunk(
  "readAllUsers",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://65411ae3f0b8287df1fdcfbe.mockapi.io/asm_fer/users"
    );
    console.log(response);
    try {
      const json = await response.json();
      return json;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://65411ae3f0b8287df1fdcfbe.mockapi.io/asm_fer/users/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const json = await response.json();
      return json;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://65411ae3f0b8287df1fdcfbe.mockapi.io/asm_fer/users/${id}`,
      {
        method: "DELETE",
      }
    );
    try {
      const json = await response.json();
      return json;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const userSlice = createSlice({
  name: "userSlice", //ten nay lam prefix cho action
  initialState: {
    users: [],
    loading: false,
    error: null,
  }, 

  extraReducers: {
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [readAllUsers.pending]: (state) => {
      state.loading = true;
    },
    [readAllUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [readAllUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteUser.pending]: (state) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;

      const { id } = action.payload; //xoa xong ra payload ve la object bi xoa {id: .., name: ...}
      if (id) {
        state.users = state.users.filter((el) => el.id !== id);
      }
      // state.users = action.payload;
      console.log("delete: ", action.payload);
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [updateUser.pending]: (state) => {
      state.loading = true;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = state.users.map((us) =>
        us.id === action.payload.id ? action.payload : us
      ); //neu id user trung voi id tra ve tu payload thi lay payload con ko lay user cu
    },
    [updateUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;


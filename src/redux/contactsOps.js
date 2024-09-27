import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66eb06c555ad32cda47b6b39.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const respons = await axios.get("/contacts");
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      console.log(contact, "contact");
      const respons = await axios.post("/contacts", { ...contact });
      console.log(respons.data, "respons");
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const respons = await axios.delete(`/contacts/${contactId}`);
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    success: null,
    msg: '',
    listings: []
}

const baseUrl = 'http://localhost:3000/api/v1';

// default fetch data function

export const getListings = createAsyncThunk('get/listings', async (queryObj, thunkAPI) => {
    try {
        // const res = await axios.get(baseUrl + `?city=${queryObj.city}&transactionType=${queryObj.transactionType}&propertyType=${queryObj.propertyType}&beds=${queryObj.beds}`);
        const res = await axios.get(baseUrl);
        return res.data;
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

// search listings function
export const searchListings = createAsyncThunk('search/listings', async (queryObj, thunkAPI) => {
    try {
        const res = await axios.get(baseUrl + `?city=${queryObj.city}&transactionType=${queryObj.transactionType}&propertyType=${queryObj.propertyType}&beds=${queryObj.beds}`);
        return res.data;
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

const listingSlice = createSlice({
    name: 'listings',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(searchListings.pending, (state) => {
            state.isLoading = true
        }).addCase(searchListings.fulfilled, (state, action) => {
            state.isLoading = false;
            state.success = action.payload.success;
            state.msg = action.payload.msg;
            state.listings = action.payload.data;
        }).addCase(searchListings.rejected, (state, action) => {
            state.isLoading = false;
            state.success = false;
            state.msg = action.payload;
        }).addCase(getListings.pending, (state) => {
            state.isLoading = true
        }).addCase(getListings.fulfilled, (state, action) => {
            state.isLoading = false;
            state.success = action.payload.success;
            state.msg = action.payload.msg;
            state.listings = action.payload.data;
        }).addCase(getListings.rejected, (state, action) => {
            state.isLoading = false;
            state.success = false;
            state.msg = action.payload;
        })
    }
})

export default listingSlice.reducer;
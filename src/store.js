import listingSlice from "./features/listingSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        listing: listingSlice
    }
});


import { createSlice } from '@reduxjs/toolkit';

const initialProductState = [
    {id: 1, name: 'product 1', description: 'Description 1', price: 100},
    {id: 2, name: 'product 2', description: 'Description 2', price: 200},
    {id: 3, name: 'product 3', description: 'Description 3', price: 300},
];

const productSlice = createSlice ({
    name: 'products',
    initialState: initialProductState,
    reducers: {}
});



export default productSlice.reducer;
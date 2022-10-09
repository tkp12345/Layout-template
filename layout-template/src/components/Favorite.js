import React from 'react';
import Sidebar from "./Layout/Sidebar";
import {Stack} from "@mui/material";
import Contents from "./Layout/Contents";

const Favorite = () => {
    console.log('Favorite')

    return (
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Contents/>
    </Stack>
    );
};

export default Favorite;
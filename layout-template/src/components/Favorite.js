import React, {useState} from 'react';
import Sidebar from "./Layout/Sidebar";
import {Box, Stack, Tab, Tabs, Typography} from "@mui/material";
import Contents from "./Layout/Contents";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import StarsIcon from "@mui/icons-material/Stars";
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import * as PropTypes from "prop-types";

function AntTabs(props) {
    return null;
}

AntTabs.propTypes = {
    variant: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.number,
    children: PropTypes.node
};

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
const Favorite = () => {
    console.log('Favorite')
    const [selectedTab, setSelectedTab] = useState(0);
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
        >
        <Tabs orientation="vertical"  value={selectedTab}   variant="fullWidth" onChange={handleChange}>
            <Tab icon={<BookOutlinedIcon/>} iconPosition="start" label="Repository" />
            <Tab icon={<AdjustOutlinedIcon/>} iconPosition="start" label="Issue"  />
        </Tabs>
            <TabPanel value={selectedTab} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={selectedTab} index={1}>
                Item Two
            </TabPanel>
        </Box>
    // {/*//     <Stack direction="row" spacing={2} justifyContent="space-between">*/}
    // {/*//     <Sidebar/>*/}
    // {/*//     <Contents/>*/}
    // {/*// </Stack>*/}
    );
};

export default Favorite;
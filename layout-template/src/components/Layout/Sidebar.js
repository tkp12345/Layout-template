import React, {useState} from 'react';
import {Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";

function InboxIcon() {
    return null;
}

const Sidebar = () => {
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <Box  borderRadius="6px" border="1px solid #d0d7de"  flex={1}  sx={{  width: '100%' , bgcolor:'background.paper'}}>
                <List   component="nav" aria-label="secondary mailbox folder">
                    <ListItemButton
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                    >
                        <ListItemText primary="Repositories" />

                    </ListItemButton>
                    <Divider />
                    <ListItemButton
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                    >
                        <ListItemText primary="Issues" />
                    </ListItemButton>
                </List>
        </Box>
    );
};

export default Sidebar;
'use client'

import Image from "next/image";
import Link from "next/link";

import { NavLinks } from "@/constant";
import { getCurrentUser } from "@/lib/session";

import { useState } from "react";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack } from "@mui/material";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

 

  const container = window !== undefined ? () => window().document.body : undefined;

    

    function handleDrawerToggle(event: any): void {
        throw new Error("Function not implemented.");
    }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Delightly!
          </Typography>
          <Box sx={ {flexGrow: 1, margin:2, display: { xs: 'none', sm: 'block' }}}>
            <Stack direction='row' spacing={2} >
            {NavLinks.map((item) => (  
              <Link key={item.key} href={item.href}>{item.text}</Link>
            ))}
            </Stack>
          </Box>
          Any other item
        </Toolbar>
      </AppBar>
    </Box>
      
  );
}
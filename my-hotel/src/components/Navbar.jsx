// components/Navbar.jsx
import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    
      <AppBar position="sticky" sx={{bgcolor:' #7a1f1f'}}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Al Haram Food Point
       </Typography>

       {isMobile ? (
          <>
            <IconButton color="inherit" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
              <List sx={{ width: 200 }}>
                {navLinks.map((link) => (
                  <ListItem  key={link.label} onClick={() => setOpen(false)} component="a" href={link.href}>
                    <ListItemText primary={link.label} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <div>
            {navLinks.map((link) => (
              <Button key={link.label} color="inherit" href={link.href}>
                {link.label}
              </Button>
            ))}
          </div>
        )}
      </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
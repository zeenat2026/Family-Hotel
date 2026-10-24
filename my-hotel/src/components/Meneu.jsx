// components/Menu.jsx
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

const menuItems = [
  { name: 'Chicken Karahi', price: 'Rs. 1200',perHead:'Rs.100 '},
  { name: 'Mutton Karahi', price: 'Rs. 4000' ,perHead:'Rs.100'},
  { name: 'Beef Karahi', price: 'Rs. 3000' ,perHead:'Rs.100'},
  { name: 'Chai', price: 'Rs. 50' },
  { name: 'Paratha', price: 'Rs. 60' },
];

function Menu() {
  return (
    <Box id="menu" sx={{  minHeight: 'calc(100vh - 64px)', py: 8, px: 3, bgcolor: '#fdf6ec',scrollMarginTop:'64px'}}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 5, color: '#7a1f1f' }}>
        Hamara Menu
      </Typography>

      <Grid container spacing={3} sx={{justifyContent:"center"}}>
        {menuItems.map((item) => (
          <Grid  size={ { xs: 12, sm: 6, md: 4}} key={item.name}>
            <Card sx={{ p: 2, textAlign: 'center', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {item.name}
                </Typography>
                <Typography variant="body1" sx={{ color: '#7a1f1f', mt: 1, fontWeight: 'bold' }}>
                  {item.price}
                </Typography>
               {item.perHead && (
                 <Typography variant="body1" sx={{ color: '#7a1f1f', mt: 1, fontWeight: 'bold' }}>
                 <span>(Per Head)</span> {item.perHead}
                </Typography>
               )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Menu;
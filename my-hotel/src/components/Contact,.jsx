// components/Contact.jsx
import { Box, Typography, Grid, IconButton, Stack } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {
  return (
    <Box id="contact" sx={{  minHeight:'calc(100vh - 64px)', py: 8, px: 3, bgcolor: '#7a1f1f', color: '#fff', display:'grid',placeContent:'center', scrollMarginTop:'63px'}}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 5 }}>
        Contact us on
      </Typography>

      <Grid container spacing={4} sx={{alignItems:'center',justifyContent:'center'}}>
        <Grid size={{xs: 12, sm: 6}}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <LocationOnIcon sx={{ mr: 2 }} />
            <Typography>Yazman Kudwala, Bahawalpur, Pakistan</Typography>
          </Box>
      <Stack>
       <Box sx={{ display: 'flex' ,alignItems: 'center', mb: 3 }}>
            <PhoneIcon sx={{ mr: 2 }} />
            <Typography>+92 304 2202770</Typography>
       </Box>
          <Box sx={{ display: 'flex' ,alignItems: 'center', mb: 3 }}>
             <PhoneIcon sx={{ mr: 2 }} />
            <Typography>+92 346 7080789</Typography>
          </Box>
          <Box sx={{ display: 'flex' ,alignItems: 'center', mb: 3 }}>
             <PhoneIcon sx={{ mr: 2 }} />
            <Typography>+92 301 6650672</Typography>
          </Box>
           <Box sx={{ display: 'flex' ,alignItems: 'center', mb: 3 }}>
             <PhoneIcon sx={{ mr: 2 }} />
            <Typography>+92 342 8472896</Typography>
          </Box>
      </Stack>
          

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              href="https://wa.me/923016650672"
              target="_blank"
              sx={{ color: '#fff', bgcolor: '#25D366', mr: 2 }}
            >
              <WhatsAppIcon />
            </IconButton>
            <Typography>Also contact us on WhatsApp</Typography>
          </Box>
        </Grid>

        <Grid size={{xs: 12, sm: 6}}>
          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d445873.9296431465!2d71.55591756792315!3d29.18264060802417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393bf5000096a9c3%3A0x573f68414c551e55!2sAl%20Haram%20Food%20Point%20Khudwala!5e0!3m2!1sen!2s!4v1788004136360!5m2!1sen!2s"
            sx={{ width: '100%', height: 250, border: 0, borderRadius: 2 }}
            loading="lazy"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
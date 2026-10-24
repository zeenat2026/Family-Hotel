// components/Gallery.jsx
import { useState } from 'react';
import { Box, Typography, Grid, Modal } from '@mui/material';

import photo1 from '../assets/dhaba3.jpg';
import photo2 from '../assets/dhaba5.jpg';
import photo3 from '../assets/dhaba4.jpg';

const galleryImages = ['/gallary/dhaba.jpeg','/gallary/dhaba7.jpg','/gallary/dhaba2.jpeg',photo1,'/gallary/dhaba2.jpeg',photo2,photo3];

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <Box id="gallery" sx={{  minHeight: 'calc(100vh - 50px)', py: 8, px: 3, bgcolor: '#fff' }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 5, color: '#7a1f1f' }}>
        Gallery
      </Typography>

      {/* Video Section */}
      <Box sx={{ maxWidth: 600, mx: 'auto', mb: 5 }}>
        <video controls width="100%" style={{ borderRadius: 8 }}>
          <source src="/gallary/dhabavid.mp4" type="video/mp4" />
        </video>
      </Box>

      <Grid container spacing={2}>
        {galleryImages.map((img, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Box
              component="img"
              src={img}
              alt={`Gallery ${index + 1}`}
              onClick={() => setSelectedImg(img)}
              sx={{
                width: '100%',
                height: 250,
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 3,
                cursor: 'pointer',
                transition: '0.3s',
                '&:hover': { transform: 'scale(1.03)' },
              }}
            />
          </Grid>
        ))}
      </Grid>

      {/* Lightbox Modal */}
     <Modal open={!!selectedImg} onClose={() => setSelectedImg(null)}>
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
    }}
    onClick={() => setSelectedImg(null)}
  >
    <Box
      component="img"
      src={selectedImg}
      sx={{
        width: { xs: '95%', md: '80%' },
        maxHeight: '90vh',
        objectFit: 'contain',
        borderRadius: 2,
      }}
    />
  </Box>
</Modal>
    </Box>
  );
}

export default Gallery;
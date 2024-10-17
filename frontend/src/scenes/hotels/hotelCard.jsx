import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel';
import Box from '@mui/material/Box';
import { Skeleton, useTheme } from '@mui/material';

export default function MediaCard({ name,description, images, ratings, website }) {
  const [imageError, setImageError] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const theme = useTheme();
  

  React.useEffect(() => {
    // Simulate loading time for data (e.g., fetch from an API)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);

  const handleImageError = (index) => {
    setImageError((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  const handleCardClick = () => {
    window.location.href = website;
  };

  return (
    <Card
      onClick={handleCardClick}
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        borderRadius: '15px',
        cursor: 'pointer'
      }}
    >
      {loading ? (
        <Box sx={{ padding: 2 }}>
          <Skeleton variant="rectangular" width="100%" height={180} />
          <Skeleton variant="text" sx={{ fontSize: '1.5rem', marginTop: 2 }} />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="rectangular" width="40%" height={30} sx={{ marginTop: 2 }} />
        </Box>
      ) : (
        <>
          <Carousel  navButtonsProps={{style: {backgroundColor: 'transparent',}}}  autoPlay={false} stopAutoPlayOnHover='false' swipe='true' animation='fade' indicators={false} navButtonsAlwaysVisible={true}>
            {images && images.length > 0 ? (
              images.map((item, index) => (
                imageError[index] ? (
                  <Box
                    key={index}
                    sx={{
                      height: 180,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                    }}
                  >
                    <Skeleton animation="wave" variant="rectangular" width='100%' height='100%' />
                  </Box>
                ) : (
                  <CardMedia
                    key={index}
                    component="img"
                    image={item.original_image}
                    alt={item.name || "image"}
                    height="180"
                    onError={() => handleImageError(index)}
                  />
                )
              ))
            ) : (
              <Box
                sx={{
                  height: 180,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'grey.300',
                  color: 'white',
                }}
              >
                No Image Available
              </Box>
            )}
          </Carousel>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography variant='h6'>Overall ratings : {ratings}</Typography>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </>
      )}
    </Card>
  );
}

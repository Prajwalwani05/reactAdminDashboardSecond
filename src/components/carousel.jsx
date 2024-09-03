import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, useTheme } from '@mui/material';
import './style.css';
import img1 from '../scenes/dashboard/assets/martin-martz-X5fEKadz0Xc-unsplash.jpg';
import { colorModeContext, tokens } from '../theme';
import img2 from '../scenes/dashboard/assets/CaraousalRed.jpg';
import img3 from '../scenes/dashboard/assets/carousalGreen.jpg';
import img4 from '../scenes/dashboard/assets/CarousalYellow.jpg';
import lastImg from '../scenes/dashboard/assets/blockchain (1).png';
import lastImg2 from '../scenes/dashboard/assets/working-at-home.png';
import lastImgMental from '../scenes/dashboard/assets/schizophrenia.png';

function Example(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { colorScheme } = React.useContext(colorModeContext);

    const items = [
        {
            name: "Featured App",
            description: "The Rise of Remote Work: Benefits, Challenges, and Future Trends",
            img: colorScheme === 'blue' ? img1 : colorScheme === 'red' ? img2 : colorScheme === 'green' ? img3 : img4,
            imgsecond : lastImg2
        },
        {
            name: "Featured App",
            description: "Understanding Blockchain Technology: Beyond Cryptocurrency",
            img: colorScheme === 'blue' ? img1 : colorScheme === 'red' ? img2 : colorScheme === 'green' ? img3 : img4,
            imgsecond: lastImg
        },
        {
            name: "Featured App",
            description: "Mental Health in the Digital Age: Navigating Social Media and Well-being",
            img: colorScheme === 'blue' ? img1 : colorScheme === 'red' ? img2 : colorScheme === 'green' ? img3 : img4,
            imgsecond: lastImgMental
        }
    ];
    
    return (
        <Carousel 
        fullHeightHover={false}    
            navButtonsProps={{         
                style: {
                    backgroundColor: 'transparent',
                    borderRadius: '50%',
                    // height: "300px"
                }
            }} 
            navButtonsAlwaysVisible={true}
            indicators={false}>
            {items.map((item, i) => <Item key={i} item={item} />)}
        </Carousel>
    );
}

function Item(props) {
    return (
        <Paper  className='carousel' style={{backgroundImage:`url(${props.item.img})`, backgroundSize:"cover", backgroundPosition:'center'}}>
            <div className='carouselInside'>
                <div>
                <h2 style={{color: "white", margin:"0", textAlign:'center'}}>{props.item.name}</h2>
                <p style={{color: "lightgray", textAlign:'center'}}>{props.item.description}</p>
                </div>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                 <img src={props.item.imgsecond} width='130px' alt='bg'/>
                </div>
            </div>
        </Paper>

    );
}

export default Example;

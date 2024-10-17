import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import './style.css';
import { colorModeContext } from '../theme';

function Example(props) {
    const { colorScheme } = React.useContext(colorModeContext);
    const { items } = props;
    return (
        <Carousel 
        animation='slide'
        fullHeightHover={false}    
            navButtonsProps={{         
                style: {
                    backgroundColor: 'transparent',
                    borderRadius: '50%',
                    // height: "300px"
                }
            }} 
            navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
                style: {
                    top: '0',
                    // top: 'unset'
                }
            }} 
            navButtonsAlwaysVisible={true}
            indicators={false}>
            {items && items.map((item, i) => <Item key={i} item={item} />)}
        </Carousel>
    );
}

function Item(props) {
    return (
        <Paper   className='carousel' style={{borderRadius:'20px', backgroundImage:`url(${props.item.img})`, backgroundSize:"cover", backgroundPosition:'center'}}>
            <div className='carouselInside'>
                <h2 style={{color: "white", margin:"0", textAlign:'center'}}>{props.item.name}</h2>
                <p style={{color: "lightgray", textAlign:'center'}}>{props.item.description}</p>
            </div>
        </Paper>

    );
}

export default Example;

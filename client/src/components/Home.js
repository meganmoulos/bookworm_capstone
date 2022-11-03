import React, {useState} from 'react';
import {useRecoilValue} from 'recoil'
import AllFictionBooks from './AllFictionBooks';
import WantToReadShelf from './WantToReadShelf';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel'

function Home(props) {
    const [value, setValue] = useState(0)
    
    function handleChange(e, newValue){
        setValue(newValue)
    }

    return (
        <Container 
            sx={{ display: 'flex', flexGrow: 1 }}
            style={{
                width: "100%"
            }}
        >
            <Grid container xs={3} sm={3} md={3}> 
                <Grid item sx={{flexGrow: 1}}>
                    <p>Currently Reading</p>
                    <Card>
                        <p>Title</p>
                        <p>Author</p>
                    </Card>
                </Grid>
            </Grid>
            <Grid container xs={9} sm={9} md={9}>
                <Grid item>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="Fiction" />
                            <Tab label="Non-Fiction" />
                            <Tab label="Romance" />
                            <Tab label="Mystery" />
                            <Tab label="SciFi & Fantasy" />
                        </Tabs>
                    </Box>
                    <AllFictionBooks />
                </Grid>
                <Grid item>
                    <div>
                        <p>Want to Read</p>
                        <WantToReadShelf />
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Home;
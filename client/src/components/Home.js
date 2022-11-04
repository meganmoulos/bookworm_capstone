import React, {useState} from 'react';
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
import Typography from '@mui/material/Typography'

function Home(props) {
    const [value, setValue] = useState(0)

    function handleChange(e, newValue){
        setValue(newValue)
    }

    return (
        <Grid container item
            sx={{ display: 'flex', flexGrow: 1 }}
            style={{
                width: "100%"
            }}
            spacing={3}
            padding={3}
        >
            <Grid container item xs={3} sm={3} md={3}> 
                <Grid item sx={{flexGrow: 1}}>
                    <p>Currently Reading</p>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="div">
                                Title
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Author
                            </Typography>
                            </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container item xs={9} sm={9} md={9}>
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
            </Grid>
            <Grid container item>
                <div>
                    <p>Want to Read</p>
                    <WantToReadShelf />
                </div>
            </Grid>
        </Grid>
    );
}

export default Home;
import React, {useState} from 'react';
import GoogleBooksGrid from './GoogleBooksGrid';
import Shelves from './Shelves';
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
    const [query, setQuery] = useState("potter+subject:fiction")

    function handleChange(e, newValue){
        e.preventDefault()
        setQuery(newValue)
    }

    function onDragEnd(result){

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
                        <Tabs value={query} onChange={handleChange}>
                            <Tab label="Fiction" value="potter+subject:fiction" />
                            <Tab label="Non-Fiction" value="london" />
                            <Tab label="Romance" value="love+subject:romance" />
                            <Tab label="Mystery" value="fear+subject:mystery" />
                            <Tab label="SciFi & Fantasy" value="fear+subject:dragon"/>
                        </Tabs>
                    </Box>
                    <GoogleBooksGrid query={query} />
                </Grid>
            </Grid>
            <Grid container item>
                <div>
                    <Shelves />
                </div>
            </Grid>
        </Grid>
    );
}

export default Home;
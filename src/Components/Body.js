import React,{useState} from 'react'
import {Typography,ButtonGroup,Card,CardActions,CardContent,CardMedia,Grid,Container, Button} from '@material-ui/core'
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MessageIcon from '@material-ui/icons/Message';
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import { useHistory } from 'react-router';
import useStyles from './Styles'
import Profile from './Profile';

const cards=[1,2,3,4]
function Body() {
    const classes=useStyles()
    
  function  HandleSideBar(){
const history=useHistory()
history.push("/profile")
  }
    return (
 
        <div className="main-body">
            <div className="main-nav">
    <ButtonGroup variant="contained" aria-label="contained secondary button group" className={classes.Buttongroup}>
  <Button style={{borderRadius:'1.5rem'}}><span style={{color:'blue'}}>13 </span>. All projects</Button>
  <Button style={{borderRadius:'1.5rem'}}><span style={{color:'blue'}}>2 </span>. onprocess</Button>
  <Button style={{borderRadius:'1.5rem'}}><span style={{color:'blue'}}>4 </span>. pending</Button>
</ButtonGroup>

<Button style={{borderRadius:'1.5rem',
marginLeft:'20rem',marginRight:'1rem'}} variant="contained" color="primary">New project</Button>

<MenuIcon  /><span>  </span>
<AppsIcon/>
            </div>
            
            <Container className={classes.cardGrid} maxWidth='md' >
              <Grid  container spacing={4}>
                {cards.map(()=>(
                 <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card} onClick={HandleSideBar}>
                      <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                     title="image-title"
                     />
                     <CardContent className={classes.cardContent}>
                       <Typography gutterBottom variant="h5">
                         Heading
                         </Typography>
                         <Typography>
                           ladeed
                         </Typography>


                     </CardContent>
                     <CardActions >
                       <AddIcCallIcon/>
                       <VideoCallIcon />
                       <MessageIcon/>
                     </CardActions>
                    </Card>
                 </Grid>))}
              </Grid>
         </Container>
   
        </div>
        
    )
}

export default Body

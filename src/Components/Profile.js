import React from 'react'
import {Typography,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container, Button} from '@material-ui/core'
import useStyles from './Styles'
function Profile() {
    const classes=useStyles()
    return (
        <div className="profile" style={{zIndex:1}}>
            <Card className={classes.cardProfile}>
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
                     <CardActions>
                       <Button size="small" color="primary">view</Button>
                       <Button size="small" color="primary">edit</Button>
                     </CardActions>
                    </Card>
        </div>
    )
}

export default Profile

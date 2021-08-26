import {makeStyles} from "@material-ui/core/styles"
const useStyles=makeStyles((theme)=>({
container:{
  backgroundColor:theme.palette.background.paper,
  padding:theme.spacing(2,0,2),
  height:'30rem',
  backgroundColor:'red'
  
},

icon:{
marginRight:'20px',
},
buttons:{
marginTop:'40px'
},
cardGrid:{
    padding:'20px 0'
},
card:{
    height:'100%',
    width:'80%',
    display:'flex',
    flexDirection:'column'
    
},
cardProfile:{
    height:'100%',
    width:'80%',
    display:'flex',
    flexDirection:'column'
    
},
cardMedia:{
height:'60%',
paddingTop: '30%',

},
cardContent:{
    flexGrow:1,
},
Buttongroup:{
marginTop:'1rem',
marginLeft:'4rem',
borderRadius:'1.5rem',
backgroundColor:"primary"
}
}))
 export default useStyles
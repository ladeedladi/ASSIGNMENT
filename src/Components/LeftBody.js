import React from 'react'
import {Button} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
function LeftBody() {
    const history=useHistory()
    return (
        <div className="left-body">
            <Button href="#text-buttons" color="primary" style={{marginLeft:"20px"}} onClick={()=>history.push("/")}>
        Projects
      </Button><br/>
            <Button href="#text-buttons" color="primary" style={{marginLeft:"20px"}} onClick={()=>history.push("/contacts")}>
       Contacts
      </Button><br/>
            <Button href="#text-buttons" color="primary" style={{marginLeft:"20px"}}  onClick={()=>history.push("/kanban")}>
        Kanban
      </Button>
        </div>
    )
}

export default LeftBody

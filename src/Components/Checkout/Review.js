import React from 'react'
import {List,ListItem,ListItemText,Typography} from "@material-ui/core"
const Review = ({checkoutToken}) => {
    return (
        <div>
            <Typography variant="h3" align="center" >order summary</Typography>

            <List>
                {checkoutToken.live.line_items.map((product)=>(
                    <ListItem style={{padding: "10px 0"}} key={product.name}>
                        <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`}/>
                        <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>

                    </ListItem>
                ))}
                <ListItem style={{padding: "10px 0"}}>
                    <ListItemText primary="total"/>
                    <Typography variant="subtitle1" style={{fontWeight: 700}}>
                        {checkoutToken.live.subtotal.formatted_with_symbol}
                    </Typography>


                </ListItem>
            </List>
        </div>
    )
}

export default Review

import React from "react";
import PropTypes from 'prop-types';
// import button from 'react-bulma-components/lib/components/button'
//  export {default} from 'react-bulma-components/lib/components/button'
import "../../styles.scss";

export const Button = ({children, className, ...rest }) => {
    const btnClass = `button ${className}`
    return <button className={btnClass} {...rest }>{children}</button>
}

//input: <Button className="is-small is-primary" disabled={true}>hello</Button>
//output: <button className="button is-small is-primary" disabled=[true]>hello</button>
Button.prototype ={
 className:PropTypes.string
}
Button.defaultProps = {
    className: ""
};
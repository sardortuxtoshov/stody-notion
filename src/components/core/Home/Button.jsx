import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";

const Button = ({children, active, linkto}) => {
  return(
    <Link to={linkto}>
      <div className={`text-center text-[13px] px-6 py-3 rounded-md font-bold
      ${active ? 'bg-yellow-50 text-black' : 'bg-richblack-800'}
      hover:sclae-95 transition-all duration-200`}>
        {children}
      </div>
    </Link>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
  linkto: PropTypes.string
}

export default Button

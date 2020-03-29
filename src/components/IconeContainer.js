import React from "react"

const IconeContainer = ({ children, color, count, isLike, ...props }) => {
  // ...props le reste des props
  return (
    <div className={`icon-group ${isLike && "icon-isLike"}`} {...props}>
      <div className={`icon-container icon-${color}`}>{children}</div>
      {count > 0 && <p className={`icon-text icon-text-${color}`}>{count}</p>}
    </div>
  )
}

export default IconeContainer

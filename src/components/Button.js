import React from "react"
import { ButtonWrapper } from "../elements"

export const Button = ({ children, href }) => {
  return (
    <div>
      <ButtonWrapper to={"/" + href}>{children}</ButtonWrapper>
    </div>
  )
}

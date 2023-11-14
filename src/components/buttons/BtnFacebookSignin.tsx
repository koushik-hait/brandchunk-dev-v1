import React from 'react'
import {
  FaFacebookF,
} from "@/lib/icons";
import {Button } from "@nextui-org/react"

const BtnFacebookSignin = () => {
  return (
    <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"><FaFacebookF /> Continue with Facebook</Button>
  )
}

export default BtnFacebookSignin
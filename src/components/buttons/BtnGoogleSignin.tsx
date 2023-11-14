import React from 'react'
import {
  FcGoogle,
} from "@/lib/icons";
import {Button } from "@nextui-org/react"

const BtnGoogleSignin = () => {
  return (
    <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"><FcGoogle /> Continue with Google</Button>
  )
}

export default BtnGoogleSignin
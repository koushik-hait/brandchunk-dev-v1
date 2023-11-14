"use client";

import {
  AiOutlineHeart,
  AiOutlineLogin,
  BiSolidCoupon,
  IoBagCheckOutline,
  RiShutDownLine,
  RxAvatar,
} from "@/lib/icons";
import Link from "next/link";
import { useState } from "react";
import Logo from "../logos/Logo";
import SigninForm from "../forms/SigninForm";
import SignupForm from "../forms/SignupForm";
import BtnFacebookSignin from "../buttons/BtnFacebookSignin";
import BtnGoogleSignin from "../buttons/BtnGoogleSignin";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from "@nextui-org/react";
import { useAuth } from "@/contexts/authContext";
import toast from "react-hot-toast";
import axios from "axios";
import Loader from "../loaders/Loader";

const AccountMenu = ({ authStatus }: { authStatus: boolean }) => {
  const [modalType, setModalType] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { user, logout } = useAuth();

  const toggleSignin = () => {
    setModalType("login");
    onOpen();
  };
  const toggleSignup = () => {
    setModalType("signup");
    onOpen();
  };

  const onLogout = async () => {
    try {
      setLoading(true);
      const resp = await axios.get("/api/users/logout");
      console.log(resp);

      if (resp?.data?.success) {
        logout();
        toast.success("logout successfull ...");
      } else {
        toast.error(resp?.data?.message);
      }
    } catch (error: any) {
      console.log(error);
      toast.error("Could not logout at this moment...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? <Loader /> : ""}
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            name={user?.username! || "Anonymous"}
            size="sm"
            src={user?.avtar?.toString()}
          />
        </DropdownTrigger>
        {authStatus ? (
          <DropdownMenu variant="flat">
            <DropdownItem key="username" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{user?.username}</p>
            </DropdownItem>
            <DropdownItem key="profile">
              <Link href="/profile">My Profile</Link>
            </DropdownItem>
            <DropdownItem key="wishlist" className="flex">
              <Link href="/wishlist">
                <AiOutlineHeart /> Wishlist
              </Link>
            </DropdownItem>
            <DropdownItem
              key="orders"
              className="flex items-center justify-center"
            >
              <Link href="/orders">
                <IoBagCheckOutline /> Orders
              </Link>
            </DropdownItem>
            <DropdownItem
              key="coupon"
              className="flex items-center justify-center"
            >
              <Link href="/coupon">
                <BiSolidCoupon /> Coupon
              </Link>
            </DropdownItem>
            <DropdownItem
              key="logout"
              color="danger"
              className="flex items-center justify-center"
              onClick={onLogout}
            >
              <RiShutDownLine /> Log Out
            </DropdownItem>
          </DropdownMenu>
        ) : (
          <DropdownMenu variant="flat">
            <DropdownItem key="login" onClick={toggleSignin}>
              <AiOutlineLogin />
              Login
            </DropdownItem>
            <DropdownItem key="signup" onClick={toggleSignup}>
              <RxAvatar /> Signup
            </DropdownItem>
          </DropdownMenu>
        )}
      </Dropdown>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {modalType === "login" ? (
                  <>
                    <h1 className=" text-2xl font-bold">
                      Sign in to your account
                    </h1>
                    <div onClick={toggleSignup} className="cursor-pointer">
                      <span className="text-gray-600 text-sm">
                        Don't have an account?
                      </span>
                      <span className="text-gray-700 text-sm font-semibold ml-1">
                        Sign up
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <h1 className=" text-2xl font-bold">
                      Create a new Account
                    </h1>
                    <div onClick={toggleSignin} className="cursor-pointer">
                      <span className="text-gray-600 text-sm">
                        Existing user?
                      </span>
                      <span className="text-gray-700 text-sm font-semibold ml-1">
                        Sign in
                      </span>
                    </div>
                  </>
                )}
              </ModalHeader>
              <ModalBody>
                {modalType === "login" ? (
                  <SigninForm
                    toggleSignup={toggleSignup}
                    modalClose={onClose}
                  />
                ) : (
                  <SignupForm toggleSignin={toggleSignin} />
                )}
              </ModalBody>
              <ModalFooter>
                <BtnFacebookSignin />
                <BtnGoogleSignin />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AccountMenu;

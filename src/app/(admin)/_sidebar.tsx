"use client";

import React from "react";
import { useAuth } from "@/contexts/authContext";
import { Image, Avatar, Listbox, ListboxItem } from "@nextui-org/react";
import { MdVerifiedUser } from "@/lib/icons";
import axios from "axios";
import toast from "react-hot-toast";

const AdminSidebar = () => {
    const { user, logout } = useAuth();
  const onLogout = async () => {
    try {
      const resp = await axios.get("/api/users/logout");
      if (resp?.data?.success) {
        logout();
        toast.success("logout successfull ...");
      } else {
        toast.error(resp?.data?.message);
      }
    } catch (error:any) {
      toast.error("Could not logout at this moment...");
    }
  }
  return (
    <div className="w-3/12 bg-white rounded p-3 shadow-lg dark:bg-black dark:text-white">
      <div className="flex items-center space-x-4 p-2 mb-5 dark:bg-black dark:text-white">
        <Avatar
          src={user?.avtar || "https://i.pravatar.cc/150?u=a04258114e29026708c"}
          className="w-20 h-20 text-large"
        />
        <div>
          <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">
            {user?.username || "Guest User"}
          </h4>
          <span className="text-sm tracking-wide flex items-center space-x-1">
            {user?.is_email_verified ? (
              <MdVerifiedUser className="text-green-500" />
            ) : (
              <MdVerifiedUser className="text-red-400" />
            )}
            <span
              className={
                user?.is_email_verified ? "text-gray-600" : "text-red-400"
              }
            >
              {user?.is_email_verified ? "Verified" : "Not Verified"}
            </span>
          </span>
        </div>
      </div>
      <Listbox
        aria-label="User Menu"
        onAction={(key) => alert(key)}
        className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small rounded-medium"
        itemClasses={{
          base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
        }}
      >
        <ListboxItem key="orders">Orders</ListboxItem>
        <ListboxItem key="wishlist">Wishlist</ListboxItem>
        <ListboxItem key="coupons">Coupons</ListboxItem>
        <ListboxItem key="edit_profile">Edit Profile</ListboxItem>
        <ListboxItem key="manage_address">Manage Address</ListboxItem>
        <ListboxItem key="reviews">My Reviews</ListboxItem>
        <ListboxItem key="saved_cards">Saved Cards</ListboxItem>
        <ListboxItem key="logout_item" color="danger" 
        onClick={onLogout}
        >Logout</ListboxItem>
      </Listbox>
    </div>
  )
}

export default AdminSidebar
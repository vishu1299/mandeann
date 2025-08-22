"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar, Edit } from "lucide-react";
import { UserProfile, SecuritySettings } from "./types";
import { EditProfileForm } from "./EditProfileForm";

interface AccountOverviewProps {
  userProfile: UserProfile;
  securitySettings: SecuritySettings;
  setSecuritySettings: (settings: SecuritySettings) => void;
}

export function AccountOverview({
  userProfile,
  securitySettings,
  setSecuritySettings,
}: AccountOverviewProps) {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [userProfileState, setUserProfileState] = useState(userProfile);

  return (
    <div className="space-y-6 sm:space-y-8">
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-[var(--secondary)] mb-2">
          Account Overview
        </h3>
        <p className="text-gray-500 text-sm">
          Manage your profile, orders, and preferences.
        </p>
      </div>

      {/* Profile Information Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
          <h4 className="text-base sm:text-lg font-semibold text-[var(--secondary)]">
            Profile Information
          </h4>
          <Dialog open={isUpdateModalOpen} onOpenChange={setIsUpdateModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm w-full sm:w-auto">
                Update
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[95vw] max-w-[90vw] sm:max-w-[500px] mx-auto bg-white">
              <DialogHeader>
                <DialogTitle>Update Profile Information</DialogTitle>
              </DialogHeader>
              <EditProfileForm
                userProfile={userProfileState}
                setUserProfile={setUserProfileState}
                onClose={() => setIsUpdateModalOpen(false)}
              />
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          {/* Profile Image Section */}
          <div className="flex-shrink-0 self-center sm:self-start">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face"
                alt="Profile"
                width={120}
                height={120}
                className="rounded-full object-cover w-20 h-20 sm:w-24 sm:h-24 lg:w-30 lg:h-30"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center">
                <Edit className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
              </div>
            </div>
          </div>

          {/* Form Fields Section */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-4 sm:gap-y-6">
            {/* Full Name */}
            <div>
              <Label className="text-xs sm:text-sm font-medium text-gray-700 mb-2 block">
                Full Name
              </Label>
              <div className="bg-gray-100 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-600 text-sm sm:text-base truncate">
                {userProfileState.fullName}
              </div>
            </div>

            {/* Email Address */}
            <div>
              <Label className="text-xs sm:text-sm font-medium text-gray-700 mb-2 block">
                Email Address
              </Label>
              <div className="bg-gray-100 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-600 text-sm sm:text-base truncate">
                {userProfileState.email}
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <Label className="text-xs sm:text-sm font-medium text-gray-700 mb-2 block">
                Phone Number
              </Label>
              <div className="bg-gray-100 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-600 text-sm sm:text-base">
                {userProfileState.phone}
              </div>
            </div>

            {/* Date of Birth */}
            <div>
              <Label className="text-xs sm:text-sm font-medium text-gray-700 mb-2 block">
                Date of Birth
              </Label>
              <div className="bg-gray-100 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-600 text-sm sm:text-base flex items-center justify-between">
                <span>{userProfileState.dateOfBirth}</span>
                <Calendar className="w-4 h-4 text-[var(--primary)]" />
              </div>
            </div>

            {/* Gender */}
            <div>
              <Label className="text-xs sm:text-sm font-medium text-gray-700 mb-2 block">
                Gender
              </Label>
              <Select value={userProfileState.gender}>
                <SelectTrigger className="bg-gray-100 border-gray-100 rounded-lg h-10 sm:h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Phone Number (Second) */}
            <div>
              <Label className="text-xs sm:text-sm font-medium text-gray-700 mb-2 block">
                Phone Number
              </Label>
              <div className="bg-gray-100 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-600 text-sm sm:text-base">
                {userProfileState.phone}
              </div>
            </div>

            {/* Address - Full Width */}
            <div className="col-span-1 sm:col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <Label className="text-xs sm:text-sm font-medium text-gray-700">
                  Address
                </Label>
                <Edit className="w-4 h-4 text-[var(--primary)] cursor-pointer" />
              </div>
              <div className="bg-gray-100 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-600 text-sm sm:text-base whitespace-pre-line">
                {userProfileState.address}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Security Settings */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
        <h4 className="text-base sm:text-lg font-semibold text-[var(--secondary)] mb-4">
          Security Settings
        </h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-[var(--secondary)] text-sm sm:text-base">
                Two-Factor Authentication
              </p>
              <p className="text-sm text-gray-500">
                Extra security for your account
              </p>
            </div>
            <Switch
              checked={securitySettings.twoFactorAuth}
              onCheckedChange={(checked: boolean) =>
                setSecuritySettings({
                  ...securitySettings,
                  twoFactorAuth: checked,
                })
              }
              className="data-[state=checked]:bg-[var(--primary)] data-[state=unchecked]:bg-[var(--primary)] 
             [&>span]:bg-white data-[state=checked]:[&>span]:bg-white"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-[var(--secondary)] text-sm sm:text-base">
                Login Alerts
              </p>
              <p className="text-sm text-gray-500">
                Get notified of new logins
              </p>
            </div>
            <Switch
              checked={securitySettings.loginAlerts}
              onCheckedChange={(checked: boolean) =>
                setSecuritySettings({
                  ...securitySettings,
                  loginAlerts: checked,
                })
              }
              className="data-[state=checked]:bg-[var(--primary)] data-[state=unchecked]:bg-[var(--primary)] 
             [&>span]:bg-white data-[state=checked]:[&>span]:bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

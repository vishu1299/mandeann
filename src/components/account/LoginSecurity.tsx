"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  Key,
  Shield,
  AlertTriangle,
  Activity,
  Pause,
  Trash2,
} from "lucide-react";
import { SecuritySettings } from "./types";

interface LoginSecurityProps {
  securitySettings: SecuritySettings;
  setSecuritySettings: (settings: SecuritySettings) => void;
}

export function LoginSecurity({}: LoginSecurityProps) {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Login & Security
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Update your account login details and security settings.
        </p>
      </div>

      {/* Login Information Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
          Login Information
        </h3>

        <div className="space-y-6">
          {/* Email Address */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-6 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-base sm:text-lg">
                  Email Address
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  Davidjosh32@gmail.com
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="text-blue-600 border-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full font-medium"
            >
              Edit
            </Button>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-6 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-base sm:text-lg">
                  Phone Number
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  +1095295995
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="text-blue-600 border-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full font-medium"
            >
              Edit
            </Button>
          </div>

          {/* Password */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-6 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Key className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-base sm:text-lg">
                  Password
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  Davidjosh32@gmail.com
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="text-blue-600 border-blue-600 hover:bg-blue-50 px-4 py-2 rounded-full font-medium"
            >
              Change Password
            </Button>
          </div>
        </div>
      </div>

      {/* Security Settings Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
          Security Settings
        </h3>

        <div className="space-y-6">
          {/* 2-Step Verification */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-6 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-base sm:text-lg">
                  2 - Step Verification
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  Add an extra layer of security to your account.
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="text-blue-600 border-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full font-medium"
            >
              Manage
            </Button>
          </div>

          {/* Login Alerts */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-6 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-base sm:text-lg">
                  Login Alerts
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  Get notified when your account is accessed from a new device.
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="text-blue-600 border-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full font-medium"
            >
              Edit
            </Button>
          </div>

          {/* Recent Login Activity */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 p-4 sm:p-6 bg-gray-50 rounded-xl">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-base sm:text-lg">
                  Recent Login Activity
                </p>
                <div className="mt-2">
                  <p className="text-gray-600 text-sm">
                    • Device: Chrome on Windows - Today, 9:30 AM
                  </p>
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="text-blue-600 border-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full font-medium"
            >
              View all
            </Button>
          </div>
        </div>
      </div>

      {/* Delete / Deactivate Account Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
          Delete / Deactivate Account
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Deactivate Account */}
          <div className="p-4 sm:p-6 bg-gray-50 rounded-xl">
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Pause className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-base sm:text-lg">
                  Deactivate Account
                </p>
                <p className="text-gray-600 text-sm sm:text-base mt-1">
                  temporarily disable your account; you can reactivate anytime.
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50 px-6 py-2 rounded-full font-medium w-full sm:w-auto"
            >
              Deactivate
            </Button>
          </div>

          {/* Delete Account Permanently */}
          <div className="p-4 sm:p-6 bg-gray-50 rounded-xl">
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Trash2 className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-base sm:text-lg">
                  Delete Account Permanently
                </p>
                <p className="text-gray-600 text-sm sm:text-base mt-1">
                  Removes all your data and orders history permanently. Cannot
                  be undone.
                </p>
              </div>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium w-full sm:w-auto">
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

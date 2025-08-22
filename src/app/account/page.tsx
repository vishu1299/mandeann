"use client";

import React, { useState } from "react";
import Image from "next/image";

// Import components
import { AccountOverview } from "@/components/account/AccountOverview";
import { MyOrders } from "@/components/account/MyOrders";
import { Wishlist } from "@/components/account/Wishlist";
import { AddressManager } from "@/components/account/AddressManager";
import { PaymentMethod } from "@/components/account/PaymentMethod";
import { LoginSecurity } from "@/components/account/LoginSecurity";

// Import types
import {
  User,
  Package,
  Heart,
  MapPin,
  CreditCard,
  Shield,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EditProfileForm } from "@/components/account/EditProfileForm";

const sidebarItems = [
  { id: "overview", label: "Account Overview", icon: User, active: true },
  { id: "orders", label: "My Orders", icon: Package },
  { id: "wishlist", label: "Wishlists", icon: Heart },
  { id: "address", label: "Address", icon: MapPin },
  { id: "payment", label: "Payment Method", icon: CreditCard },
  { id: "security", label: "Login & Security", icon: Shield },
];

export default function AccountPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({
    fullName: "Dave Noe",
    email: "daveshan72@gmail.com",
    phone: "+1 4465464471",
    dateOfBirth: "01-04-2003",
    gender: "Male",
    address:
      "214 Greenfield Avenue, Apt 3B\nMaplewood Heights, NY 11245\nUnited States",
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    loginAlerts: true,
    smsNotifications: true,
    emailNotifications: false,
  });

  return (
    <main className="min-h-screen bg-gray-50 font-roboto text-[var(--secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-bold text-[var(--secondary)]">
              Your Account /
            </h1>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white border border-gray-200 shadow-sm"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-600" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Profile Header */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 shadow-sm border border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="relative flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
                alt="Profile"
                width={80}
                height={80}
                className="rounded-full object-cover w-16 h-16 sm:w-20 sm:h-20"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg sm:text-xl font-bold text-[var(--secondary)] truncate">
                Hi, {userProfile.fullName.split(" ")[0]}
              </h2>
              <p className="text-gray-500 text-sm truncate">
                {userProfile.email}
              </p>
              <p className="text-gray-500 text-sm">{userProfile.phone}</p>
            </div>
            <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base whitespace-nowrap">
                  Edit Profile
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] mx-4 bg-white">
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                </DialogHeader>
                <EditProfileForm
                  userProfile={userProfile}
                  setUserProfile={setUserProfile}
                  onClose={() => setIsEditModalOpen(false)}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* Mobile Navigation Overlay */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden">
              <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl z-50">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-[var(--secondary)]">
                      Account Menu
                    </h3>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-100"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                <div className="py-2">
                  {sidebarItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveSection(item.id);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                          isActive
                            ? "bg-[var(--primary)]/10 text-[var(--primary)] border-r-2 border-[var(--primary)]"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden sticky top-6">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                      isActive
                        ? "bg-[var(--primary)]/10 text-[var(--primary)] border-l-5  border-[var(--primary)]"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-xl lg:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
              {activeSection === "overview" && (
                <AccountOverview
                  userProfile={userProfile}
                  securitySettings={securitySettings}
                  setSecuritySettings={setSecuritySettings}
                />
              )}
              {activeSection === "orders" && <MyOrders />}
              {activeSection === "wishlist" && <Wishlist />}
              {activeSection === "address" && <AddressManager />}
              {activeSection === "payment" && <PaymentMethod />}
              {activeSection === "security" && (
                <LoginSecurity
                  securitySettings={securitySettings}
                  setSecuritySettings={setSecuritySettings}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

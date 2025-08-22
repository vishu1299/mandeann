"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Edit, Plus } from "lucide-react";
import { Address } from "./types";
import { AddressForm } from "./AddressForm";

export function AddressManager() {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "1",
      type: "Home",
      name: "John Doe",
      street: "123 Main Street, Apartment 4B",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States",
      isDefault: true,
    },
    {
      id: "2",
      type: "Work",
      name: "John Doe",
      street: "456 Business Ave, Suite 200",
      city: "New York",
      state: "NY",
      zipCode: "10002",
      country: "United States",
      isDefault: false,
    },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);

  const handleDeleteAddress = (id: string) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

  const handleSetDefault = (id: string) => {
    setAddresses(
      addresses.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      }))
    );
  };

  const handleEditAddress = (address: Address) => {
    setEditingAddress(address);
    setIsAddModalOpen(true);
  };

  return (
    <div className="space-y-4 xs:space-y-5 sm:space-y-6">
      <div>
        <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-[var(--secondary)] mb-1 xs:mb-2">
          Address
        </h3>
        <p className="text-gray-500 text-xs xs:text-sm sm:text-base">
          Manage your shipping addresses
        </p>
      </div>

      <div className="space-y-3 xs:space-y-4">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="bg-white rounded-lg border border-gray-200 p-3 xs:p-4 sm:p-6"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 xs:mb-4 gap-3 sm:gap-0">
              <div className="flex items-center gap-2 xs:gap-3">
                <h4 className="text-sm xs:text-base sm:text-lg font-semibold text-[var(--secondary)]">
                  {address.type} Address
                </h4>
                {address.isDefault && (
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    Default
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5 xs:gap-2 w-full sm:w-auto">
                {!address.isDefault && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSetDefault(address.id)}
                    className="text-[var(--primary)] border-[var(--primary)] text-xs xs:text-sm px-2 xs:px-3 py-1.5 xs:py-2 flex-1 sm:flex-none"
                  >
                    Set Default
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEditAddress(address)}
                  className="text-[var(--primary)] border-[var(--primary)] text-xs xs:text-sm px-2 xs:px-3 py-1.5 xs:py-2 flex-1 sm:flex-none"
                >
                  <Edit className="w-3 h-3 xs:w-4 xs:h-4 mr-1 xs:mr-2" />
                  Edit
                </Button>
                {!address.isDefault && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteAddress(address.id)}
                    className="text-red-600 border-red-600 hover:bg-red-50 text-xs xs:text-sm px-2 xs:px-3 py-1.5 xs:py-2 flex-1 sm:flex-none"
                  >
                    Delete
                  </Button>
                )}
              </div>
            </div>
            <div className="text-[var(--secondary)] text-xs xs:text-sm space-y-0.5 xs:space-y-1">
              <p className="font-medium">{address.name}</p>
              <p>{address.street}</p>
              <p>
                {address.city}, {address.state} {address.zipCode}
              </p>
              <p>{address.country}</p>
            </div>
          </div>
        ))}
      </div>

      <Button
        onClick={() => {
          setEditingAddress(null);
          setIsAddModalOpen(true);
        }}
        className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-xs xs:text-sm sm:text-base px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 w-full xs:w-auto"
      >
        <Plus className="w-3 h-3 xs:w-4 xs:h-4 mr-1 xs:mr-2" />
        Add New Address
      </Button>

      {/* Add/Edit Address Modal */}
      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogContent className="w-[95vw] max-w-[90vw] xs:max-w-[500px] sm:max-w-[600px] lg:max-w-[700px] mx-auto bg-white">
          <DialogHeader>
            <DialogTitle className="text-base xs:text-lg sm:text-xl">
              {editingAddress ? "Edit Address" : "Add New Address"}
            </DialogTitle>
          </DialogHeader>
          <AddressForm
            address={editingAddress}
            addresses={addresses}
            setAddresses={setAddresses}
            onClose={() => {
              setIsAddModalOpen(false);
              setEditingAddress(null);
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreditCard, Plus, Edit, Trash2 } from "lucide-react";
import { PaymentMethod as PaymentMethodType } from "./types";

export function PaymentMethod() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingMethod, setEditingMethod] = useState<PaymentMethodType | null>(
    null
  );
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethodType[]>([
    { id: 1, type: "Visa", last4: "4242", expiry: "12/25", isDefault: true },
    {
      id: 2,
      type: "Mastercard",
      last4: "8888",
      expiry: "08/26",
      isDefault: false,
    },
  ]);

  const handleDeleteMethod = (id: number) => {
    setPaymentMethods(paymentMethods.filter((method) => method.id !== id));
  };

  const handleSetDefault = (id: number) => {
    setPaymentMethods(
      paymentMethods.map((method) => ({
        ...method,
        isDefault: method.id === id,
      }))
    );
  };

  const handleEditMethod = (method: PaymentMethodType) => {
    setEditingMethod(method);
    setIsAddModalOpen(true);
  };

  return (
    <div className="space-y-4 xs:space-y-5 sm:space-y-6">
      <div>
        <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-[var(--secondary)] mb-1 xs:mb-2">
          Payment Methods
        </h3>
        <p className="text-gray-500 text-xs xs:text-sm sm:text-base">
          Manage your payment options
        </p>
      </div>

      <div className="space-y-3 xs:space-y-4">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="border border-gray-200 rounded-lg p-3 xs:p-4 sm:p-4"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-2 xs:mb-3">
              <div className="flex items-center gap-2 xs:gap-3 w-full sm:w-auto">
                <div className="w-8 h-6 xs:w-10 xs:h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-4 h-4 xs:w-5 xs:h-5 text-gray-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-[var(--secondary)] text-sm xs:text-base sm:text-base truncate">
                    {method.type} •••• {method.last4}
                  </h4>
                  <p className="text-xs xs:text-sm text-gray-500">
                    Expires {method.expiry}
                  </p>
                </div>
                {method.isDefault && (
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full flex-shrink-0">
                    Default
                  </span>
                )}
              </div>
              <div className="flex gap-1.5 xs:gap-2 w-full sm:w-auto">
                {!method.isDefault && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSetDefault(method.id)}
                    className="text-[var(--primary)] border-[var(--primary)] text-xs xs:text-sm px-2 xs:px-3 py-1.5 xs:py-2 flex-1 sm:flex-none"
                  >
                    Set Default
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEditMethod(method)}
                  className="text-[var(--primary)] border-[var(--primary)] text-xs xs:text-sm px-2 xs:px-3 py-1.5 xs:py-2 flex-1 sm:flex-none"
                >
                  <Edit className="w-3 h-3 xs:w-4 xs:h-4 mr-1" />
                  Edit
                </Button>
                {!method.isDefault && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteMethod(method.id)}
                    className="text-red-600 border-red-600 hover:bg-red-50 text-xs xs:text-sm px-2 xs:px-3 py-1.5 xs:py-2 flex-1 sm:flex-none"
                  >
                    <Trash2 className="w-3 h-3 xs:w-4 xs:h-4 mr-1" />
                    Remove
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogTrigger asChild>
          <Button
            onClick={() => {
              setEditingMethod(null);
              setIsAddModalOpen(true);
            }}
            className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-xs xs:text-sm sm:text-base px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 w-full xs:w-auto"
          >
            <Plus className="w-3 h-3 xs:w-4 xs:h-4 mr-1 xs:mr-2" />
            Add New Payment Method
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] mx-4 bg-white">
          <DialogHeader>
            <DialogTitle>
              {editingMethod ? "Edit Payment Method" : "Add New Payment Method"}
            </DialogTitle>
          </DialogHeader>
          <PaymentMethodForm
            method={editingMethod}
            methods={paymentMethods}
            setMethods={setPaymentMethods}
            onClose={() => {
              setIsAddModalOpen(false);
              setEditingMethod(null);
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Payment Method Form Component
function PaymentMethodForm({
  method,
  methods,
  setMethods,
  onClose,
}: {
  method: PaymentMethodType | null;
  methods: PaymentMethodType[];
  setMethods: (methods: PaymentMethodType[]) => void;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    cardNumber: method ? `****-****-****-${method.last4}` : "",
    cardholderName: method ? `${method.type} Cardholder` : "",
    expiryMonth: method ? method.expiry.split("/")[0] : "",
    expiryYear: method ? `20${method.expiry.split("/")[1]}` : "",
    cvv: "",
    cardType: method ? method.type : "Visa",
    isDefault: method ? method.isDefault : false,
  });

  const handleSave = () => {
    const last4 = formData.cardNumber.slice(-4);
    const expiry = `${formData.expiryMonth}/${formData.expiryYear.slice(-2)}`;

    if (method) {
      // Edit existing method
      setMethods(
        methods.map((m) =>
          m.id === method.id
            ? {
                ...m,
                type: formData.cardType,
                last4: last4,
                expiry: expiry,
                isDefault: formData.isDefault,
              }
            : formData.isDefault
            ? { ...m, isDefault: false }
            : m
        )
      );
    } else {
      // Add new method
      const newMethod: PaymentMethodType = {
        id: Date.now(),
        type: formData.cardType,
        last4: last4,
        expiry: expiry,
        isDefault: formData.isDefault,
      };

      if (formData.isDefault) {
        setMethods([
          ...methods.map((m) => ({ ...m, isDefault: false })),
          newMethod,
        ]);
      } else {
        setMethods([...methods, newMethod]);
      }
    }
    onClose();
  };

  return (
    <div className="space-y-4">
      <div>
        <Label
          htmlFor="cardNumber"
          className="text-sm font-medium text-gray-700 mb-2 block"
        >
          Card Number
        </Label>
        <Input
          id="cardNumber"
          type="text"
          placeholder="1234 5678 9012 3456"
          value={formData.cardNumber}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            const formatted = value.replace(/(\d{4})(?=\d)/g, "$1 ");
            setFormData({ ...formData, cardNumber: formatted });
          }}
          maxLength={19}
          className="border-[var(--primary)] focus:ring-[var(--primary)]/30"
        />
      </div>

      <div>
        <Label
          htmlFor="cardholderName"
          className="text-sm font-medium text-gray-700 mb-2 block"
        >
          Cardholder Name
        </Label>
        <Input
          id="cardholderName"
          type="text"
          placeholder="John Doe"
          value={formData.cardholderName}
          onChange={(e) =>
            setFormData({ ...formData, cardholderName: e.target.value })
          }
          className="border-[var(--primary)] focus:ring-[var(--primary)]/30"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label
            htmlFor="expiryMonth"
            className="text-sm font-medium text-gray-700 mb-2 block"
          >
            Month
          </Label>
          <Select
            value={formData.expiryMonth}
            onValueChange={(value) =>
              setFormData({ ...formData, expiryMonth: value })
            }
          >
            <SelectTrigger className="border-[var(--primary)] focus:ring-[var(--primary)]/30">
              <SelectValue placeholder="MM" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 12 }, (_, i) => {
                const month = (i + 1).toString().padStart(2, "0");
                return (
                  <SelectItem key={month} value={month}>
                    {month}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label
            htmlFor="expiryYear"
            className="text-sm font-medium text-gray-700 mb-2 block"
          >
            Year
          </Label>
          <Select
            value={formData.expiryYear}
            onValueChange={(value) =>
              setFormData({ ...formData, expiryYear: value })
            }
          >
            <SelectTrigger className="border-[var(--primary)] focus:ring-[var(--primary)]/30">
              <SelectValue placeholder="YYYY" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 10 }, (_, i) => {
                const year = (new Date().getFullYear() + i).toString();
                return (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label
            htmlFor="cvv"
            className="text-sm font-medium text-gray-700 mb-2 block"
          >
            CVV
          </Label>
          <Input
            id="cvv"
            type="text"
            placeholder="123"
            value={formData.cvv}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setFormData({ ...formData, cvv: value });
            }}
            maxLength={4}
            className="border-[var(--primary)] focus:ring-[var(--primary)]/30"
          />
        </div>
      </div>

      <div>
        <Label
          htmlFor="cardType"
          className="text-sm font-medium text-gray-700 mb-2 block"
        >
          Card Type
        </Label>
        <Select
          value={formData.cardType}
          onValueChange={(value) =>
            setFormData({ ...formData, cardType: value })
          }
        >
          <SelectTrigger className="border-[var(--primary)] focus:ring-[var(--primary)]/30">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Visa">Visa</SelectItem>
            <SelectItem value="Mastercard">Mastercard</SelectItem>
            <SelectItem value="American Express">American Express</SelectItem>
            <SelectItem value="Discover">Discover</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox
          checked={formData.isDefault}
          onCheckedChange={(checked) =>
            setFormData({ ...formData, isDefault: checked === true })
          }
          className="border-[var(--primary)] data-[state=checked]:bg-[var(--primary)]"
        />
        <Label className="text-sm text-gray-700">
          Set as default payment method
        </Label>
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white"
        >
          {method ? "Update Payment Method" : "Add Payment Method"}
        </Button>
      </div>
    </div>
  );
}

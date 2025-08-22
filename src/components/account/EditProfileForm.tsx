"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserProfile } from "./types";

interface EditProfileFormProps {
  userProfile: UserProfile;
  setUserProfile: (profile: UserProfile) => void;
  onClose: () => void;
}

export function EditProfileForm({
  userProfile,
  setUserProfile,
  onClose,
}: EditProfileFormProps) {
  const [formData, setFormData] = useState(userProfile);

  const handleSave = () => {
    setUserProfile(formData);
    onClose();
  };

  return (
    <div className="space-y-4 ">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Full Name
          </Label>
          <Input
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="border-[var(--primary)] focus:border-[var(--primary)]"
          />
        </div>
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Email
          </Label>
          <Input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="border-[var(--primary)] focus:border-[var(--primary)]"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Phone
          </Label>
          <Input
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="border-[var(--primary)] focus:border-[var(--primary)]"
          />
        </div>
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Date of Birth
          </Label>
          <Input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) =>
              setFormData({ ...formData, dateOfBirth: e.target.value })
            }
            className="border-[var(--primary)] focus:border-[var(--primary)]"
          />
        </div>
      </div>

      <div>
        <Label className="text-sm font-medium text-gray-700 mb-2 block">
          Gender
        </Label>
        <Select
          value={formData.gender}
          onValueChange={(value) => setFormData({ ...formData, gender: value })}
        >
          <SelectTrigger className="border-[var(--primary)]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Male">Male</SelectItem>
            <SelectItem value="Female">Female</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-sm font-medium text-gray-700 mb-2 block">
          Address
        </Label>
        <Input
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          className="border-[var(--primary)] focus:border-[var(--primary)]"
        />
      </div>

      <div className="flex gap-3 pt-4">
        <Button
          onClick={handleSave}
          className="flex-1 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white"
        >
          Save Changes
        </Button>
        <Button variant="outline" onClick={onClose} className="flex-1">
          Cancel
        </Button>
      </div>
    </div>
  );
}

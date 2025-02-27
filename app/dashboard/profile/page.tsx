"use client";
import { useState, useEffect } from "react";
import { getUser, updateUserByPut } from "@/utils/api";
import { UserProfile } from "@/lib/types/interface";
import { LoadingIcon } from "@/components/loading-icon";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ProfilePage = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await getUser();
        const response = user.data[0];
        setUser(response);
        setUsername(response.username);
      } catch (error) {
        console.error("Failed to fetch user", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  const handleUpdateUser = async () => {
    if (!user) return;

    const updateData: {
      username?: string;
      oldPassword?: string;
      newPassword?: string;
    } = {};

    if (username.trim() && username !== user.username) {
      updateData.username = username;
    }

    if (oldPassword && newPassword) {
      updateData.oldPassword = oldPassword;
      updateData.newPassword = newPassword;
    }

    if (Object.keys(updateData).length === 0) {
      setMessage("No changes detected.");
      return;
    }

    setIsSubmitting(true);
    try {
      await updateUserByPut(user.id, updateData);
      setMessage("Profile updated successfully!");

      setUser((prev) =>
        prev ? { ...prev, username: updateData.username! } : null
      );
      setOldPassword("");
      setNewPassword("");
    } catch (error) {
      console.error("Error updating profile", error);
      setMessage("Failed to update profile.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return <LoadingIcon />;

  return (
    <>
      {user ? (
        <div className="max-w-sm bg-white shadow-2xl p-6 rounded-lg">
          <div className=" flex items-center justify-between">
            <h1 className="text-2xl font-bold mb-4 text-accent">Profile</h1>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when youre
                    done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="col-span-3 border-second/20"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="oldPassword">Old Password</Label>
                    <Input
                      id="oldPassword"
                      type="password"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      className="col-span-3 border-second/20"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="col-span-3 border-second/20"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    type="submit"
                    className="text-white"
                    onClick={handleUpdateUser}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Saving..." : "Save Changes"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Joined:</strong>{" "}
              {new Date(user.createdAt).toLocaleDateString()}
            </p>
            {message && <p className="mt-2 text-sm text-red-500">{message}</p>}
          </div>
        </div>
      ) : (
        <p>User not found.</p>
      )}
    </>
  );
};

export default ProfilePage;

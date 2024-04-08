import { useState, useRef } from "react";
import UserAvatarCard from "./UserAvatarCard";

export default function UserinfoEditPanel(props) {
  const { selectedAvatar } = props;
  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [changeEmail, setChangeEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleInputChange = (e, setter) => {
    // Update state based on input changes
    setter(e.target.value);
  };

  const handleConfirmName = () => {
    // Perform actions to save first and last name changes
  };

  const handleConfirmEmail = () => {
    if (changeEmail !== confirmEmail) {
      setEmailError("Emails do not match");
    } else {
      setEmailError("");
      // Perform actions to save email changes
    }
  };

  const handleConfirmPassword = () => {
    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
      // Perform actions to save password changes
    }
  };

  const handleForgetPassword = () => {
    // Handle action when user forgets the password
    // You can add logic to send an email with a password reset link, for example
  };

  return (
    <div className="block xl:flex justify-between items-center px-4 md:px-8 py-6 md:py-10 profile-radialbg rounded-[5rem] max-w-[1500px] m-auto">
      <UserAvatarCard selectedAvatar={selectedAvatar} />
      <div className="flex flex-col gap-y-4">
        <button
          onClick={() => setEditMode(!editMode)}
          className="flex justify-end mr-10"
        >
          Edit
        </button>
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-4">
            <div className="block lg:flex items-center gap-x-20 w-full relative">
              <div className="flex items-center">
                <label
                  htmlFor="first-name"
                  className="text-lg lg:text-2xl font-bold text-nowrap w-[130px]"
                >
                  First Name:
                </label>
                <input
                  id="first-name"
                  type="text"
                  value={firstName}
                  onChange={(e) => handleInputChange(e, setFirstName)}
                  placeholder="First Name"
                  disabled={!editMode}
                  style={{ backgroundColor: editMode ? "#ffffff" : "" }}
                  className="common-input w-full lg:w-1/2 mt-4 focus:bg-white focus:text-black focus:caret-black text-2xl font-bold pl-12"
                />
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="last-name"
                  className="text-lg lg:text-2xl font-bold text-nowrap w-[130px]"
                >
                  Last Name:
                </label>
                <input
                  id="last-name"
                  type="text"
                  value={lastName}
                  onChange={(e) => handleInputChange(e, setLastName)}
                  placeholder="Last Name"
                  disabled={!editMode}
                  style={{ backgroundColor: editMode ? "#ffffff" : "" }}
                  className="common-input w-full lg:w-1/2 mt-4 focus:bg-white focus:text-black focus:caret-black text-2xl font-bold pl-12"
                />
              </div>
            </div>

            <button
              onClick={handleConfirmName}
              disabled={!editMode}
              style={{ opacity: editMode ? "1" : "0.5", background: editMode ? "radial-gradient(#456b8d, #283e5c)" : "linear-gradient(to right, #2C2C31, #51516F)"}}
              className="text-sm underline ml-[99px] lg:ml-[130px] mr-auto block py-3 px-6 bg-gradient-to-r from-[#2C2C31] to-[#3e3e5f] rounded-full"
            >
              Confirm
            </button>
          </div>
          <div className="flex justify-start gap-x-4 w-full">
            <p className="text-lg lg:text-2xl font-bold mt-3 w-[130px] text-right">
              Email:
            </p>
            <div className="flex flex-col gap-y-4 w-full">
              <input
                type="email"
                value={changeEmail}
                onChange={(e) => handleInputChange(e, setChangeEmail)}
                placeholder="Change Email"
                disabled={!editMode}
                style={{ backgroundColor: editMode ? "#ffffff" : "" }}
                className="common-input w-full focus:bg-white focus:text-black focus:caret-black"
              />
              <input
                type="email"
                value={confirmEmail}
                onChange={(e) => handleInputChange(e, setConfirmEmail)}
                placeholder="Confirm Email"
                disabled={!editMode}
                style={{ backgroundColor: editMode ? "#ffffff" : "" }}
                className="common-input w-full focus:bg-white focus:text-black focus:caret-black"
              />
              <button
                onClick={handleConfirmEmail}
                disabled={!editMode}
                style={{ opacity: editMode ? "1" : "0.5", background: editMode ? "radial-gradient(#456b8d, #283e5c)" : "linear-gradient(to right, #2C2C31, #51516F)"}}
                className="text-sm underline mr-auto block py-3 px-6 bg-gradient-to-r from-[#2C2C31] to-[#51516F] rounded-full"
              >
                Confirm
              </button>
              {emailError && <span style={{ color: "red" }}>{emailError}</span>}
            </div>
          </div>
          <div className="flex justify-start gap-x-4 w-full">
            <p className="text-lg lg:text-2xl font-bold mt-3 w-[130px] text-right">
              Password:
            </p>
            <div className="flex flex-col gap-y-4 w-full">
              <div className="relative">
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => handleInputChange(e, setCurrentPassword)}
                  placeholder="Current Password"
                  disabled={!editMode}
                  style={{ backgroundColor: editMode ? "#ffffff" : "" }}
                  className="common-input w-full focus:bg-white focus:text-black focus:caret-black"
                />
                <button
                  onClick={handleForgetPassword}
                  disabled={!editMode}
                  className="absolute right-4 top-3 underline text-gray-400"
                >
                  Forgot Password ?
                </button>
              </div>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => handleInputChange(e, setNewPassword)}
                placeholder="New Password"
                disabled={!editMode}
                style={{ backgroundColor: editMode ? "#ffffff" : "" }}
                className="common-input w-full focus:bg-white focus:text-black focus:caret-black"
              />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => handleInputChange(e, setConfirmPassword)}
                placeholder="Confirm Password"
                disabled={!editMode}
                style={{ backgroundColor: editMode ? "#ffffff" : "" }}
                className="common-input w-full focus:bg-white focus:text-black focus:caret-black"
              />
              <button
                onClick={handleConfirmPassword}
                disabled={!editMode}
                style={{ opacity: editMode ? "1" : "0.5", background: editMode ? "radial-gradient(#456b8d, #283e5c)" : "linear-gradient(to right, #2C2C31, #51516F)"}}
                className="text-sm underline mr-auto block py-3 px-6 bg-gradient-to-r from-[#2C2C31] to-[#51516F] rounded-full"
              >
                Confirm
              </button>
              {passwordError && (
                <span style={{ color: "red" }}>{passwordError}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

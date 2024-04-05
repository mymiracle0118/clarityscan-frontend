import { useState, useRef } from "react";
import { user } from "@/assets/";
import EditIcon from "@mui/icons-material/Edit";

export default function UserAvatarCard() {
  const [userImage, setUserImage] = useState(user); // Initial user image
  const fileInputRef = useRef(null);

  const handleUploadPhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Update user image state with the selected image
        setUserImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOpenFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className=" px-6 py-12 avatar-radialbg rounded-full h-full w-fit m-auto xl:m-0">
      <div className="relative">
        <label htmlFor="upload-photo">
          <img
            src={userImage}
            alt=""
            className="w-64 h-64 rounded-full cursor-pointe border-8 border-[#52525f] opacity-75 m-auto block object-cover"
          />
        </label>
        <input
          id="upload-photo"
          type="file"
          accept="image/*"
          onChange={handleUploadPhoto}
          style={{ display: "none" }}
          ref={fileInputRef}
        />
        <button
          onClick={handleOpenFileInput}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <EditIcon className="text-white" style={{ fontSize: "40px" }} />
        </button>
      </div>
      <p className="text-center pt-3">@kilian</p>
      <button
        onClick={handleOpenFileInput}
        className="mt-6 mb-6 mx-auto block p-4 bg-gradient-to-r from-[#2C2C31] to-[#51516F] rounded-full"
      >
        Change Photo
      </button>
    </div>
  );
}

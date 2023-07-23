import React, { useCallback } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_UPDATE_PROFILE_PICTURE } from "../../utils/Mutations";

const ProfilePicture = ({ user }) => {
  const [createUpdateProfilePicture] = useMutation(CREATE_UPDATE_PROFILE_PICTURE, {
    refetchQueries: [{ query: GET_CURRENT_USER }],
  });

  const handleImageUpload = useCallback(async (e) => {
    e.preventDefault();
    const file = e.target.elements.image.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "ml_default");
    data.append("cloud_name", "dggdcatjy");

    const res = await fetch("https://api.cloudinary.com/v1_1/dggdcatjy/image/upload", {
      method: "POST",
      body: data,
    });

    const fileData = await res.json();
    const image = fileData.secure_url;

    await createUpdateProfilePicture({
      variables: {
        id: user.id,
        profilePicture: image,
      },
    });
  }, [user, createUpdateProfilePicture]);

  return (
    <div>
      <form onSubmit={handleImageUpload}>
        <label htmlFor="image" className="font-bold text-sm">
          Change profile picture:{" "}
        </label>
        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          className="bg-white outline-none text-sm"
        />
        <button className="text-blue-600 float-right underline" type="submit">
          Submit picture
        </button>
      </form>
    </div>
  );
};

export default ProfilePicture;

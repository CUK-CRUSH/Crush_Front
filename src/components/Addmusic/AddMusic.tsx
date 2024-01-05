import React, { useCallback } from "react";
import { updateArtist, updateTitle, updateURL } from "@reducer/musicadd";
import { RootState } from "@store/index";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleShowInformation } from "@reducer/toggle/addMusicToggle";
import { InputComponent } from "@components/Addmusic/AddMusicInput";
import Swal from "sweetalert2";

const AddMusic: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { title, artist, url } = useSelector(
    (state: RootState) => state.musicAdd
  );

  const { showInformation } = useSelector(
    (state: RootState) => state.addMusicInformationToggle
  );
  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateTitle(e.target.value));
    },
    [dispatch]
  );

  const handleArtistChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateArtist(e.target.value));
    },
    [dispatch]
  );
  const handleURLChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateURL(e.target.value));
    },
    [dispatch]
  );

  const handleInformationToggle = useCallback(() => {
    dispatch(toggleShowInformation());
  }, [dispatch]);

  const handleSave = useCallback(() => {
    if (!url.includes("https://www.youtube.com/")) {
      Swal.fire({
        icon: "warning",
        title: `You can't use "${url}"`,
        text: "You have to include https://www.youtube.com/",
      });
      return;
    }
    navigate(`/admin/1`); // 나중에 리다이렉트 주소 수정
  }, [navigate, url]);

  return (
    <div className="z-30 h-full w-full flex flex-col bg-black text-white py-10 text-[17px] leading-[18px]">
      <div className="text-center py-20">
        <h2 className="text-[27px] font-bold mb-4 ">Add Music</h2>
      </div>
      <div className="space-y-8 mx-4">
        <InputComponent
          label="Title"
          placeholder="Title"
          value={title}
          required={true}
          onChange={handleTitleChange}
        />
        <InputComponent
          label="Artist"
          placeholder="Artist"
          value={artist}
          required={true}
          onChange={handleArtistChange}
        />
        <InputComponent
          label="URL"
          placeholder="https://www.youtube.com/"
          value={url}
          required={true}
          onChange={handleURLChange}
          infoButton={true}
          infoText={
            showInformation ? "Please add the youtube link as the url." : ""
          }
          infoToggleHandler={handleInformationToggle}
        />
        {/* URL은 "https://www.youtube.com/"를 무조건 포함해야 Add되도록 제한을 걸어놓는다. */}
        <div className="flex justify-center">
          <button
            onClick={handleSave}
            className="bg-white font-bold text-black text-[19px] w-[360px] h-[58px] smartPhoneXs:mt-10 smartPhone:mt-20 tablet:mt-32 mt-40 rounded-3xl"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMusic;

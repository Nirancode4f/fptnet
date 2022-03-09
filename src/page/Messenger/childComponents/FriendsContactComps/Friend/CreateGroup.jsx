import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Avatar } from "@mui/material";
import ContactListItem from "../ContactListItem";
import AxiosMain from "../../../../../API/AxiosMain";
import GroupPopupItem from "./GroupPopupItem";

const testlink =
  "data:image/png;base64,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";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#f36f21",
    },
    "&:hover fieldset": {
      borderColor: "#f36f21",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#f36f21",
    },
  },
});

const loginData = JSON.parse(localStorage.getItem("loginData"));

export default function CreateGroup({ setOpenPopUp }) {
  const [listFriends, setListFriends] = useState([]);
  const [listAddGrMem, setListAddGrMem] = useState(new Set([]));
  const getAllFriends = async () => {
    try {
      AxiosMain.post("/api/friend/get", {
        userId: loginData.user._id,
      }).then((res) => {
        setListFriends(res.friends);
        console.log(`get friends =`, res);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckedAddMember = (userId) => {
    listAddGrMem.add(userId);
    console.log(`add mem=`, listAddGrMem);
  };

  const handleCheckedRevMember = (userId) => {
    listAddGrMem.delete(userId);
    console.log(`rev mem=`, listAddGrMem);
  };

  const createNewGroup = async (groupName, listMembers) => {
    try {
      AxiosMain.post("/api/group/conversation/create", {
        name: groupName,
        members: listMembers,
      }).then((res) => {
        console.log(`after create gr`, res);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnClickCreate = () => {
    listAddGrMem.add(loginData.user._id);
    const TextFieldNode = document.getElementById("custom-css-outlined-input");
    createNewGroup(TextFieldNode.value, [...listAddGrMem]);
    setOpenPopUp(false);
  };

  useEffect(() => {
    getAllFriends();
  }, []);

  return (
    <>
      <div className="CreateGroup">
        <div className="create-group-popup">
          <div className="create-group-header">
            <span className="create-group-header-name">Create Group</span>
            <span className="create-group-header-quick-btn">
              <IconButton onClick={(e) => setOpenPopUp(false)}>
                <CloseIcon />
              </IconButton>
            </span>
          </div>

          <div className="create-group-body">
            <CustomTextField
              color="warning"
              size="small"
              fullWidth={true}
              id="custom-css-outlined-input"
              placeholder="Group Name"
            />
            <div className="create-group-body-title">Thêm thành viên</div>

            <CustomTextField
              color="warning"
              size="small"
              fullWidth={true}
              id="custom-css-outlined-input"
              placeholder="Search Friends"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton color="warning">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <div className="friends-list-box">
              {listFriends.length > 0 ? (
                listFriends.map((friend) => (
                  <GroupPopupItem
                    data={friend}
                    handleAddMember={handleCheckedAddMember}
                    handleRevMember={handleCheckedRevMember}
                  />
                ))
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="create-group-footer">
            <Button
              color="warning"
              variant="contained"
              onClick={handleOnClickCreate}
            >
              Create
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

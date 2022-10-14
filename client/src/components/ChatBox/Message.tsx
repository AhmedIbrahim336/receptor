import React from "react";
import { Stack, IconButton, Box, Avatar, Typography } from "@mui/material";
import { stringAvatar } from "../../utils/colors";
import { IMessage } from "../../state/messages/reducer";
import { useAppSelector } from "../../store";
import moment from "moment";

const Message: React.FC<{
  message: IMessage;
}> = ({ message }) => {
  const user = useAppSelector((state) => state.user.info);
  const fromUser = message.userId === user?.id;

  return (
    <Stack
      direction={fromUser ? "row-reverse" : "row"}
      alignItems="flex-end"
      sx={{ maxWidth: "50%", ml: fromUser ? "auto" : "0px", mt: "24px" }}
    >
      <Box>
        <Avatar {...stringAvatar("message.user")} />
      </Box>
      <Stack
        alignItems={fromUser ? "flex-end" : "flex-start"}
        sx={{ px: "16px" }}
      >
        <Typography
          sx={{
            bgcolor: fromUser ? "primary.main" : "grey.300",
            p: "16px 20px",
            borderRadius: "0.6rem",
            borderBottomRightRadius: fromUser ? "0rem" : "0.6rem",
            borderBottomLeftRadius: fromUser ? "0.6rem" : "0rem",
            mb: "4px",
          }}
          variant="body1"
          color={fromUser ? "common.white" : "grey.600"}
        >
          {message.body}
        </Typography>
        <Typography variant="caption" color="grey.500">
          {moment(message.createdAt).fromNow()}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Message;

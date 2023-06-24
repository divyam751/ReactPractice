import React from "react";
import { Box, HStack, PinInput, PinInputField } from "@chakra-ui/react";
const PinInputCom = () => {
  return (
    <Box>
      <HStack>
        <PinInput>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
    </Box>
  );
};

export default PinInputCom;

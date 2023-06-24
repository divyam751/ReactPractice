import React from "react";
import { Box, Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
const CheckBoxComp = () => {
  return (
    <Box>
      <Stack spacing={5} direction='row'>
        <Checkbox colorScheme='red' defaultChecked>
          Checkbox
        </Checkbox>
        <Checkbox colorScheme='green' defaultChecked>
          Checkbox
        </Checkbox>
      </Stack>
    </Box>
  );
};

export default CheckBoxComp;

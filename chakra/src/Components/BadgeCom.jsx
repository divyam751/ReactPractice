import { Avatar, Badge, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const BadgeCom = () => {
  return (
    <Box>
      <Flex>
        <Avatar src='https://bit.ly/sage-adebayo' />
        <Box ml='3'>
          <Text fontWeight='bold'>
            Segun Adebayo
            <Badge ml='1' colorScheme='green'>
              New
            </Badge>
          </Text>
          <Text fontSize='sm'>UI Engineer</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default BadgeCom;

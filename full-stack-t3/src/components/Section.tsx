import { Box, forwardRef } from "@chakra-ui/react";

export const Section = forwardRef((props, ref) => {
  return (
    <Box
      borderRadius="md"
      borderWidth="1px"
      p={6}
      boxShadow="md"
      background="whiteAlpha.900"
      ref={ref}
      {...props}
    >
      {props.children}
    </Box>
  );
});

import { Box } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";

export interface ImageWithOverlayContentProps {
  src: string;
  width: number;
  height: number;
  children?: ReactNode;
}

export const ImageWithOverlayContent: FC<ImageWithOverlayContentProps> = (
  props
) => {
  return (
    <Box position="relative" display="flex" w={props.width} h={props.height}>
      <Box
        as="img"
        src={props.src}
        alt="Blog preview image"
        position="absolute"
        objectFit="cover"
        w="100%"
        h="100%"
        top={0}
        left={0}
      />
      <Box
        zIndex={1}
        bgGradient="linear(to-b, transparent 50%, rgba(0, 0, 0, 0.7) 85%)"
        opacity={1}
        w="100%"
        h="100%"
        top={0}
        left={0}
        position="absolute"
      />
      <Box zIndex={1} color="white" alignSelf="end" w="100%" px={3} py={2}>
        {props.children}
      </Box>
    </Box>
  );
};

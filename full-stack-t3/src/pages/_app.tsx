import { type AppType } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { api } from "../utils/api";
import { BlobsBackground, colors } from "../views/BlogsBackground";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <BlobsBackground blobColors={colors}>
        <Component {...pageProps} />
      </BlobsBackground>
    </ChakraProvider>
  );
};

export default api.withTRPC(MyApp);

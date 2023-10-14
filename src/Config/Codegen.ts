import { CodegenConfig } from "@graphql-codegen/cli";
import { URL } from "../Constants/index";

const config: CodegenConfig = {
  schema: URL,
  overwrite: true,
  generates: {
    "src/__generated__/GraphQLTypes.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};

export default config;

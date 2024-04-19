import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  documents: ["src/**/*.ts"],
  generates: {
    "./src/lib/server/gql/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
      hooks: {
        afterOneFileWrite: "eslint --fix",
      },
    },
  },
  ignoreNoDocuments: true,
  schema: "http://localhost:8888/graphql",
};

export default config;

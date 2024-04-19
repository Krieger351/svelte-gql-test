/* eslint-disable */
import * as types from "./graphql";
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "\n\tquery ALL_PEOPLE {\n\t\tallPeople {\n\t\t\tpeople {\n\t\t\t\tname\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n":
    types.All_PeopleDocument,
  "\n\tquery GET_PERSON($ID: ID!) {\n\t\tperson(id: $ID) {\n\t\t\tname\n\t\t\tbirthYear\n\t\t\teyeColor\n\t\t\tgender\n\t\t\thairColor\n\t\t\theight\n\t\t\tfilmConnection {\n\t\t\t\tfilms {\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\n\t\t\thomeworld {\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n":
    types.Get_PersonDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n\tquery ALL_PEOPLE {\n\t\tallPeople {\n\t\t\tpeople {\n\t\t\t\tname\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n",
): (typeof documents)["\n\tquery ALL_PEOPLE {\n\t\tallPeople {\n\t\t\tpeople {\n\t\t\t\tname\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n\tquery GET_PERSON($ID: ID!) {\n\t\tperson(id: $ID) {\n\t\t\tname\n\t\t\tbirthYear\n\t\t\teyeColor\n\t\t\tgender\n\t\t\thairColor\n\t\t\theight\n\t\t\tfilmConnection {\n\t\t\t\tfilms {\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\n\t\t\thomeworld {\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n",
): (typeof documents)["\n\tquery GET_PERSON($ID: ID!) {\n\t\tperson(id: $ID) {\n\t\t\tname\n\t\t\tbirthYear\n\t\t\teyeColor\n\t\t\tgender\n\t\t\thairColor\n\t\t\theight\n\t\t\tfilmConnection {\n\t\t\t\tfilms {\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\n\t\t\thomeworld {\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;

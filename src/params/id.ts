import type { ParamMatcher } from "@sveltejs/kit";

export const match: ParamMatcher = (parameter) => {
  return /\w+/.test(parameter);
};

import type { LayoutServerData } from "./$types";
import { LANGUAGE } from "$env/static/private";

export const load: LayoutServerData = () => ({
  lang: LANGUAGE,
});

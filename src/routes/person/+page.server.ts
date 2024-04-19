import { query } from "$lib/server/api";
import { allPeople } from "$lib/server/queries";
import type { PageServerLoad } from "./$types.ts";

const load: PageServerLoad = async () => {
  const { data } = await query({ query: allPeople });
  return { people: data.allPeople?.people };
};

export { load };

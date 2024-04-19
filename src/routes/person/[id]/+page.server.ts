import { query } from "$lib/server/api";
import { person } from "$lib/server/queries";
import type { PageServerLoad } from "./$types.ts";

const load: PageServerLoad = async ({ params }) => {
  const { data } = await query({ query: person, variables: { ID: params.id } });
  return { person: data.person };
};

export { load };

import type { PageServerLoad, EntryGenerator } from "./$types.ts";

const load: PageServerLoad = ({ params }) => {
  return { id: params.id } as { id: string | undefined; lang: string };
};

const entries: EntryGenerator = () => {
  return [{ id: "1" }];
};

export { entries, load };

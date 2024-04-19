import type { PageServerLoad, EntryGenerator } from "./$types.ts";

const load: PageServerLoad = ({ params }) => {
  return { id: params.id } as { id: string | undefined };
};

const entries: EntryGenerator = () => {
  return [{ id: "1" }];
};

export { entries, load };

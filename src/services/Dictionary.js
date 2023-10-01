const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const getMeaning = async ({ search }) => {
  const res = await fetch(`${URL}${encodeURIComponent(search)}`);

  if (res.ok) {
    return { data: await res.json(), error: false };
  }

  if (res.status === 404) {
    return { error: true, data: await res.json() };
  }

  return {
    error: true,
    data: {
      title: "No Definitions Found",
      message:
        "Sorry pal, we couldn't proccess the word right now. Service is unavailable.",
    },
  };
};

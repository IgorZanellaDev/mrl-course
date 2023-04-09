const parseLinkHeader = (linkHeader: string) =>
  Object.fromEntries(
    linkHeader
      .split(", ")
      .map((header) => header.split("; "))
      .map((header) => [
        header[1].replace(/"/g, "").replace("rel=", ""),
        Object.fromEntries(
          new URLSearchParams(
            header[0]
              .slice(1, -1)
              .replace(import.meta.env.VITE_API_URL, "")
              .split("?")[1],
          ),
        ),
      ]),
  );

export { parseLinkHeader };

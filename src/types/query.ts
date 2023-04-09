enum PaginationKey {
  First = "first",
  Last = "last",
  Previous = "prev",
  Next = "next",
}

interface PaginatedData<T> {
  data: T[];
  pagination: { [key in PaginationKey]?: { _page: number; _limit: number } };
}

export type { PaginatedData };

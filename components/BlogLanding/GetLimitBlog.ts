import { BlogData } from "./BlogData";

export const GetLimitedBlog = (portfolio: BlogData[], limit: number) => {
  return portfolio.slice(0, limit);
};

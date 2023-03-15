import { Period } from "../store/constants";
import { Post, thismonth, thisweek, TimelinePost, today } from "@/posts";
import { DateTime } from "luxon";
import { defineStore } from "pinia";

interface PostsState {
  ids: string[];
  all: Map<string, Post>;
  selectedPeriod: Period;
}
export const usePosts = defineStore("posts", {
  state: (): PostsState => ({
    ids: [today.id, thisweek.id, thismonth.id],
    all: new Map([
      [today.id, today],
      [thisweek.id, thisweek],
      [thismonth.id, thismonth],
    ]),
    selectedPeriod: "Today",
  }),
  actions: {
    setSelectedPeriod(period: Period) {
      this.selectedPeriod = period;
    },
  },
  getters: {
    filteredPost: (state): TimelinePost[] => {
      //   const posts = computed(() => {
      return state.ids
        .map((id) => {
          const post = state.all.get(id);
          console.log("ID===== ",post)
          if (!post) {
            throw new Error(`Post with id of ${id} was expected but not found`);
          }
          return {
            ...post,
            created: DateTime.fromISO(post.created),
          };
        })
        .filter((post) => {
          console.log("post inside filter selectedPeriod", state.selectedPeriod);

          if (state.selectedPeriod === "Today") {
            return post.created >= DateTime.now().minus({ day: 1 });
          }
          if (state.selectedPeriod === "This Week") {
            return post.created >= DateTime.now().minus({ week: 1 });
          }
          return post;
        });
    },
  },
});
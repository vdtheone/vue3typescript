import { Period,Userid } from "../store/constants";
import { Post, thismonth, thisweek, today, PostFetch, UserIdPost } from "@/posts";
import { DateTime } from "luxon";
import { defineStore } from "pinia";

// interface PostsState {
//   ids: string[];
//   all: Map<string, Post>;
//   selectedPeriod: Userid;
// }
interface UserIdPostState {
  ids: string[];
  all: Map<string, PostFetch>;
  selectedPeriod: Userid;
}

function delay() {
  return new Promise<void>(res=>setTimeout(res,1500))
}
export const usePosts = defineStore("posts", {
  // state: (): PostsState => ({
  //   ids: [today.id, thisweek.id, thismonth.id],
  //   all: new Map([
  //     [today.id, today],
  //     [thisweek.id, thisweek],
  //     [thismonth.id, thismonth],
  //   ]),
  //   selectedPeriod: "Today",
  // }),
  // state: (): PostsState => ({
  //   ids: [],
  //   all: new Map(),
  //   selectedPeriod: "1",
  // }),
  state: (): UserIdPostState => ({
    ids: [],
    all: new Map(),
    selectedPeriod: "1",
  }),
  actions: {
    setSelectedPeriod(period: Userid) {
      this.selectedPeriod = period;
    },
    async fetchPosts(){
      const res = await window.fetch("https://jsonplaceholder.typicode.com/posts")
      console.log("Responce = ",res);
      
      const data = (await res.json()) as UserIdPost[]
      console.log("data = ",data);

      await delay()
      const ids:string[] = []
      const all = new Map<string, UserIdPost>()
      for (const post of data) {
        ids.push(post.id)
        all.set(post.id,post)
      }
      this.ids = ids
      this.all=all
    }
  },
  getters: {
    filteredPost: (state): UserIdPost[] => {
      //   const posts = computed(() => {
      console.log("filteredPost");
      
      return state.ids
        .map((id) => {
          const post = state.all.get(id);
          if (!post) {
            throw new Error(`Post with id of ${id} was expected but not found`);
          }
          console.log("inside map post = ",post);
          return {
            ...post,
            id: post.id,
          };
        })
        .filter((post) => {
          console.log("selectedPeriod post userid ==== ", post.id);
          console.log("selectedPeriod === ", state.selectedPeriod);

          if (state.selectedPeriod == "1") {
            console.log("inside if 1");
            return post.userId == "1";
            // return post.userId == "1";
          }
          if (state.selectedPeriod == "2") {
            console.log("inside if 2",post);
            return post.userId == "2";
            // return post.userId=="2" ;
          }
          console.log("post",post);          
          return post;
        });
    },
  },
});


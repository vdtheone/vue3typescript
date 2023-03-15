import { Post, thismonth, thisweek, today } from "@/posts";
import { defineStore } from "pinia";

interface PostsState{
    ids:string[],
    all:Map<string, Post>
}
export const usePosts = defineStore("posts",{
    state:():PostsState=>({
        ids:[today.id,thisweek.id,thismonth.id],
        all:new Map([
            [today.id, today],
            [thisweek.id, thisweek],
            [thismonth.id, thismonth],
        ])
    }),
    actions:{
        // ... 
    }
})



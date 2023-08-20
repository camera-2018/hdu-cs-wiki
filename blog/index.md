---
title: Blogs
footer: false
editLink: false
aside: false
next: false 
lastUpdated: false
sidebar: false
---

<script setup>
import { ref } from 'vue'
import PostList from '../components/PostList.vue'
import Blogger from '../components/Blogger.vue'
const goUrl = (url) => {
  window.open(url, "_blank")
}
</script>

# Friends <Badge type="tip" text="join us" @click="goUrl('https://github.com/NX-Official/friends-link-plus/edit/main/input/friends.json')" style="cursor: pointer;"/>

<Suspense><Blogger ></Blogger></Suspense>

---

# Recent Posts <Badge type="warning" text="beta" />

<Suspense><PostList ></PostList></Suspense>

<a href="https://github.com/NX-Official/friends-link-plus/edit/main/input/friends.json" target="_blank" style="font-size: 0.5rem; color: #666;">在GitHub上修改关注列表</a>

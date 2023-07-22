---
title: Blogs
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

# Friends <Badge type="tip" text="join us" @click="goUrl('https://github.com/NX-Official/friends-link-plus/edit/main/input/friends.json')" />

<Suspense><Blogger ></Blogger></Suspense>

---

# Recent Posts <Badge type="warning" text="beta" />

<Suspense><PostList ></PostList></Suspense>

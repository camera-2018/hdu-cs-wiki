---
title: Blogs
editLink: false
aside: false
---

<script setup>
import { ref } from 'vue'
import PostList from '../components/PostList.vue'
import Blogger from '../components/Blogger.vue'
</script>

# Friends <Badge type="warning" text="beta" />

<Suspense><Blogger ></Blogger></Suspense>

---

# Recent Posts <Badge type="warning" text="beta" />

<Suspense><PostList ></PostList></Suspense>

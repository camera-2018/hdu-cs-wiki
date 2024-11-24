<script setup lang="ts">
import { ref, computed } from "vue";
import Pagination from "./Pagination.vue";
import PostItem from "./PostItem.vue";
const props = {
  data: (
    await (
      await fetch(
        "https://gh.dn11.top/https://raw.githubusercontent.com/NX-Official/friends-link-plus/main/output/friends.json"
      )
    ).json()
  ).posts,
};
const pageSize = 10;
// const Date = ref('')
const pageTotal = ref(Math.ceil(props.data.length / pageSize));
const pageNum = ref(1);
// const searchText = ref('')
// const onsearchText = ref('')
const pluginLists = computed(() => {
  let data_ = props.data; //.filter(item => item.Date == Date.value)
  // if (!!onsearchText.value) {
  //   data_ = data_.filter(item => item.name.indexOf(onsearchText.value) > -1)
  // }
  pageTotal.value = Math.ceil(data_.length / pageSize);
  data_ = data_.slice((pageNum.value - 1) * pageSize, pageNum.value * pageSize);
  return data_;
});
// const setDate = (Date_) => {
//   Date.value = Date_
//   searchText.value = ""
//   onSearch()
// }
// const onSearch = () => {
//   onsearchText.value = searchText.value
//   pageNum.value = 1
// }
</script>

<template>
  <div>
    <!-- <div class="tab">
      <div opacity="80" text="sm">
        类型{{ props.data }}
      </div>
      <div class="select-list">
        <button class="select-button" @click="setDate('plugin')" :class="{ 'active': type == 'plugin' }">
          插件
        </button>
        <button class="select-button" @click="setType('adapter')" :class="{ 'active': type == 'adapter' }">
          适配器
        </button>
        <button class="select-button" @click="setType('example')" :class="{ 'active': type == 'example' }">
          样例
        </button>
      </div>
    </div> -->
    <!-- <div class="search-bar">
      <div class="divider" style="margin-top: 1rem;" />
      <div class="search" @change="onSearch">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" class="icon">
          <path fill="currentColor"
            d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z" />
        </svg>
        <input data-v-48d9a5fe="" class="search-input" type="text" role="search" placeholder="Search..."
          v-model="searchText">
      </div>
      <div class="divider" style="margin-bottom: 1rem;" />
    </div> -->
    <Pagination
      :pageTotal="pageTotal"
      v-model="pageNum"
      style="width: 100%; padding: 1rem 0"
      key="0"
    />
    <div class="card-list">
      <PostItem
        v-for="(item, index) in pluginLists"
        :key="index"
        :Title="item.Title"
        :Content="item.Content"
        :Date="item.Date"
        :Author="item.Author"
        :tag="item?.tag"
        :cover="item?.cover"
        :PostURL="item.PostURL"
        :AuthorURL="item.AuthorURL"
      />
    </div>
    <Pagination
      :pageTotal="pageTotal"
      v-model="pageNum"
      style="width: 100%; padding: 1rem 0"
      key="1"
    />
  </div>
</template>

<style scoped>
.tab {
  grid-row-gap: 0.5rem;
  row-gap: 0.5rem;
  margin-top: 2.5rem;
  grid-template-columns: 80px auto;
  display: grid;
}

.sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.select-list {
  grid-gap: 0.5rem;
  gap: 0.5rem;
  flex-wrap: wrap;
  display: flex;
  margin-bottom: 0.5rem;
}

.select-button {
  border-radius: 0.25rem;
  background-color: #9ca3af0d;
  padding: 0.125rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.select-button:hover {
  cursor: pointer;
  background-color: #9ca3af1a;
}

.select-button.active {
  background-color: #0099ff0d;
  --un-text-opacity: 1;
  color: var(--vp-c-brand-lighter);
}

.divider {
  background-color: rgba(60, 60, 67, 0.12);
  height: 1px;
}

.search {
  padding: 0.5rem;
  display: flex;
}

.icon {
  margin-right: 0.5rem;
}

.search-input {
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
}

.card-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.card {
  display: block;
  border: 1px solid rgba(82, 82, 89, 0.32);
  border-radius: 0.5rem;
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  transition: border-color 0.25s;
  cursor: pointer;
}

.card:hover {
  border: 1px solid #09f;
}

.card-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-title {
  display: flex;
  font-size: large;
  font-weight: bold;
  align-items: center;
}

.card-github {
  cursor: pointer;
}

.card-github:hover {
  fill: #09f;
}

.card-des {
  color: #3c3c43;
  opacity: 0.7;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-top: 0.3rem;
}

.card-tags {
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.card-tag {
  margin: 0 0.5rem;
  padding: 0 0.5rem;
  background-color: #9ca3af2b;
}

.card-tags .card-tag:first-child {
  margin-left: 0;
  /* background-color: #6e6e6e; */
}

.card-details {
  margin: 0.8rem 0 0.5rem 0;
}

.card-text {
  margin-left: 0.5rem;
  font-size: 0.95rem;
  line-height: 1.5rem;
}

.card-detail {
  display: flex;
  align-items: center;
}

.card-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.4rem 1rem;
  background-color: #f6f6f7;
  border-radius: 0.5rem;
  cursor: pointer;
}

.card-button:hover {
  color: #09f;
}

.card-button:hover {
  fill: #09f;
}

@media (prefers-color-scheme: dark) {
  .card-button {
    background-color: #9ca3af0d;
  }

  .card-des {
    color: #9ca3af;
  }
}
</style>

<script setup lang="ts">
import { computed, ref } from "vue";
import VPTeamMembersItem from "./BloggerItem.vue";
const size = "small";
const props = {
  friends: (
    await (
      await fetch(
        "https://gh.dn11.top/https://raw.githubusercontent.com/NX-Official/friends-link-plus/main/output/friends.json"
      )
    ).json()
  ).friends,
};
const isMore = ref(false);
const members = computed(() => {
  if (isMore.value) {
    return props.friends;
  } else {
    return props.friends.slice(0, 5);
  }
});
const classes = computed(() => [size ?? "medium", `count-${members.value.length}`]);
</script>

<template>
  <div class="VPTeamMembers" :class="classes">
    <div class="container">
      <div v-for="member in members" :key="member.name" class="item">
        <VPTeamMembersItem :size="size" :member="member" />
      </div>
      <div v-if="!isMore">
        <VPTeamMembersItem :blank="true" @click="isMore = true" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPTeamMembers.small .container {
  grid-template-columns: repeat(auto-fit, minmax(224px, 1fr));
}

.VPTeamMembers.small.count-1 .container {
  max-width: 276px;
}
.VPTeamMembers.small.count-2 .container {
  max-width: calc(276px * 2 + 24px);
}
.VPTeamMembers.small.count-3 .container {
  max-width: calc(276px * 3 + 24px * 2);
}

.VPTeamMembers.medium .container {
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
}

@media (min-width: 375px) {
  .VPTeamMembers.medium .container {
    grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
  }
}

.VPTeamMembers.medium.count-1 .container {
  max-width: 368px;
}
.VPTeamMembers.medium.count-2 .container {
  max-width: calc(368px * 2 + 24px);
}

.container {
  display: grid;
  gap: 24px;
  margin: 0 auto;
  max-width: 1152px;
}
</style>

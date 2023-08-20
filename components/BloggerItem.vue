<script setup>
defineProps({
  size: String,
  member: Object,
  blank: Boolean,
});

const goUrl = (url) => {
  window.open(url, "_blank");
};
</script>

<template>
  <article class="VPTeamMembersItem" :class="[size ?? 'medium']">
    <div class="profile" @click="goUrl(member.url)" v-if="!blank">
      <figure class="avatar">
        <img class="avatar-img" :src="member.avatar" :alt="member.name" />
      </figure>
      <div class="data">
        <div class="author_name">
          {{ member.name }}
        </div>
        <p v-if="member.title || member.org" class="affiliation">
          <span v-if="member.title" class="title">
            {{ member.title }}
          </span>
          <span v-if="member.title && member.org" class="at"> @ </span>
        </p>
        <p v-if="member.description" class="desc" @click.stop>
          {{ member.description }}
        </p>
        <div v-if="member.url" class="links">
          <svg
            v-if="member.rss"
            @click="goUrl(member.rss)"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0a8 8 0 0 0-8-8a1 1 0 0 1 0-2zm0 4a6 6 0 0 1 6 6a1 1 0 1 1-2 0a4 4 0 0 0-4-4a1 1 0 0 1 0-2zm.5 7a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="profile" v-else><div class="more">More..</div></div>
  </article>
</template>

<style scoped>
.VPTeamMembersItem {
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.VPTeamMembersItem.small .profile {
  padding: 12px;
}

.VPTeamMembersItem.small .data {
  padding-top: 10px;
  width: 100px;
}

.VPTeamMembersItem.small .avatar {
  width: 64px;
  height: 64px;
}

.VPTeamMembersItem.small .name {
  line-height: 24px;
  font-size: 16px;
}

.VPTeamMembersItem.small .affiliation {
  padding-top: 4px;
  line-height: 20px;
  font-size: 14px;
}

.VPTeamMembersItem.small .desc {
  padding-top: 12px;
  line-height: 20px;
  font-size: 14px;
}

.VPTeamMembersItem.small .links {
  margin: 0 -16px -20px;
  padding: 10px 0 0;
}

.VPTeamMembersItem.medium .profile {
  padding: 48px 32px;
}

.VPTeamMembersItem.medium .data {
  padding-top: 24px;
  text-align: center;
}

.VPTeamMembersItem.medium .avatar {
  width: 96px;
  height: 96px;
}

.VPTeamMembersItem.medium .name {
  letter-spacing: 0.15px;
  line-height: 28px;
  font-size: 20px;
}

.VPTeamMembersItem.medium .affiliation {
  padding-top: 4px;
  font-size: 16px;
}

.VPTeamMembersItem.medium .desc {
  padding-top: 16px;
  max-width: 288px;
  font-size: 16px;
}

.VPTeamMembersItem.medium .links {
  margin: 0 -16px -12px;
  padding: 16px 12px 0;
}

.profile {
  flex-grow: 1;
  background-color: var(--vp-c-bg-soft);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.data {
  text-align: center;
  /* margin: 0 auto; */
}

.avatar {
  position: relative;
  flex-shrink: 0;
  /* margin: 0 auto; */
  border-radius: 50%;
  box-shadow: var(--vp-shadow-3);
}

.avatar-img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  object-fit: cover;
}

.author_name,
.more {
  margin: 0;
  font-weight: 600;
  cursor: pointer;
}

.more {
  color: var(--vp-c-text-2);
}

.more:hover {
  color: var(--vp-c-brand-lighter);
}

.affiliation {
  margin: 0;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.org.link {
  color: var(--vp-c-text-2);
  transition: color 0.25s;
}

.org.link:hover {
  color: var(--vp-c-brand);
}

.desc {
  margin: 0 auto;
  word-wrap: break-word;
  white-space: pre-line;
  overflow-wrap: break-word;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-width: 150px;
}

.desc :deep(a) {
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration-style: dotted;
  transition: color 0.25s;
}

.links {
  display: flex;
  justify-content: center;
  height: 56px;
}

.links svg {
  margin: 0 0.5rem;
}

.links :hover {
  fill: var(--vp-c-brand-lighter);
}

.sp-link {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-sponsor);
  background-color: var(--vp-c-bg-soft);
  transition: color 0.25s, background-color 0.25s;
}

.sp .sp-link.link:hover,
.sp .sp-link.link:focus {
  outline: none;
  color: var(--vp-c-white);
  background-color: var(--vp-c-sponsor);
}

.sp-icon {
  margin-right: 8px;
  width: 16px;
  height: 16px;
  fill: currentColor;
}
</style>

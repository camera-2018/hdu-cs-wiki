<script setup >

defineProps({
  size: String,
  member: Object
})

const goUrl = (url)=> {
  window.open(url,"_blank")
}

</script>

<template>
  <article class="VPTeamMembersItem" :class="[size ?? 'medium']">
    <div class="profile">
      <figure class="avatar">
        <img class="avatar-img" :src="member.avatar" :alt="member.name">
      </figure>
      <div class="data">
        <h1 class="name">
          {{ member.name }}
        </h1>
        <p v-if="member.title || member.org" class="affiliation">
          <span v-if="member.title" class="title">
            {{ member.title }}
          </span>
          <span v-if="member.title && member.org" class="at">
            @
          </span>
        </p>
        <p v-if="member.description" class="desc" v-html="member.description"/>
        <div v-if="member.url" class="links">
          <svg v-if="member.rss" @click="goUrl(member.rss)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0a8 8 0 0 0-8-8a1 1 0 0 1 0-2zm0 4a6 6 0 0 1 6 6a1 1 0 1 1-2 0a4 4 0 0 0-4-4a1 1 0 0 1 0-2zm.5 7a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3z"/></svg>
          <svg v-if="member.url" @click="goUrl(member.url)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1000 1000"><path fill="currentColor" d="M196.099.156C88.379.156.219 88.317.219 196.036v607.851c0 107.72 88.16 195.849 195.88 195.849H803.95c107.72 0 195.849-88.129 195.849-195.849V196.036C999.799 88.316 911.67.156 803.95.156H196.099zm338.012 186.777c94.026 7.596 148.647 68.316 155.146 145.948c5.05 39.953 3.637 69.6-2.127 91.418c53.633 1.773 116.39 25.822 120.388 113.098v85.911c-5.561 75.026-32.259 167.679-169.225 187.339c-30.84 4.427-65.452 1.464-110.345 1.157c-45.139-1.19-84.496-.975-118.917-.344c-138.941 2.545-215.468-58.535-216.185-189.28c-1.116-44.494.65-92.734.501-152.581c-.558-37.925-.768-77.544.094-114.381c.267-7.189-.671-15.069 1.22-22.807c5.98-84.295 73.682-133.698 152.706-144.665l186.745-.814zM377.963 304.192c-80.036 13.104-83.991 104.44 0 115.726h151.924c80.036-13.104 83.991-104.44 0-115.726H377.963zm-34.508 252.82c-82.395 12.791-83.607 116.536 2.941 127.271l279.1 1.001c81.695-12.682 81.454-116.322-2.941-127.302l-279.1-.97z"/></svg>
        </div>
      </div>
    </div>
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
  padding-top: 20px;
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

.name {
  margin:  0;
  font-weight: 600;
}

.affiliation {
  margin:  0;
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
  margin: 0 .5rem;
}

.links svg path:hover {
  fill:aquamarine;
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
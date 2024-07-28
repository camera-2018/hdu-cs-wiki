<script setup>
import { VPTeamMembers } from 'vitepress/theme-without-fonts'
import { members } from './members.ts'

</script>

# 贡献者名单

以下为对本项目做出贡献的人员名单，排名不分先后。

<VPTeamMembers size="small" :members="members" />

<style>
.affiliation > .title, .profile > .data > .name, #team {
  font-weight: bold !important;
  color: transparent;
  background: -webkit-linear-gradient(
    256deg,
    var(--vp-c-brand),
    var(--vp-c-brand-light),
    var(--vp-c-brand-next)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
  animation: rainbow 3s cubic-bezier(0.1, 0.7, 1.0, 0.1) infinite !important;
}
.avatar-img {
  z-index: 1;
}
</style>

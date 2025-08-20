<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme-without-fonts'
import { members } from './members.ts'
import SplashCursor from "./.vitepress/components/SplashCursor.vue";
</script>

# 贡献者名单

以下为对本项目做出贡献的人员名单，排名不分先后。

<SplashCursor
  :SIM_RESOLUTION="128"
  :DYE_RESOLUTION="1440"
  :CAPTURE_RESOLUTION="512"
  :DENSITY_DISSIPATION="3.5"
  :VELOCITY_DISSIPATION="2"
  :PRESSURE="0.1"
  :PRESSURE_ITERATIONS="20"
  :CURL="3"
  :SPLAT_RADIUS="0.2"
  :SPLAT_FORCE="6000"
  :SHADING="true"
  :COLOR_UPDATE_SPEED="10"
  :BACK_COLOR="{ r: 0.5, g: 0, b: 0 }"
  :TRANSPARENT="true"
/>

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

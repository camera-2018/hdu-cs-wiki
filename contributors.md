<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import { members } from './members.js'

</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />


<style>
.affiliation > .title, .profile > .data > .name{
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

</style>
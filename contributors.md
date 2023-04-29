<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import { members } from './members.ts'

</script>

# 贡献者名单

以下为对本项目做出贡献的人员名单，排名不分先后。

<VPTeamMembers size="small" :members="members" />

## 特别鸣谢

由于做出贡献的同学不便统计，这里感谢为本wiki做出贡献的hdu同学所处的组织，排名不分先后。

<div id="team">杭州电子科技大学计算机科协</div>
<br/>
<div id="team">杭州电子科技大学Student Research Training （SRT）</div>
<br/>
<div id="team">杭州电子科技大学 PaddlePaddle 领航团</div>
<br/>
<div id="team">杭州电子科技大学杭电助手</div>
<br/>
<div id="team">杭州电子科技大学信息安全协会 （Vidar Team）</div>
<br/>
<div id="team">Microchip 杭州电子科技大学 大学生科技创新孵化器实验室</div>
<br/>

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

</style>

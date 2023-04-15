<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/camera-2018.png',
    name: 'camera-2018',
    title: 'Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/camera-2018' },
    ]
  },
  {
    avatar: 'https://www.github.com/HanWu311.png',
    name: 'ZZM',
    title: 'Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/HanWu311' },
    ]
  },
]
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />

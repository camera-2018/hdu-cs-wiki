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
]
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />
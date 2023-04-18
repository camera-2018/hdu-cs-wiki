<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import { members } from './members.js'

</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />

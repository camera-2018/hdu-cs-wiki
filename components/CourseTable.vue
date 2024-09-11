<template>
  <table>
    <thead>
      <tr>
        <th>周次</th>
        <th>日期</th>
        <th>讲座</th>
        <th>实验</th>
        <th>项目</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(course, cIndex) in courses" :key="cIndex">
        <td :rowspan="totalRowSpan(course.entries)">{{ course.week }}</td>
        <template v-for="(entry, eIndex) in course.entries">
          <td v-if="eIndex === 0">{{ entry.date }}</td>
          <td v-if="eIndex === 0">{{ entry.lecture.title }}<br>
            <a v-if="entry.lecture.links.slide" :href="entry.lecture.links.slide">Slide</a>
            <span v-if="entry.lecture.links.slide && (entry.lecture.links.recording || entry.lecture.links.note)"> /
            </span>
            <a v-if="entry.lecture.links.recording" :href="entry.lecture.links.recording">Recording</a>
            <span v-if="entry.lecture.links.recording && entry.lecture.links.note"> / </span>
            <a v-if="entry.lecture.links.note" :href="entry.lecture.links.note">Note</a>
          </td>
          <td v-if="eIndex === 0">{{ entry.lab }}</td>
          <td v-if="eIndex === 0">{{ entry.project }}</td>
      <tr v-if="eIndex < course.entries.length - 1"></tr>
</template>
</tr>
</tbody>
</table>
</template>

<script>
export default {
  props: {
    courses: Array
  },
  methods: {
    totalRowSpan(entries) {
      return entries.reduce((total, entry) => total + (entry.rowspan ? 1 : 0));
    }
  }
}
</script>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* 添加阴影 */
  margin: 20px 0; /* 增加上下边距 */
}

th, td {
  border: 1px solid #ddd; /* 边框颜色更淡 */
  padding: 12px 15px; /* 增加填充 */
  min-width: 100px; /* 最小宽度设置 */
}

th {
  background-color: #007BFF; /* 深蓝色背景 */
  color: white; /* 白色文字 */
  font-size: 16px; /* 字体大小 */
  text-align: center;
}

th:nth-child(1) { width: 5%; }
th:nth-child(2) { width: 10%; }
th:nth-child(3) { width: 45%; }
th:nth-child(4) { width: 20%; }
th:nth-child(5) { width: 20%; }

tr:nth-child(even) {
  background-color: #f2f2f2; /* 条纹效果 */
}

tr:hover {
  background-color: #ddd; /* 鼠标悬停颜色改变 */
}

td a {
  color: #007BFF; /* 链接颜色 */
  text-decoration: none; /* 去除下划线 */
}

td a:hover {
  text-decoration: underline; /* 鼠标悬停时添加下划线 */
}
</style>

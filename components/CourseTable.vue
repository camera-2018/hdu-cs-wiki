<script setup lang="ts">
import { ref } from 'vue';

interface LectureLinks {
  slide?: string;
  recording?: string;
  note?: string;
  code?: string;
}

interface Lecture {
  title: string;
  links: LectureLinks;
}

interface Lab {
  title: string;
  link?: string;
}

interface Project {
  title: string;
  link?: string;
}

interface Entry {
  date: string;
  lecture: Lecture;
  lab: Lab;
  project: Project;
}

interface Course {
  week: string;
  entries: Entry[];
}

const courses = ref < Course[] > ([
  {
    week: "0",
    entries: [
      {
        date: "09/21",
        lecture: {
          title: "0. 编程环境搭建",
          links: {
            slide: "https://datawhalechina.github.io/cstart/Lectures/Lecture0/Lecture0/index.html",
            recording: "https://www.bilibili.com/video/BV1rgxae2Eio",
            note: "/2.编程模块/2.1 CStart/2.1.1 Book/2.开发环境配置",
            code: "",
          },
        },
        lab: {
          title: "No lab",
          link: "",
        },
        project: {
          title: "No Project",
          link: "",
        }
      },
    ],
  },
  {
    week: "1",
    entries: [
      {
        date: "09/28",
        lecture: {
          title: "1. Unix 与 C",
          links: {
            slide: "https://datawhalechina.github.io/cstart/Lectures/Lecture1/Lecture1/index.html",
            recording: "https://www.bilibili.com/video/BV1rgxae2Eio",
            note: "/2.编程模块/2.1 CStart/2.1.1 Book/3.Unix与C",
            code: "https://datawhalechina.github.io/cstart/_site/resources/Lecture1/Codes"
          },
        },
        lab: {
          title: "Lab1: Unix 与 C",
          link: "/2.编程模块/2.1 CStart/2.1.2 Lab/1.Lab1",
        },
        project: {
          title: "No Project",
          link: "",
        }
      },
    ],
  },
  {
    week: "2",
    entries: [
      {
        date: "10/05",
        lecture: {
          title: "假期休息",
          links: {
            slide: "",
            recording: "",
            note: "",
            code: "",
          },
        },
        lab: {
          title: "No lab",
          link: "",
        },
        project: {
          title: "No Project",
          link: "",
        }
      },
    ],
  },
  {
    week: "3",
    entries: [
      {
        date: "10/12",
        lecture: {
          title: "2. C 语言基础语法",
          links: {
            slide: "https://datawhalechina.github.io/cstart/Lectures/Lecture2/Lecture2/index.html",
            recording: "https://www.bilibili.com/video/BV1ri2dYUEG8",
            note: "/2.编程模块/2.1 CStart/2.1.1 Book/4.C语言基础语法",
            code: "https://datawhalechina.github.io/cstart/_site/resources/Lecture2/Codes"
          },
        },
        lab: {
          title: "Lab2: C 语言基础语法",
          link: "/2.编程模块/2.1 CStart/2.1.2 Lab/2.Lab2",
        },
        project: {
          title: "No Project",
          link: "",
        }
      },
    ],
  },
  {
    week: "4",
    entries: [
      {
        date: "10/19",
        lecture: {
          title: "3. 计算机的硬件视角",
          links: {
            slide: "https://datawhalechina.github.io/cstart/Lectures/Lecture3/Lecture3/index.html",
            recording: "https://www.bilibili.com/video/BV1DJypYeEfN",
            note: "/2.编程模块/2.1 CStart/2.1.1 Book/5.计算机的硬件视角",
            code: "https://datawhalechina.github.io/cstart/_site/resources/Lecture3/Codes"
          },
        },
        lab: {
          title: "Lab3: 体验嵌入式",
          link: "/2.编程模块/2.1 CStart/2.1.2 Lab/3.Lab3",
        },
        project: {
          title: "No Project",
          link: "",
        }
      },
    ],
  },
  {
    week: "5",
    entries: [
      {
        date: "10/26",
        lecture: {
          title: "4. 算法导论",
          links: {
            slide: "https://datawhalechina.github.io/cstart/Lectures/Lecture4/Lecture4/index.html",
            recording: "https://www.bilibili.com/video/BV1X9SJYGEme",
            note: "/2.编程模块/2.1 CStart/2.1.1 Book/6.算法导论",
            code: "https://datawhalechina.github.io/cstart/_site/resources/Lecture4/Codes"
          },
        },
        lab: {
          title: "Lab4: 算法入门",
          link: "/2.编程模块/2.1 CStart/2.1.2 Lab/4.Lab4",
        },
        project: {
          title: "No Project",
          link: "",
        }
      },
    ],
  },
  {
    week: "6",
    entries: [
      {
        date: "11/02",
        lecture: {
          title: "5. 指针与动态分配",
          links: {
            slide: "https://datawhalechina.github.io/cstart/Lectures/Lecture5/Lecture5/index.html",
            recording: "https://www.bilibili.com/video/BV1hMDHYyEm2",
            note: "/2.编程模块/2.1 CStart/2.1.1 Book/7.指针与动态分配",
            code: "https://datawhalechina.github.io/cstart/_site/resources/Lecture5/Codes"
          },
        },
        lab: {
          title: "Lab5: 祖玛",
          link: "/2.编程模块/2.1 CStart/2.1.2 Lab/5.Lab5",
        },
        project: {
          title: "Proj1: MyMalloc",
          link: "/2.编程模块/2.1 CStart/2.1.3 Project/1.Proj1",
        }
      },
    ],
  },
  {
    week: "7",
    entries: [
      {
        date: "11/09",
        lecture: {
          title: "6. C 语言项目实现",
          links: {
            slide: "https://datawhalechina.github.io/cstart/Lectures/Lecture6/Lecture6/index.html",
            recording: "https://www.bilibili.com/video/BV1PtmtYLEoo",
            note: "/2.编程模块/2.1 CStart/2.1.1 Book/8.C语言项目实现",
            code: "https://datawhalechina.github.io/cstart/_site/resources/Lecture6/Codes"
          },
        },
        lab: {
          title: "Lab6: 使用工具",
          link: "/2.编程模块/2.1 CStart/2.1.2 Lab/6.Lab6",
        },
        project: {
          title: "Proj2: Snake",
          link: "/2.编程模块/2.1 CStart/2.1.3 Project/2.Proj2",
        }
      },
    ],
  },
  {
    week: "8",
    entries: [
      {
        date: "11/16",
        lecture: {
          title: "7. C 语言与 Unix 系统编程",
          links: {
            slide: "",
            recording: "",
            note: "",
          },
        },
        lab: {
          title: "No lab",
          link: "",
        },
        project: {
          title: "No Project",
          link: "",
        }
      },
    ],
  },
  {
    week: "9",
    entries: [
      {
        date: "11/23",
        lecture: {
          title: "8. 人工智能导论",
          links: {
            slide: "",
            recording: "",
            note: "",
          },
        },
        lab: {
          title: "No lab",
          link: "",
        },
        project: {
          title: "No Project",
          link: "",
        }
      },
    ],
  },
  {
    week: "10",
    entries: [
      {
        date: "11/30",
        lecture: {
          title: "9. 嵌入式编程导论",
          links: {
            slide: "",
            recording: "",
            note: "",
          },
        },
        lab: {
          title: "No lab",
          link: "",
        },
        project: {
          title: "No Project",
          link: "",
        }
      },
    ],
  },
  {
    week: "11",
    entries: [
      {
        date: "12/07",
        lecture: {
          title: "10. 函数式编程与解释器",
          links: {
            slide: "",
            recording: "",
            note: "",
          },
        },
        lab: {
          title: "No lab",
          link: "",
        },
        project: {
          title: "No Project",
          link: "",
        }
      },
    ],
  },
  {
    week: "12",
    entries: [
      {
        date: "12/14",
        lecture: {
          title: "11. 总结",
          links: {
            slide: "",
            recording: "",
            note: "",
          },
        },
        lab: {
          title: "No lab",
          link: "",
        },
        project: {
          title: "No Project",
          link: "",
        }
      },
    ],
  }]);

const totalRowSpan = (entries: Entry[]): number => {
  return entries.length;
};

const goUrl = (url: string) => {
  window.open(url, "_blank");
};
</script>

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
        <template v-for="(entry, eIndex) in course.entries" :key="eIndex">
          <td v-if="eIndex === 0">{{ entry.date }}</td>
          <td v-if="eIndex === 0">
            {{ entry.lecture.title }}<br />
            <a v-if="entry.lecture.links.slide" :href="entry.lecture.links.slide" target="_blank">Slide</a>
            <span
              v-if="entry.lecture.links.slide && (entry.lecture.links.recording || entry.lecture.links.note || entry.lecture.links.code)">
              /
            </span>
            <a v-if="entry.lecture.links.recording" :href="entry.lecture.links.recording">Recording</a>
            <span v-if="entry.lecture.links.recording && (entry.lecture.links.note || entry.lecture.links.code)">
              /
            </span>
            <a v-if="entry.lecture.links.note" :href="entry.lecture.links.note">Note</a>
            <span v-if="entry.lecture.links.note && entry.lecture.links.code">
              /
            </span>
            <a v-if="entry.lecture.links.code" :href="entry.lecture.links.code">Code</a>
          </td>
          <td v-if="eIndex === 0">
            <a v-if="entry.lab.link" :href="entry.lab.link">{{ entry.lab.title }}</a>
            <span v-else>{{ entry.lab.title }}</span>
          </td>
          <td v-if="eIndex === 0">
            <a v-if="entry.project.link" :href="entry.project.link">{{ entry.project.title }}</a>
            <span v-else>{{ entry.project.title }}</span>
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
}

th,
td {
  border: 1px solid #ddd;
  padding: 12px 15px;
  min-width: 75px;
}

th {
  font-size: 16px;
  text-align: center;
}

th:nth-child(1) {
  width: 5%;
}

th:nth-child(2) {
  width: 10%;
}

th:nth-child(3) {
  width: 45%;
}

th:nth-child(4) {
  width: 20%;
}

th:nth-child(5) {
  width: 20%;
}

td a {
  color: #007bff;
  text-decoration: none;
}

td a:hover {
  text-decoration: underline;
}
</style>

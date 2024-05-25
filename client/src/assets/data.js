export const user = {
  _id: "662f32ffd1303cc",
  name: "Codewave",
  title: "Administrator",
  role: "Admin",
  email: "admin@mts.com",
  isAdmin: true,
  tasks: [],
  createdAt: "2024-02-06T09:58:44.794Z",
  updatedAt: "2024-02-07T06:13:26.757Z",
  __v: 0,
  isActive: true,
};
export const activitiesData = [
  {
    _id: "0",
    type: "started",
    activity: "started this task.",
    date: new Date("2023-01-15").toISOString(),
    by: "Amatola",
  },
];

export const summary = {
  totalTasks: 1,
  last10Task: [
      {
          _id: "65c5f12ab5204a81bde866a9",
          title: "Test task",
          date: "2024-02-09T00:00:00.000Z",
          priority: "high",
          stage: "todo",
          team: [
              {
                  _id: "65c202d4aa62f32ffd1303cc",
                  name: "Codewave Asante",
                  title: "Administrator",
                  role: "Admin",
                  email: "admin@gmail.com",
              }
          ],
          isTrashed: false,
          activities: [],
          subTasks: [
              {
                  title: "Task manager youtube tutorial",
                  date: "2024-02-09T00:00:00.000Z",
                  tag: "tutorial",
                  _id: "65c5f153b5204a81bde866c8",
              },
          ],
          createdAt: "2024-02-09T09:32:26.574Z",
          updatedAt: "2024-02-09T09:36:53.339Z",
          __v: 1,
      }
  ],
};
export const tasks = [
  {
    _id: "65c5d547660756f6fd453a7a",
    title: "Duplicate - Duplicate - Review Code Changes",
    date: "2024-02-09T00:00:00.000Z",
    priority: "medium",
    stage: "in progress",
    assets: [],
    team: [
      {
        _id: "65c317360fd860f958baa08e",
        name: "Alex Johnson",
        title: "UX Designer",
        email: "alex.johnson@example.com",
      },
      {
        _id: "65c3176a0fd860f958baa099",
        name: "Emily Wilson",
        title: "Data Analyst",
        email: "emily.wilson@example.com",
      },
    ],
    isTrashed: false,
    activities: [
      {
        type: "started",
        activity: "Project started",
        date: "2024-02-09T09:16:56.623Z",
        by: "65c202d4aa62f32ffd1303cc",
        _id: "65c5f18bb5204a81bde866d1",
      },
      {
        type: "commented",
        activity: "i like coding!!",
        date: "2024-02-09T09:16:56.623Z",
        by: "65c202d4aa62f32ffd1303cc",
        _id: "65c5f19eb5204a81bde866dd",
      },
      {
        type: "bug",
        activity: "bug found",
        date: "2024-02-09T09:16:56.623Z",
        by: "65c202d4aa62f32ffd1303cc",
        _id: "65c5f1abb5204a81bde866eb",
      },
    ],
    subTasks: [
      {
        title: "Blog App Admin Dashboard",
        date: "2024-02-08T00:00:00.000Z",
        tag: "Website App",
        _id: "65c3535476ed5c48f9440973",
      },
    ],
    description: "Conduct thorough user testing to identify usability issues.",
    category: "Quality Assurance",
    email: "qa@example.com",
    phone: "555-555-5555",
    createdAt: "2024-02-09T07:33:27.590Z",
    updatedAt: "2024-02-09T09:36:10.386Z",
    __v: 4,
  }
];

export const chartData = [
  {
    name: "High",
    total: 2400,
  },
  {
    name: "Medium",
    total: 2210,
  },
  {
    name: "Normal",
    total: 3210,
  },
  {
    name: "Low",
    total: 2290,
  },
];
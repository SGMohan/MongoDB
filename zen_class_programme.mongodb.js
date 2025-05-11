// Creation of the database
use("zen_class_programme");

// Create collections of users
db.createCollection("users");

// Insert sample data into the collections
db.users.insertMany([
  {
    user_name: "John Doe",
    user_email: "john.doe@example.com",
    role: "student",
    batch: "Batch A",
    placement_status: "appeared",
  },
  {
    user_name: "Jane Smith",
    user_email: "jane.smith@example.com",
    role: "student",
    batch: "Batch B",
    placement_status: "not appeared",
  },
  {
    user_name: "Mike Johnson",
    user_email: "mike.johnson@example.com",
    role: "mentor",
    batch: "N/A",
    placement_status: "N/A",
  },
  {
    user_name: "Sarah Williams",
    user_email: "sarah.w@example.com",
    role: "student",
    batch: "Batch A",
    placement_status: "appeared",
  },
  {
    user_name: "David Brown",
    user_email: "david.b@example.com",
    role: "admin",
    batch: "N/A",
    placement_status: "N/A",
  },
  {
    user_name: "Emily Davis",
    user_email: "emily.d@example.com",
    role: "student",
    batch: "Batch B",
    placement_status: "not appeared",
  },
  {
    user_name: "Robert Wilson",
    user_email: "robert.w@example.com",
    role: "student",
    batch: "Batch A",
    placement_status: "appeared",
  },
  {
    user_name: "Lisa Taylor",
    user_email: "lisa.t@example.com",
    role: "mentor",
    batch: "N/A",
    placement_status: "N/A",
  },
  {
    user_name: "Thomas Moore",
    user_email: "thomas.m@example.com",
    role: "student",
    batch: "Batch B",
    placement_status: "not appeared",
  },
  {
    user_name: "Jennifer Lee",
    user_email: "jennifer.l@example.com",
    role: "student",
    batch: "Batch A",
    placement_status: "appeared",
  },
  {
    user_name: "Alex Chen",
    user_email: "alex.c@example.com",
    role: "student",
    batch: "Batch B",
    placement_status: "appeared",
  },
  {
    user_name: "Priya Patel",
    user_email: "priya.p@example.com",
    role: "student",
    batch: "Batch A",
    placement_status: "not appeared",
  },
  {
    user_name: "James Wilson",
    user_email: "james.w@example.com",
    role: "mentor",
    batch: "N/A",
    placement_status: "N/A",
  },
  {
    user_name: "Sophia Garcia",
    user_email: "sophia.g@example.com",
    role: "student",
    batch: "Batch B",
    placement_status: "appeared",
  },
  {
    user_name: "Daniel Kim",
    user_email: "daniel.k@example.com",
    role: "student",
    batch: "Batch A",
    placement_status: "not appeared",
  },
]);

// Create collections of topics
db.createCollection("topics");

// Insert sample data into the collections
db.topics.insertMany([
  {
    name: "HTML Fundamentals",
    date: ISODate("2020-10-05"),
    batch: "Batch A",
    mentor_ids: [
      ObjectId("681e04c657409d7eaddb0eab"),
      ObjectId("681e04c657409d7eaddb0eb0"),
    ],
    mentor_names: ["Mike Johnson", "Lisa Taylor"],
    resources: ["HTML5 Spec", "MDN Docs"],
    duration: "3 hours",
  },
  {
    name: "CSS Flexbox",
    date: ISODate("2020-10-07"),
    batch: "Batch B",
    mentor_ids: [
      ObjectId("681e04c657409d7eaddb0eb0"),
      ObjectId("681e04c657409d7eaddb0eb5"),
    ],
    mentor_names: ["Lisa Taylor", "James Wilson"],
    resources: ["Flexbox Froggy", "CSS Tricks"],
    duration: "2.5 hours",
  },
  {
    name: "JavaScript Basics",
    date: ISODate("2020-10-09"),
    batch: "Batch A",
    mentor_ids: [
      ObjectId("681e04c657409d7eaddb0eab"),
      ObjectId("681e04c657409d7eaddb0eb5"),
    ],
    mentor_names: ["Mike Johnson", "James Wilson"],
    resources: ["Eloquent JS", "JS.info"],
    duration: "4 hours",
  },
  {
    name: "DOM Manipulation",
    date: ISODate("2020-10-12"),
    batch: "Batch B",
    mentor_ids: [
      ObjectId("681e04c657409d7eaddb0eb0"),
      ObjectId("681e04c657409d7eaddb0eab"),
    ],
    mentor_names: ["Lisa Taylor", "Mike Johnson"],
    resources: ["DOM Enlightenment"],
    duration: "3 hours",
  },
  {
    name: "React Introduction",
    date: ISODate("2020-10-14"),
    batch: "Batch A",
    mentor_ids: [
      ObjectId("681e04c657409d7eaddb0eb5"),
      ObjectId("681e04c657409d7eaddb0eab"),
    ],
    mentor_names: ["James Wilson", "Mike Johnson"],
    resources: ["React Docs"],
    duration: "5 hours",
  },
  {
    name: "Node.js Basics",
    date: ISODate("2020-10-16"),
    batch: "Batch B",
    mentor_ids: [
      ObjectId("681e04c657409d7eaddb0eb0"),
      ObjectId("681e04c657409d7eaddb0eab"),
    ],
    mentor_names: ["Lisa Taylor", "Mike Johnson"],
    resources: ["Node.js Docs"],
    duration: "4 hours",
  },
  {
    name: "MongoDB Fundamentals",
    date: ISODate("2020-10-19"),
    batch: "Batch A",
    mentor_ids: [ObjectId("681e04c657409d7eaddb0eb5")],
    mentor_names: ["James Wilson"],
    resources: ["MongoDB University"],
    duration: "3.5 hours",
  },
  {
    name: "REST APIs",
    date: ISODate("2020-10-21"),
    batch: "Batch B",
    mentor_ids: [
      ObjectId("681e04c657409d7eaddb0eb0"),
      ObjectId("681e04c657409d7eaddb0eb5"),
    ],
    mentor_names: ["Lisa Taylor", "James Wilson"],
    resources: ["RESTful Web APIs"],
    duration: "4 hours",
  },
  {
    name: "Authentication",
    date: ISODate("2020-10-23"),
    batch: "Batch A",
    mentor_ids: [ObjectId("681e04c657409d7eaddb0eb5")],
    mentor_names: ["James Wilson"],
    resources: ["JWT Handbook"],
    duration: "3 hours",
  },
  {
    name: "Deployment Strategies",
    date: ISODate("2020-10-26"),
    batch: "Batch B",
    mentor_ids: [ObjectId("681e04c657409d7eaddb0eb0")],
    mentor_names: ["Lisa Taylor"],
    resources: ["AWS Docs", "Heroku Docs"],
    duration: "3 hours",
  },
]);

// Create collections of tasks
db.createCollection("tasks");

// Insert sample data into the collections
db.tasks.insertMany([
  {
    task_name: [
      "HTML Portfolio Page",
      "CSS Landing Page",
      "JavaScript Calculator",
    ],
    topic_id: [
      ObjectId("681e26f657409d7eaddb0ed5"),
      ObjectId("681e26f657409d7eaddb0ed6"),
      ObjectId("681e26f657409d7eaddb0ed7"),
    ],
    assigned_date: ISODate("2020-10-05"),
    due_date: ISODate("2020-10-08"),
    batch: ["Batch A", "Batch B"],
    submissions: [
      {
        user_id: [
          ObjectId("681e04c657409d7eaddb0ea9"),
          ObjectId("681e04c657409d7eaddb0eaa"),
          ObjectId("681e04c657409d7eaddb0eac"),
          ObjectId("681e04c657409d7eaddb0eae"),
          ObjectId("681e04c657409d7eaddb0eaf"),
          ObjectId("681e04c657409d7eaddb0eb1"),
        ],
        user_name: [
          "John Doe",
          "Jane Smith",
          "Sarah Williams",
          "Emily Davis",
          "Robert Wilson",
          "Thomas Moore",
        ],
        submission_date: ISODate("2020-10-07"),
        status: "submitted",
      },
    ],
  },
  {
    task_name: ["DOM Manipulation", "React Components", "Node.js API"],
    topic_id: [
      ObjectId("681e26f657409d7eaddb0ed8"),
      ObjectId("681e26f657409d7eaddb0ed9"),
      ObjectId("681e26f657409d7eaddb0eda"),
    ],
    assigned_date: ISODate("2020-10-12"),
    due_date: ISODate("2020-10-15"),
    batch: "Batch B",
    submissions: [
      {
        user_id: [
          ObjectId("681e04c657409d7eaddb0eb2"),
          ObjectId("681e04c657409d7eaddb0eb3"),
        ],
        user_name: ["Jennifer Lee", "Alex Chan"],
        submission_date: ISODate("2020-10-14"),
        status: "submitted",
      },
    ],
  },
  {
    task_name: ["MongoDB Queries", "Authentication System", "Deployment"],
    topic_id: [
      ObjectId("681e26f657409d7eaddb0edb"),
      ObjectId("681e26f657409d7eaddb0edc"),
      ObjectId("681e26f657409d7eaddb0edd"),
      ObjectId("681e26f657409d7eaddb0ede"),
    ],
    assigned_date: ISODate("2020-10-19"),
    due_date: ISODate("2020-10-22"),
    batch: ["Batch A", "Batch B"],
    submissions: [
      {
        user_id: [
          ObjectId("681e04c657409d7eaddb0eb4"),
          ObjectId("681e04c657409d7eaddb0eb6"),
          ObjectId("681e04c657409d7eaddb0eb7"),
        ],
        user_name: ["Priya Patel", "Sophia Garcia", "Daniel Kim"],
        status: "not submitted",
      },
    ],
  },
  {
    task_name: ["Advanced CSS", "ES6 Features", "Redux Basics"],
    topic_id: [
      ObjectId("681e26f657409d7eaddb0ede"),
      ObjectId("681e26f657409d7eaddb0edf"),
      ObjectId("681e26f657409d7eaddb0ee0"),
    ],
    assigned_date: ISODate("2020-10-26"),
    due_date: ISODate("2020-10-29"),
    batch: "Batch A",
    submissions: [
      {
        user_id: [
          ObjectId("681e04c657409d7eaddb0ea9"),
          ObjectId("681e04c657409d7eaddb0eac"),
          ObjectId("681e04c657409d7eaddb0eaf"),
        ],
        user_name: ["John Doe", "Sarah Williams", "Robert Wilson"],
        submission_date: ISODate("2020-10-28"),
        status: "submitted",
      },
    ],
  },
  {
    task_name: ["Advanced MongoDB", "Restful API", "Deployment Steps"],
    topic_id: [
      ObjectId("681e26f657409d7eaddb0edb"),
      ObjectId("681e26f657409d7eaddb0edc"),
      ObjectId("681e26f657409d7eaddb0ede"),
    ],
    assigned_date: ISODate("2020-10-12"),
    due_date: ISODate("2020-10-16"),
    batch: "Batch B",
    submissions: [
      {
        user_id: [
          ObjectId("681e04c657409d7eaddb0eaa"),
          ObjectId("681e04c657409d7eaddb0eae"),
          ObjectId("681e04c657409d7eaddb0eb1"),
        ],
        user_name: ["Jane Smith", "Emily Davis", "Thomas Moore"],
        status: "not submitted",
      },
    ],
  },
  {
    task_name: ["Advanced MongoDb", "Restful API", "Deployment Steps"],
    topic_id: [
      ObjectId("681e26f657409d7eaddb0edb"),
      ObjectId("681e26f657409d7eaddb0edc"),
      ObjectId("681e26f657409d7eaddb0ede"),
    ],
    assigned_date: ISODate("2020-10-13"),
    due_date: ISODate("2020-10-17"),
    batch: ["Batch A", "Batch B"],
    submissions: [
      {
        user_id: [
          ObjectId("681e04c657409d7eaddb0eb2"),
          ObjectId("681e04c657409d7eaddb0eb3"),
          ObjectId("681e04c657409d7eaddb0eb4"),
          ObjectId("681e04c657409d7eaddb0eb6"),
        ],
        user_name: [
          "Jennifer Lee",
          "Alex Chan",
          "Priya Patel",
          "Sophia Garcia",
        ],
        status: "not submitted",
      },
    ],
  },

  {
    task_name: ["AWS Deployment", "Node packages"],
    topic_id: [
      ObjectId("681e26f657409d7eaddb0ede"),
      ObjectId("681e26f657409d7eaddb0eda"),
    ],
    assigned_date: ISODate("2020-10-20"),
    due_date: ISODate("2020-10-23"),
    batch: "Batch A",
    submissions: [
      {
        user_id: [
          ObjectId("681e04c657409d7eaddb0ea9"),
          ObjectId("681e04c657409d7eaddb0eac"),
          ObjectId("681e04c657409d7eaddb0eaf"),
          ObjectId("681e04c657409d7eaddb0eb7"),
        ],
        user_name: [
          "John Doe",
          "Sarah Williams",
          "Robert Wilson",
          "Daniel Kim",
        ],
        status: "not submitted",
      },
    ],
  },
  {
    task_name: ["Advanced CSS", "ES6 Features", "Redux Basics"],
    topic_id: [
      ObjectId("681e26f657409d7eaddb0ed6"),
      ObjectId("681e26f657409d7eaddb0ed7"),
      ObjectId("681e26f657409d7eaddb0eed9"),
    ],
    assigned_date: ISODate("2020-10-26"),
    due_date: ISODate("2020-10-29"),
    batch: "Batch A",
    submissions: [
      {
        user_id: [
          ObjectId("681e04c657409d7eaddb0ea9"),
          ObjectId("681e04c657409d7eaddb0eac"),
          ObjectId("681e04c657409d7eaddb0eaf"),
        ],
        user_name: ["John Doe", "Sarah Williams", "Robert Wilson"],
        submission_date: ISODate("2020-10-28"),
        status: "submitted",
      },
    ],
  },
  {
    task_name: ["AWS Deployment", "Node Packages Step-ups"],
    topic_id: [
      ObjectId("681e26f657409d7eaddb0ede"),
      ObjectId("681e26f657409d7eaddb0eda"),
    ],
    assigned_date: ISODate("2020-10-20"),
    due_date: ISODate("2020-10-23"),
    batch: "Batch A",
    submissions: [
      {
        user_id: [
          ObjectId("681e04c657409d7eaddb0ea9"),
          ObjectId("681e04c657409d7eaddb0eac"),
          ObjectId("681e04c657409d7eaddb0eaf"),
          ObjectId("681e04c657409d7eaddb0eb7"),
        ],
        user_name: [
          "John Doe",
          "Sarah Williams",
          "Robert Wilson",
          "Daniel Kim",
        ],
        status: "not submitted",
      },
    ],
  },
]);

// Create collections of attendance
db.createCollection("attendance");

// Insert sample data into the collections
db.attendance.insertMany([
  {
    user_id: ObjectId("681e04c657409d7eaddb0ea9"),
    date: ISODate("2020-10-15"),
    status: "absent",
  }, // John Doe
  {
    user_id: ObjectId("681e04c657409d7eaddb0eaa"),
    date: ISODate("2020-10-16"),
    status: "present",
  }, // Jane Smith
  {
    user_id: ObjectId("681e04c657409d7eaddb0eac"),
    date: ISODate("2020-10-18"),
    status: "absent",
  }, // Sarah Williams
  {
    user_id: ObjectId("681e04c657409d7eaddb0eae"),
    date: ISODate("2020-10-20"),
    status: "absent",
  }, // Emily Davis
  {
    user_id: ObjectId("681e04c657409d7eaddb0eaf"),
    date: ISODate("2020-10-22"),
    status: "present",
  }, // Robert Wilson
  {
    user_id: ObjectId("681e04c657409d7eaddb0eb1"),
    date: ISODate("2020-10-25"),
    status: "absent",
  }, // Thomas Moore
  {
    user_id: ObjectId("681e04c657409d7eaddb0eb2"),
    date: ISODate("2020-10-28"),
    status: "absent",
  }, // Jennifer Lee
  {
    user_id: ObjectId("681e04c657409d7eaddb0eb3"),
    date: ISODate("2020-10-29"),
    status: "present",
  }, // Alex Chan
  {
    user_id: ObjectId("681e04c657409d7eaddb0eb4"),
    date: ISODate("2020-10-30"),
    status: "absent",
  }, // Priya Patel
  {
    user_id: ObjectId("681e04c657409d7eaddb0eb6"),
    date: ISODate("2020-10-31"),
    status: "absent",
  }, // Sophia Garcia
  {
    user_id: ObjectId("681e04c657409d7eaddb0eb7"),
    date: ISODate("2020-10-17"),
    status: "absent",
  }, // Daniel Kim
]);

// Create collections of company_drives
db.createCollection("company_drives");

// Insert sample data into the collections

db.company_drives.insertMany([
  {
    company_name: "Google",
    schedule_date: ISODate("2020-11-02"),
    job_role: "SDE Intern",
    package: 12.0,
    location: "Bangalore",
    student_attended_id: [
      ObjectId("681e04c657409d7eaddb0ea9"),
      ObjectId("681e04c657409d7eaddb0eac"),
    ],
    selection_status: "pending",
  },
  {
    company_name: "Amazon",
    schedule_date: ISODate("2020-11-06"),
    job_role: "Cloud Support",
    package: 9.5,
    location: "Hyderabad",
    student_attended_id: [
      ObjectId("681e04c657409d7eaddb0eb2"),
      ObjectId("681e04c657409d7eaddb0eaf"),
    ],
    selection_status: "pass",
  },
  {
    company_name: "HCL",
    schedule_date: ISODate("2020-11-10"),
    job_role: "Software Tester",
    package: 4.2,
    location: "Chennai",
    student_attended_id: [
      ObjectId("681e04c657409d7eaddb0eaa"),
      ObjectId("681e04c657409d7eaddb0eae"),
    ],
    selection_status: "fail",
  },
  {
    company_name: "IBM",
    schedule_date: ISODate("2020-11-14"),
    job_role: "Data Analyst",
    package: 5.5,
    location: "Pune",
    student_attended_id: [
      ObjectId("681e04c657409d7eaddb0eb1"),
      ObjectId("681e04c657409d7eaddb0eb3"),
    ],
    selection_status: "pending",
  },
  {
    company_name: "Capgemini",
    schedule_date: ISODate("2020-11-20"),
    job_role: "Backend Developer",
    package: 4.0,
    location: "Mumbai",
    student_attended_id: [
      ObjectId("681e04c657409d7eaddb0eb4"),
      ObjectId("681e04c657409d7eaddb0eb6"),
    ],
    selection_status: "pass",
  },
  {
    company_name: "Mindtree",
    schedule_date: ISODate("2020-11-25"),
    job_role: "Support Engineer",
    package: 3.8,
    location: "Bangalore",
    student_attended_id: [
      ObjectId("681e04c657409d7eaddb0eb7"),
      ObjectId("681e04c657409d7eaddb0eac"),
    ],
    selection_status: "fail",
  },
]);

// Create collections of codekata
db.createCollection("codekata");

// Insert sample data into the collections
db.codekata.insertMany([
  {
    student_id: ObjectId("681e04c657409d7eaddb0ea9"),
    user_name: "John Doe",
    batch: "Batch A",
    problems_solved: 120,
    status: "solved",
  },
  {
    student_id: ObjectId("681e04c657409d7eaddb0eac"),
    user_name: "Sarah Williams",
    batch: "Batch A",
    problems_solved: 95,
    status: "solved",
  },
  {
    student_id: ObjectId("681e04c657409d7eaddb0eaf"),
    user_name: "Robert Wilson",
    batch: "Batch A",
    problems_solved: 70,
    status: "solved",
  },
  {
    student_id: ObjectId("681e04c657409d7eaddb0eb2"),
    user_name: "Jennifer Lee",
    batch: "Batch A",
    problems_solved: 0,
    status: "not solved",
  },
  {
    student_id: ObjectId("681e04c657409d7eaddb0eb3"),
    user_name: "Alex Chan",
    batch: "Batch B",
    problems_solved: 0,
    status: "not solved",
  },
  {
    student_id: ObjectId("681e04c657409d7eaddb0eb4"),
    user_name: "Priya Patel",
    batch: "Batch A",
    problems_solved: 0,
    status: "not solved",
  },
  {
    student_id: ObjectId("681e04c657409d7eaddb0eb6"),
    user_name: "Sophia Garcia",
    batch: "Batch B",
    problems_solved: 0,
    status: "not solved",
  },
  {
    student_id: ObjectId("681e04c657409d7eaddb0eb7"),
    user_name: "Daniel Kim",
    batch: "Batch A",
    problems_solved: 0,
    status: "not solved",
  },
  {
    student_id: ObjectId("681e04c657409d7eaddb0eaa"),
    user_name: "Jane Smith",
    batch: "Batch B",
    problems_solved: 0,
    status: "not solved",
  },
  {
    student_id: ObjectId("681e04c657409d7eaddb0eae"),
    user_name: "Emily Davis",
    batch: "Batch B",
    problems_solved: 0,
    status: "not solved",
  },
  {
    student_id: ObjectId("681e04c657409d7eaddb0eb1"),
    user_name: "Thomas Moore",
    batch: "Batch B",
    problems_solved: 0,
    status: "not solved",
  },
]);

// Create collections of mentors
db.createCollection("mentors");

// Insert sample data into the collections
db.mentors.insertMany([
  {
    mentor_name: "Mike Johnson",
    mentor_email: "mike.johnson@example.com",
    specialization: "Web Development",
    years_of_experience: 8,
    batches_handling: ["Batch A", "Batch B"],
    mentee_count: 18,
    is_active: true,
    is_high_demand: true,
    mentor_id: ObjectId("681e04c657409d7eaddb0eab"),
  },
  {
    mentor_name: "Lisa Taylor",
    mentor_email: "lisa.t@example.com",
    specialization: "Backend Development",
    years_of_experience: 5,
    batches_handling: ["Batch B"],
    mentee_count: 12,
    is_active: true,
    is_high_demand: false,
    mentor_id: ObjectId("681e04c657409d7eaddb0eb0"),
  },
  {
    mentor_name: "James Wilson",
    mentor_email: "james.w@example.com",
    specialization: "Full Stack Developement",
    years_of_experience: 10,
    batches_handling: ["Batch B"],
    mentee_count: 13,
    is_active: true,
    is_high_demand: false,
    mentor_id: ObjectId("681e04c657409d7eaddb0eb5"),
  },
]);

// The current database to use.
use("zen_class_programme");

// 1.Find all the topics and tasks which are thought in the month of October
db.topics.find({
  date: {
    $gte: ISODate("2020-10-01"),
    $lt: ISODate("2020-10-31"),
  },
});

db.tasks.find({
  assigned_date: {
    $gte: ISODate("2020-10-01"),
    $lt: ISODate("2020-10-31"),
  },
});

// 2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.company_drives.find({
  schedule_date: {
    $gte: ISODate("2020-10-15"),
    $lte: ISODate("2020-10-31"),
  },
});

// 3.Find all the company drives and students who are appeared for the placement.

db.company_drives.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "student_attended_id",
      foreignField: "_id",
      as: "appeared_students",
    },
  },
  {
    $unwind: "$appeared_students",
  },
  {
    $match: {
      "appeared_students.placement_status": "appeared",
    },
  },
  {
    $project: {
      company_name: 1,
      schedule_date: 1,
      "appeared_students.user_name": 1,
      "appeared_students._id": 1,
      "appeared_students.placement_status": 1,
    },
  },
]);

// 4.Find the number of problems solved by the user in codekata

db.codekata.find({}, { _id: 0, user_name: 1, problems_solved: 1 });

// 5.Find all the mentors with who has the mentee's count more than 15
db.mentors.find({
  mentee_count: { $gt: 15 },
});

// 6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.attendance.aggregate([
  {
    $match: {
      status: "absent",
      date: { $gte: ISODate("2020-10-15"), $lte: ISODate("2020-10-31") },
    },
  },
  {
    $lookup: {
      from: "tasks",
      localField: "user_id",
      foreignField: "submissions.user_id",
      as: "task_details",
    },
  },
  {
    $unwind: "$task_details",
  },
  {
    $match: {
      "task_details.submissions.status": "not submitted",
    },
  },
  {
    $group: {
      _id: "$user_id",
      count: { $sum: 1 },
      statuses: { $push: "$task_details.submissions.status" },
    },
  },
  {
    $lookup: {
      from: "users",
      localField: "_id",
      foreignField: "_id",
      as: "user_info",
    },
  },
  {
    $unwind: "$user_info",
  },
  {
    $project: {
      _id: 0,
      user_id: "$_id",
      user_name: "$user_info.name", // Corrected field name
      task_count: "$count",
      attendance_status: "absent",
      submission_statuses: "$statuses",
    },
  },
]);

import { parse } from "postcss";

const employees = [
  {
    "id": 1,
    "firstName": "Rejaul",
    "email": "ri555473@gmail.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "new": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Watch DSA Lectures",
        "description": "Watch 500 DSA lectures by next month.",
        "date": "2024-10-26",
        "category": "DSA"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Watch DSA Lectures",
        "description": "Watch 500 DSA lectures by next month.",
        "date": "2024-10-26",
        "category": "DSA"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Watch DSA Lectures",
        "description": "Watch 500 DSA lectures by next month.",
        "date": "2024-10-26",
        "category": "DSA"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Watch DSA Lectures",
        "description": "Watch 500 DSA lectures by next month.",
        "date": "2024-10-26",
        "category": "DSA"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Watch DSA Lectures",
        "description": "Watch 500 DSA lectures by next month.",
        "date": "2024-10-26",
        "category": "DSA"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Watch DSA Lectures",
        "description": "Watch 500 DSA lectures by next month.",
        "date": "2024-10-26",
        "category": "DSA"
      },
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Web Development Lecture",
        "description": "Complete the web development lecture series by the end of the week.",
        "date": "2024-10-29",
        "category": "Web Dev"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Vivaan",
    "email": "employee1@gmail.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "new": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Solve LeetCode Problems",
        "description": "Solve 600 LeetCode problems by the end of the semester.",
        "date": "2024-10-30",
        "category": "Coding"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Solve LeetCode Problems",
        "description": "Solve 600 LeetCode problems by the end of the semester.",
        "date": "2024-10-30",
        "category": "Coding"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Solve LeetCode Problems",
        "description": "Solve 600 LeetCode problems by the end of the semester.",
        "date": "2024-10-30",
        "category": "Coding"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Solve LeetCode Problems",
        "description": "Solve 600 LeetCode problems by the end of the semester.",
        "date": "2024-10-30",
        "category": "Coding"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Solve LeetCode Problems",
        "description": "Solve 600 LeetCode problems by the end of the semester.",
        "date": "2024-10-30",
        "category": "Coding"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Solve LeetCode Problems",
        "description": "Solve 600 LeetCode problems by the end of the semester.",
        "date": "2024-10-30",
        "category": "Coding"
      },
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Target CGPA",
        "description": "Aim for a CGPA of 10 this semester.",
        "date": "2024-10-31",
        "category": "Academic"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Naaz",
    "email": "naazparween942@gmail.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "new": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Prepare Presentation",
        "description": "Create a presentation for the upcoming client meeting.",
        "date": "2024-10-30",
        "category": "Presentation"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Prepare Presentation",
        "description": "Create a presentation for the upcoming client meeting.",
        "date": "2024-10-30",
        "category": "Presentation"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Prepare Presentation",
        "description": "Create a presentation for the upcoming client meeting.",
        "date": "2024-10-30",
        "category": "Presentation"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Prepare Presentation",
        "description": "Create a presentation for the upcoming client meeting.",
        "date": "2024-10-30",
        "category": "Presentation"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Prepare Presentation",
        "description": "Create a presentation for the upcoming client meeting.",
        "date": "2024-10-30",
        "category": "Presentation"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Prepare Presentation",
        "description": "Create a presentation for the upcoming client meeting.",
        "date": "2024-10-30",
        "category": "Presentation"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Prepare Presentation",
        "description": "Create a presentation for the upcoming client meeting.",
        "date": "2024-10-30",
        "category": "Presentation"
      },
      {
        "active": true,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Weekly Code Review",
        "description": "Review the code submitted by the team.",
        "date": "2024-10-27",
        "category": "Code Review"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Sana",
    "email": "letsdreambig01@gmail.com",
    "password": "123",
    "taskNumber": {
      "active": 1,
      "new": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Study Core Subjects",
        "description": "Revise the core subjects for the upcoming exams.",
        "date": "2024-10-31",
        "category": "Academic"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Study Core Subjects",
        "description": "Revise the core subjects for the upcoming exams.",
        "date": "2024-10-31",
        "category": "Academic"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Study Core Subjects",
        "description": "Revise the core subjects for the upcoming exams.",
        "date": "2024-10-31",
        "category": "Academic"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Study Core Subjects",
        "description": "Revise the core subjects for the upcoming exams.",
        "date": "2024-10-31",
        "category": "Academic"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Study Core Subjects",
        "description": "Revise the core subjects for the upcoming exams.",
        "date": "2024-10-31",
        "category": "Academic"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Study Core Subjects",
        "description": "Revise the core subjects for the upcoming exams.",
        "date": "2024-10-31",
        "category": "Academic"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Study Core Subjects",
        "description": "Revise the core subjects for the upcoming exams.",
        "date": "2024-10-31",
        "category": "Academic"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Study Core Subjects",
        "description": "Revise the core subjects for the upcoming exams.",
        "date": "2024-10-31",
        "category": "Academic"
      },
      {
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Complete Assignments",
        "description": "Finish all pending assignments by next week.",
        "date": "2024-10-05",
        "category": "Assignments"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Priyanka",
    "email": "priyankadey200513@gmail.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "new": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Research Competitors",
        "description": "Conduct research on competitors' products.",
        "date": "2024-10-28",
        "category": "Research"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Research Competitors",
        "description": "Conduct research on competitors' products.",
        "date": "2024-10-28",
        "category": "Research"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Research Competitors",
        "description": "Conduct research on competitors' products.",
        "date": "2024-10-28",
        "category": "Research"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Research Competitors",
        "description": "Conduct research on competitors' products.",
        "date": "2024-10-28",
        "category": "Research"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Research Competitors",
        "description": "Conduct research on competitors' products.",
        "date": "2024-10-28",
        "category": "Research"
      },
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Monthly Budget Review",
        "description": "Review the monthly budget and expenses.",
        "date": "2024-10-31",
        "category": "Finance"
      },
      {
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Team Building Activity",
        "description": "Participate in the team-building exercise.",
        "date": "2024-10-12",
        "category": "Team Building"
      }
    ]
  },
  {
    "id": 6,
    "firstName": "Sayed",
    "email": "subhoss948@gmail.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "new": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Upgrade Software",
        "description": "Upgrade the software to the latest version.",
        "date": "2024-10-12",
        "category": "Software"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Upgrade Software",
        "description": "Upgrade the software to the latest version.",
        "date": "2024-10-12",
        "category": "Software"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Upgrade Software",
        "description": "Upgrade the software to the latest version.",
        "date": "2024-10-12",
        "category": "Software"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Upgrade Software",
        "description": "Upgrade the software to the latest version.",
        "date": "2024-10-12",
        "category": "Software"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Upgrade Software",
        "description": "Upgrade the software to the latest version.",
        "date": "2024-10-12",
        "category": "Software"
      },
      {
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Server Maintenance",
        "description": "Perform routine maintenance on the server.",
        "date": "2024-10-15",
        "category": "Maintenance"
      }
    ]
  },
  {
    "id": 12,
    "firstName": "Sovia",
    "email": "sovia0922@gmail.com",
    "password": "123",
    "taskNumber": {
      "active": 7,
      "new": 7,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Complete DSA Lectures",
        "description": "Finish all DSA lectures before the exam.",
        "date": "2024-10-30",
        "category": "DSA"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Complete AI Project",
        "description": "Complete the AI project for the upcoming submission.",
        "date": "2024-11-05",
        "category": "AI"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Complete ML Project",
        "description": "Finish the machine learning project by the deadline.",
        "date": "2024-11-10",
        "category": "ML"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Complete Web Development Course",
        "description": "Finish the web development course and all related assignments.",
        "date": "2024-11-12",
        "category": "Web Dev"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Complete Backend Development",
        "description": "Learn and implement backend development techniques.",
        "date": "2024-11-15",
        "category": "Backend"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Complete Semester Study",
        "description": "Revise all subjects for the semester exams.",
        "date": "2024-11-20",
        "category": "Academic"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Participate in Study Groups",
        "description": "Join study groups to enhance understanding of complex topics.",
        "date": "2024-11-22",
        "category": "Group Study"
      }
    ]
  },
  
  {
    "id": 7,
    "firstName": "Tajul",
    "email": "tajulislam4023@gmail.com",
    "password": "123",
    "taskNumber": {
      "active": 1,
      "new": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Complete DSA Lectures",
        "description": "Watch all DSA lectures before the exam.",
        "date": "2024-10-30",
        "category": "DSA"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Complete DSA Lectures",
        "description": "Watch all DSA lectures before the exam.",
        "date": "2024-10-30",
        "category": "DSA"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Complete DSA Lectures",
        "description": "Watch all DSA lectures before the exam.",
        "date": "2024-10-30",
        "category": "DSA"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Complete DSA Lectures",
        "description": "Watch all DSA lectures before the exam.",
        "date": "2024-10-30",
        "category": "DSA"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Complete DSA Lectures",
        "description": "Watch all DSA lectures before the exam.",
        "date": "2024-10-30",
        "category": "DSA"
      },
      {
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Participate in Group Study",
        "description": "Join group studies to clarify doubts.",
        "date": "2024-10-31",
        "category": "Group Study"
      }
    ]
  },
  {
    "id": 8,
    "firstName": "Ayaan",
    "email": "employee2@gmail.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "new": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Review Project Requirements",
        "description": "Understand project requirements before starting.",
        "date": "2024-10-28",
        "category": "Project"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Review Project Requirements",
        "description": "Understand project requirements before starting.",
        "date": "2024-10-28",
        "category": "Project"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Review Project Requirements",
        "description": "Understand project requirements before starting.",
        "date": "2024-10-28",
        "category": "Project"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Review Project Requirements",
        "description": "Understand project requirements before starting.",
        "date": "2024-10-28",
        "category": "Project"
      },
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Prepare for Exams",
        "description": "Start preparing for the upcoming exams.",
        "date": "2024-10-30",
        "category": "Academic"
      }
    ]
  },
  {
    "id": 9,
    "firstName": "Rohan",
    "email": "employee3@gmail.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "new": 6,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Complete Assignments",
        "description": "Finish all pending assignments before the deadline.",
        "date": "2024-10-30",
        "category": "Assignments"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Complete Assignments",
        "description": "Finish all pending assignments before the deadline.",
        "date": "2024-10-30",
        "category": "Assignments"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Complete Assignments",
        "description": "Finish all pending assignments before the deadline.",
        "date": "2024-10-30",
        "category": "Assignments"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Complete Assignments",
        "description": "Finish all pending assignments before the deadline.",
        "date": "2024-10-30",
        "category": "Assignments"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Complete Assignments",
        "description": "Finish all pending assignments before the deadline.",
        "date": "2024-10-30",
        "category": "Assignments"
      },
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Target CGPA",
        "description": "Aim for a CGPA of 10 this semester.",
        "date": "2024-10-31",
        "category": "Academic"
      }
    ]
  },
  {
    "id": 10,
    "firstName": "Saima",
    "email": "akramsaima152@gmail.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "new": 6,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Complete Assignments",
        "description": "Finish all pending assignments before the deadline.",
        "date": "2024-10-30",
        "category": "Assignments"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Complete DSA",
        "description": "Finish all pending assignments before the deadline.",
        "date": "2024-10-30",
        "category": "Assignments"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "target cgpa 9",
        "description": "Finish all pending assignments before the deadline.",
        "date": "2024-10-30",
        "category": "Assignments"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "calligraphy",
        "description": "Finish all pending calligraphy before the deadline.",
        "date": "2024-10-30",
        "category": "Assignments"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Complete Assignments",
        "description": "Finish all pending assignments before the deadline.",
        "date": "2024-10-30",
        "category": "Assignments"
      },
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Drawing",
        "description": "complete your drawing",
        "date": "2024-10-31",
        "category": "hobby"
      }
    ]
  },
  {
    "id": 11,
    "firstName": "Aarav",
    "email": "a@gmail.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "new": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Research Competitors",
        "description": "Conduct research on competitors' products.",
        "date": "2024-10-28",
        "category": "Research"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Research Competitors",
        "description": "Conduct research on competitors' products.",
        "date": "2024-10-28",
        "category": "Research"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Research Competitors",
        "description": "Conduct research on competitors' products.",
        "date": "2024-10-28",
        "category": "Research"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Research Competitors",
        "description": "Conduct research on competitors' products.",
        "date": "2024-10-28",
        "category": "Research"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Research Competitors",
        "description": "Conduct research on competitors' products.",
        "date": "2024-10-28",
        "category": "Research"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Research Competitors",
        "description": "Conduct research on competitors' products.",
        "date": "2024-10-28",
        "category": "Research"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Research Competitors",
        "description": "Conduct research on competitors' products.",
        "date": "2024-10-28",
        "category": "Research"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Research Competitors",
        "description": "Conduct research on competitors' products.",
        "date": "2024-10-28",
        "category": "Research"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Research Competitors",
        "description": "Conduct research on competitors' products.",
        "date": "2024-10-28",
        "category": "Research"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Research Competitors",
        "description": "Conduct research on competitors' products.",
        "date": "2024-10-28",
        "category": "Research"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Research Competitors",
        "description": "Conduct research on competitors' products.",
        "date": "2024-10-28",
        "category": "Research"
      },
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Monthly Budget Review",
        "description": "Review the monthly budget and expenses.",
        "date": "2024-10-31",
        "category": "Finance"
      },
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Monthly Budget Review",
        "description": "Review the monthly budget and expenses.",
        "date": "2024-10-31",
        "category": "Finance"
      },
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Monthly Budget Review",
        "description": "Review the monthly budget and expenses.",
        "date": "2024-10-31",
        "category": "Finance"
      },
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Monthly Budget Review",
        "description": "Review the monthly budget and expenses.",
        "date": "2024-10-31",
        "category": "Finance"
      },
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Monthly Budget Review",
        "description": "Review the monthly budget and expenses.",
        "date": "2024-10-31",
        "category": "Finance"
      },
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Monthly Budget Review",
        "description": "Review the monthly budget and expenses.",
        "date": "2024-10-31",
        "category": "Finance"
      },
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Monthly Budget Review",
        "description": "Review the monthly budget and expenses.",
        "date": "2024-10-31",
        "category": "Finance"
      },
      {
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Team Building Activity",
        "description": "Participate in the team-building exercise.",
        "date": "2024-10-12",
        "category": "Team Building"
      }
    ]
  }
];
const admin = [
  {
    "id": 1,
    "firstName": "Rohan",
    "email": "admin@example.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "new": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Review Employee Performance",
        "description": "Evaluate employee performance for the last quarter.",
        "date": "2024-10-10",
        "category": "Performance Review"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Organize Team Outing",
        "description": "Plan and organize the team outing for next month.",
        "date": "2024-10-29",
        "category": "Event Planning"
      }
    ]
  }
];

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

  }
  export const getLocalStorage=()=>{
   const employees= JSON.parse(localStorage.getItem('employees'))
   const admin= JSON.parse(localStorage.getItem('admin'))
    return{employees,admin}
    
    

  }

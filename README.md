# Zen Class Programme - MongoDB Implementation

A complete MongoDB database implementation for a coding bootcamp management system (Zen Class Programme).

## 📌 Features

- **User Management**: Students, mentors, and admin roles
- **Learning System**: Topics, tasks, and submissions tracking
- **Placement Support**: Company drives and placement status
- **Progress Tracking**: Codekata problems solved and attendance
- **Analytics**: Queries for program insights

## 🛠️ Database Collections

1. `users` - Student, mentor, and admin profiles
2. `topics` - Curriculum topics with mentor assignments
3. `tasks` - Assignments with submission tracking
4. `attendance` - Student attendance records
5. `company_drives` - Placement drive information
6. `codekata` - Coding problem completion tracking
7. `mentors` - Mentor profiles and mentee management

## 🔍 Sample Queries

```javascript
// Find topics taught in October 2020
db.topics.find({ 
  date: { 
    $gte: ISODate("2025-10-01"), 
    $lt: ISODate("2025-11-01") 
  } 
});

// Find students with >100 Codekata problems solved
db.codekata.find({ problems_solved: { $gt: 100 } });

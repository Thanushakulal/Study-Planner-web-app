Study Planner web-app
Video Demo : https://youtu.be/M2ZISv_RNqw?si=Li4iVFRgUd-MDta6

![Screenshot (42)](https://github.com/user-attachments/assets/92d3aef8-2240-493d-91f5-e1855b0f3bb7)

The Study Planner Web Application is a comprehensive and feature-rich web-based productivity tool that combines simplicity, intuitive design, and advanced features to ensure optimal organization and time management for its users. This application integrates task planning, deadline reminders, progress tracking, and a visual progress bar to offer users a seamless experience when managing tasks, meeting deadlines, and organizing their daily schedules. Designed with HTML, CSS, and JavaScript, it focuses on ease of use, adaptability, and a pleasant user experience.

With its responsive and interactive user interface, users of all technical backgrounds can quickly create tasks, set alarms, monitor deadlines, and view progress with minimal learning. The application leverages features like browser notifications for real-time alarms, theme switching for accessibility preferences, and local storage to save data securely. This eliminates the need for server-side databases while ensuring that user information persists even after refreshing or closing the browser.

Features Overview:

1. Task Management:
Users can add a new task with details like task name, deadline, and time.
Each task can be marked as complete or incomplete easily.
Tasks can be deleted to ensure a cleaner interface and avoid clutter.
Tasks are listed dynamically on the dashboard for quick interaction.
2. Deadline Reminder with Alarms:
Users can set alarms for deadlines.
The application monitors time using JavaScript's built-in setInterval and triggers browser notifications when a deadline is reached.
Alarms ensure the user never misses an important deadline.
3. Visual Progress Tracking:
A dynamic progress bar visually represents a user's productivity by showing how many tasks are completed relative to the total number of tasks.
The progress bar provides immediate feedback on progress.
4. Dark/Light Theme Toggle:
A toggle button allows users to choose between a light theme and a dark theme, making the app visually accessible and comfortable under different lighting conditions.
5. Responsive UI/UX Design:
The interface is mobile-friendly, tablet-friendly, and responsive on different screen sizes. This means it works equally well on smartphones, tablets, and desktops.
The design employs vibrant colors and visual elements for better usability.
6. Local Data Storage:
User preferences, tasks, and alarms are stored securely in the browser’s local storage, ensuring data persistence without requiring a backend server.
7. Progress Analytics:
The app dynamically calculates task completion rates and visualizes them using the progress bar.
This visualization helps users better plan their schedules.
8. Browser Notifications:
The alarm system integrates with browser notifications to alert users about upcoming deadlines even if the browser tab isn't active.
9. Task Filtering:
Users can sort tasks by priority, due dates, or completion status to make task management simple and effective.
10. Collaboration Potential (Future Scope):
With user authentication and cloud backups, users could collaborate on shared tasks and sync tasks across devices.
11. Customizable Alarm Timers:
Users can set custom times for alarms to better suit their needs, making the app versatile for personalized scheduling.
12. Backup/Restore Functionality:
Tasks and alarms can be exported and imported, enabling cross-platform access and backup recovery.
13. Calendar Integration (Planned Feature):
Integration with external calendar services like Google Calendar or Outlook would allow users to manage tasks directly within their personal calendar interfaces.
14. Statistics Dashboard:
Users can view insights into productivity trends using graphs or simple visual feedback over time.
Technical Architecture:
The web application leverages the following technologies:

HTML: Defines the structure and layout of the app's web pages.
CSS: Styles the app, making it responsive and aesthetically pleasing.
JavaScript: Powers interactivity, data manipulation, and real-time updates for features like alarms and task tracking.
LocalStorage: Provides client-side data persistence, ensuring tasks and preferences are not lost when the user closes the browser.
CSS Animations: Enhances user experience with smooth visual transitions and effects.
How It Works:
Task Creation:

Users can create tasks by filling out a form with the task name, date, and time.
The application dynamically renders these tasks in a to-do list view.
Setting Alarms:

Users can set alarms for these tasks.
The application monitors the system's clock against these deadlines in real time using JavaScript intervals.
Dynamic UI Updates:

When tasks are marked complete, the UI updates with a change in progress bars.
Users can use the delete button to remove unnecessary or outdated tasks.
Notifications:

When the deadline is reached, the app uses Notification API to notify the user with a visual popup.
Progress Monitoring:

The application calculates how many tasks are completed and dynamically updates the progress bar for motivation.
User Theme Preferences:

Users can toggle between light and dark modes using a button for better visual accessibility.
Data Persistence:

Tasks are stored in localStorage to ensure data remains even after a browser refresh.
Example Workflow:
The user opens the app and accesses the task dashboard.
The user enters a task, sets the due date and time, and clicks "Save."
The task appears on the task list dynamically.
The user sets an alarm for the deadline.
The system continuously monitors the system clock. At the set time, it triggers a browser notification reminding the user about the task.
The user marks tasks as complete, which immediately updates the progress bar.
Users can switch between dark and light themes as per their preference for optimal readability.
Future Enhancements
Cloud Synchronization: Allow users to sync their task lists across devices using cloud backup services like Firebase, AWS, or Google Drive.
Authentication: Add user authentication with username/passwords to allow multi-device access.
Advanced Analytics: Integrate task tracking graphs, weekly productivity trends, or insights into user activity habits.
Calendar View: Allow visualization of tasks in a calendar view to facilitate month-to-month planning.
Collaboration Tools: Users could share tasks with other accounts, creating shared groups for goal tracking.
Mobile App Version: Turn the web app into a native mobile app for Android/iOS with features such as push notifications.
Key Impact:
This web app is more than just a task manager. It represents motivation, time management, organization, and productivity improvement. Its easy-to-use interface allows individuals to focus on their priorities without losing track of deadlines. It integrates visual feedback with real-time alarms and provides insights into patterns of productivity.

The Study Planner Web Application is ideal for students trying to organize exams and assignments, professionals aiming to meet deadlines, or anyone struggling to prioritize their daily schedule.

Final Note:
The Study Planner Web Application was designed with user experience at its core. Through its seamless design, customizable features, and intuitive interactivity, this app can help individuals achieve their goals through strategic time management. It is an innovative tool that combines simplicity, utility, and style for modern-day productivity.

With planned enhancements and features like analytics dashboards and cloud synchronization, this app is destined to be a game-changer for individuals striving for better work-life balance and productivity optimization.


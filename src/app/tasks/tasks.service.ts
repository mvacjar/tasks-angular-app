import { Injectable } from '@angular/core';
import { NewTaskData } from './task/task.model';

@Injectable({providedIn: 'root'})

export class TasksService {
    private tasks = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Learn more Angular',
    summary: 'Get your hands dirty!',
    dueDate: '2024-11-06',
  },
  {
    id: 't2',
    userId: 'u2',
    title: 'Learn more',
    summary: 'Lets get down to the business',
    dueDate: '2024-10-07',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't4',
    userId: 'u4',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
];

getUserTasks(userId: string) {
    return this.tasks.filter((task) =>  userId === task.userId);
}

addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
        id: new Date().getTime().toString(),
        userId: userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date,
    })
}

removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id)

}

}
class Scheduler{
  name: string = 'Unknown scheduler'
  data:any[] = []

  constructor(name?:string) {
    if (name) this.name = name
  }

  getName() { return this.name}

  updateTask(): any {
  }
  deleteTask(): any {

  }
  createTask(task:number): any {
    this.data.push(task)
  }
  getAllTasks(): any {
    return this.data
  }

}

export default Scheduler

// const createScheduler = () => {
//   const arr = []
//
//   const addScheduler = () => {}
//   const deleteScheduler = () => {}
//   return addScheduler
// }
//
// createScheduler()()
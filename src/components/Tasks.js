const task = [
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30 pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        remindewr: true,
    },
    {
        id: 3,
        text: 'Learn Bootstrap',
        day: 'Feb 6th at 1:30pm',
        remindewr: true,
    }
]
const Tasks = () => {
    return (
        <div className='task'>
          {task.map((task) => 
            (<h3>{task.text}</h3>))}  
        </div>
    )
}

export default Tasks

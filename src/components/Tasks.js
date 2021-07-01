const task = [
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30 pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Metting at School',
        day: 'Feb 6th at 1:30pm',
        remindewr: true,
    }
]
const Tasks = () => {
    return (
        <>
          {task.map((task) => 
            (<h3>{task.text}</h3>))}  
        </>
    )
}

export default Tasks

import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [remainder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add task')
            return
        }

        onAdd({ text, day, remainder })

        setText('')
        setReminder(false)
        setDay('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Tasks</label>
                <input type="text" placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type="text" placeholder='Add Day and time' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="checkbox" checked={remainder} value={remainder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask

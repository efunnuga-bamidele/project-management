
import { useState } from 'react'
import Select from 'react-select'

//Style
import './Create.css'

//default categories
const categories = [
  {value: 'develompent', label: 'Development'},
  {value: 'design', label: 'Design'},
  {value: 'sales', label: 'Sales'},
  {value: 'marketing', label: 'Marketing'}
]

export default function Create() {
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])

  const handleSubmit = (e) => {

  }

  return (
    <div className='create-form'>
        <h2 className='page-title'>Create a new project</h2>
        <form onSubmit={handleSubmit}>
          <label>
              <span>Project name:</span>
              <input 
                  required
                  type='text'
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
          </label>
          <label>
              <span>Project details:</span>
              <textarea 
                  required
                  type='text'
                  onChange={(e) => setDetails(e.target.value)}
                  value={details}
              ></textarea>
          </label>
          <label>
              <span>Set due date:</span>
              <input 
                  required
                  type='date'
                  onChange={(e) => setDueDate(e.target.value)}
                  value={dueDate}
              />
          </label>
          <label>
              <span>Project category:</span>
              <Select 
                  options = {categories}
                  onChange={(option) => setCategory(option)}  
              />
          </label>
          <label>
              <span>Assign to:</span>
          </label>
          <button className='btn'>Add Project</button>
        </form>
    </div>
  )
}

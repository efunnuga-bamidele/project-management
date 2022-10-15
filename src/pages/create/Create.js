
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import { useCollection } from '../../hooks/useCollection'
import { timestamp } from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'

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
  const { addDocument, response } = useFirestore('projects')
  const { documents } = useCollection('users')
  const [users, setUsers] = useState([])
  const { user } = useAuthContext()
  const redirect = useNavigate()

  //form field states
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])
  const [formError, setFormError] = useState(null)

  //loop through the users document
  useEffect(() => {
      if (documents) {
        const options = documents.map(user => {
          return { value: user , label: user.displayName }
        })

        setUsers(options)
      }
  }, [documents])
  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError(null)

    //check for form error
    if (!category){
      setFormError("Please select a project category")
      return
    }
    if (assignedUsers.length < 1){
      setFormError('Please assign project to at least 1 user')
      return
    }


    //Data clean up before storing in the database
    const createdBy = {
      displayName : user.displayName,
      photoURL: user.photoURL,
      id: user.uid
    }

    const assignedUsersList = assignedUsers.map((user) => {
        return {
          displayName: user.value.displayName,
          photoURL: user.value.photoURL,
          id: user.value.id
        }
    })

    const project = {
      name : name,
      details : details,
      category: category.value,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      comments: [],
      createdBy: createdBy,
      assignedUsersList: assignedUsersList

    }

    await addDocument(project)
    if (!response.error){
        redirect('/')
    }
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
              <Select
                  options={users}  
                  onChange={(option) => setAssignedUsers(option)}
                  isMulti
              />
          </label>

          <button className='btn'>Add Project</button>
          {formError && <p className='error'>{formError}</p>}
        </form>
    </div>
  )
}

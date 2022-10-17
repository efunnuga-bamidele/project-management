import { useState } from "react"
//hooks
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'

//components
import ProjectList from '../../components/ProjectList'

//Style
import './Dashboard.css'
import ProjectFilter from './ProjectFilter'

export default function Dashboard() {
    const { documents, error } = useCollection('projects')
    const [currentFilter, setCurrentFilter] = useState('all')
    const { user } = useAuthContext()

    const changeFilter = (newFilter) => {
        setCurrentFilter(newFilter)
        
    }

    const filteredProject = documents ? documents.filter((document) => {
        switch (currentFilter){
            case 'all':
                return true
            case 'mine':
                let assignedToMe = false
                document.assignedUsersList.forEach((userLoop) => {
                   if (user.uid === userLoop.id) {
                    assignedToMe = true
                   }
                })
                return assignedToMe
            case 'develompent':
            case 'design':
            case 'sales':
            case 'marketing':
                // console.log(document.category, currentFilter)
                console.log(document.category === currentFilter)
                return document.category === currentFilter
            default:
                return true
        }
    }) : null

    return (
        <div>
            <h2 className='page-title'>Dashboard</h2> 
            {error && <p className='error'>{error}</p>}
            {documents && (
                <ProjectFilter currentFilter={currentFilter} changeFilter = {changeFilter}/>
                )}
            {filteredProject && <ProjectList projects={filteredProject}/>}
        </div>
    )
}
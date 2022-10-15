//to extract route parameter
import { useParams } from 'react-router-dom'

//hooks
import { useDocument } from '../../hooks/useDocument'

//component
import ProjectSummary from './ProjectSummary'
import ProjectComments from './ProjectComments'

// Style
import './Project.css'

export default function Project() {
    const { id } = useParams()
    const { document, error } = useDocument('projects', id)

    if (error){
        return <div className='error'>{error}</div> 
    }
    if (!document){
        return <div className='loading'>Loading...</div>
    }

    return (
        <div className='project-details'>
            <ProjectSummary project ={document} />
            <ProjectComments project ={document}/>
        </div>
    )
}
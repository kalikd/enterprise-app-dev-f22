import StudentContext, {StudentConsumer} from './StudentContext'
import FacultyContext, { FacultyConsumer } from './FacultyContext'
import { useContext } from 'react'
export default function ComponentC(props){
    const student = useContext(StudentContext)
    const faculty = useContext(FacultyContext)
    return (<>
        <h4>Component C</h4>
        <span>  {faculty.name} is a CS faculty.</span>
        <span>I am {student.name}, I am {student.age} and I am a {student.gender}</span>
        {/* <StudentConsumer>
            { 
            (student) => {
                return (<>
                    <FacultyConsumer>
                        { (name) => {
                            return (<>
                            <span>  {name} is a CS faculty.</span>
                            <span>I am {student.name}, I am {student.age} and I am a {student.gender}</span>
                            </>)
                        }}
                    </FacultyConsumer>
                   
                </>)
            }

            }
        </StudentConsumer> */}
        
       
    </>)
}
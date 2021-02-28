import React from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component'
const Homepage= (props) => {
     console.log(props)
    return (
        <div className="homepage">
             {/* another way to direct to another  */}
             <button onClick={()=>props.history.push('/test')}>test</button>
            <Directory props={props}/>
        </div>
    )
}
export default Homepage;


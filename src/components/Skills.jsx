import "../assets/css/Skills.css"
import figma from "../assets/images/figma.webp"
import canva from "../assets/images/canva.webp"
 
const Skills=()=>{
    return(
        <div id="skills" className="skill">
            Skill & Tolls
            <div className="skill1">
                <li><img className="img90" src={figma}/></li>
                 
                  <li><img className="img90" src={canva}/></li>
            </div>
        </div>
    )
}
export default Skills;
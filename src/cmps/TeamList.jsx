import { TeamPreview } from "./TeamPreview";


export function TeamList({team}){


    return(

     <>
      {  team.map(member=><article className="member" key={member.name}><TeamPreview member={member}/></article>)}
     </>
    
    )
}
import ResultsInfor from "./ResultsInfor"

const FindExpertResults = ({experts, setExpert, setShowFullInfor, searchResults}) => {
    return (
        <div className="results-container">
           {searchResults.map(expert=>{
               return(<ResultsInfor expert={expert} setExpert={setExpert} setShowFullInfor = {setShowFullInfor}/>)
           })}

        </div>
    )
}

export default FindExpertResults

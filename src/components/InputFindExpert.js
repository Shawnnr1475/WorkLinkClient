
const InputFindExpert = ({jobTitles, FindExpertSearch}) => {

    return (
        <div className="input-find-expert">
            <form className="find-expert-input-form-container">
                <div className="row row-1">
                    <label>Occupation</label>
                    <select>
                        {jobTitles.map(title=>{
                          return(
                            <option value={title}>{title}</option>
                          )
                        })}
                    </select>
                </div>
                <div className="row row-2">
                    <label>Range</label>
                    <select>
                        <option value="0-5km">0-5km</option>
                        <option value="5-10km">5-10km</option>
                        <option value="10-15km">10-15km</option>
                        <option value="20-30km">20-30km</option>
                        <option value="30-40km">30-40km</option>
                        <option value="40-50km">40-50km</option>
                        <option value="above">Above</option>
                        <option value="all">All</option>
                    </select>
                </div>
            </form>
            <div className="row row-3">
                    <button className="find-btn" type="button" onClick={FindExpertSearch}>Find</button>
            </div>
        </div>
    )
}

export default InputFindExpert

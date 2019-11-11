import React from 'react';
class Pagination extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="pagination">
                <ul>
                if(this.props.current_page > 1)
                {
                    <li><a>Prev</a></li>
                }
                <li><a>{this.props.current_page}</a></li>
                
                </ul>
            </div>
        )
    }
}
export default Pagination;
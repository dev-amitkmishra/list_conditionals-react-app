import React, {Component} from 'react';

// with stateless
// const AcceptClasses = (Element, className) => {
//     return (props) => (
//         <div className={className}>
//             <Element {...props}/>
//         </div>
//     );
// }

// with statefull
const AcceptClasses = (Element, className) => {
    return class extends Component {
        render() {
            return (
                <div className={className}>
                    <Element {...this.props}/>
                </div>
            )
        }
    }
}
export default AcceptClasses;
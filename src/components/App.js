import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div className={"app"}>
                <h1>Welcome to My React Tutorial</h1>
                <hr/>
                <a href={"/"}>Home</a>
                |
                <a href={"mcq"}>MCQ</a>
                |
                <a href={"written"}>Written</a>
                |
                <a href={"supervisors"}>Supervisors</a>
                <div className={"appChildren"}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default App;
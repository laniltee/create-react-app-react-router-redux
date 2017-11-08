import React from 'react';
import {connect} from 'react-redux';

class HomePage extends React.Component {
    render() {
        return (
            <div className={"homePage"}>
                <h2>Home Page</h2>
                <h3>List of MCQ Questions</h3>
                <ol>
                    {
                        this.props.writtenQuestions.map((question, index) => {
                            return (
                                <li key={index}>
                                    {question.text}
                                </li>
                            )
                        })
                    }
                </ol>
                <h3>List of Written Questions</h3>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        writtenQuestions: state.questions
    }
}

export default connect(mapStateToProps)(HomePage);
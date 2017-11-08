import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as questionsActions from '../../actions/questionsActions';

class WrittenPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            question: {
                text: '',
                answer: ''
            }
        }

        this.createQuestion = this.createQuestion.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        if(value === null || value === ""){
            return;
        }
        let question = this.state.question;
        question[name] = value;
        this.setState({
            question
        });
    }

    createQuestion(event) {
        event.preventDefault();
        this.props.actions.createQuestion(this.state.question);
    }

    mapQuestionToTableRow(question, index) {
        return (
            <tr key={index}>
                <td>{question.text}</td>
                <td>{question.answer}</td>
            </tr>
        );
    }

    render() {
        return (
            <div className={"writtenPage"}>
                <h2>Written Questions Page</h2>
                <h3>List of Written Questions</h3>
                <table>
                    <tbody>
                    <tr>
                        <th>Question</th>
                        <th>Answer</th>
                    </tr>
                    {this.props.questions.map(this.mapQuestionToTableRow)}
                    </tbody>
                </table>
                <h3>Add New Written Question</h3>
                <div className={"addQuestionForm"}>
                    <table>
                        <tbody>
                        <tr>
                            <td>Question</td>
                            <td>
                                <input
                                    type={"text"}
                                    value={this.state.question.text}
                                    onChange={this.handleTextChange}
                                    name={"text"}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Answer</td>
                            <td>
                                <input
                                    type={"text"}
                                    value={this.state.question.answer}
                                    onChange={this.handleTextChange}
                                    name={"answer"}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button onClick={this.createQuestion}>Add New Question</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

WrittenPage.PropTypes = {
    questions: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        questions: state.questions
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(questionsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WrittenPage);
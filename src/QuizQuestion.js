import React, {Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'


class QuizQuestion extends Component {
    constructor(props) {
        super(props)
        this.state = {incorrectAnswer: false}
    }
    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.setState({incorrectAnswer: false})
            this.props.showNextQuestionHandler()
        } else {
            this.setState({incorrectAnswer: true})
        }
    }
    render() {
        const elements = this.props.quiz_question.answer_options.map((item, idx) => {
            return (
                <QuizQuestionButton
                    key={idx}
                    button_text={item}
                    clickHandler={this.handleClick.bind(this)}
                />
            )
        })
        const message_wrong = <p className="error" >Sorry, that's not right</p>
        const layout = (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>{elements}</ul>
                </section>
                {this.state.incorrectAnswer ? message_wrong : null}
            </main>
        )
        return layout
    }
}

export default QuizQuestion

import React, {Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'


class QuizQuestion extends Component {
    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler()
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
        const layout = (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>{elements}</ul>
                </section>
            </main>
        )
        return layout
    }
}

export default QuizQuestion

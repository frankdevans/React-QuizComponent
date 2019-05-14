import React, {Component} from 'react'


class QuizQuestionButton extends Component {
    render() {
        const layout = (
            <li>
                <button>{this.props.button_text}</button>
            </li>
        )
        return layout
    }
}

export default QuizQuestionButton

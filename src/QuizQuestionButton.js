import React, {Component} from 'react'


class QuizQuestionButton extends Component {
    handleClick() {
        this.props.clickHandler(this.props.button_text)
    }
    render() {
        const layout = (
            <li>
                <button onClick={this.handleClick.bind(this)} >{this.props.button_text}</button>
            </li>
        )
        return layout
    }
}

export default QuizQuestionButton

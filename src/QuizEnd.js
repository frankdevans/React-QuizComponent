import React, {Component} from 'react'


class QuizEnd extends Component {
    handleResetClick() {
        this.props.resetClickHandler()
    }
    render() {
        const layout = (
            <div>
                <p>Thanks for playing!</p>
                <a onClick={this.handleResetClick.bind(this)} href=''>Reset Quiz</a>
            </div>
        )
        return layout
    }
}

export default QuizEnd

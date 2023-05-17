import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    return (
      <div className={css.btnWrapper}>
        {this.props.options.map(option => {
          return (
            <button
              key={option}
              className={css.btn}
              id={option}
              onClick={this.props.onLeaveFeedback}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

import React from 'react';
import classnames from 'classnames';
import 'style.less';

const { PropTypes, Component } = React;

class SmellyToggle extends Component {

  /**
   * Constructor method for our class
   *
   * @param {Object} props Passed in component props
   */
  constructor(props) {
    super(props);

    // setup state
    this.state = {
      checked: props.toggled,
      focused: false
    };
  }

  /**
   * React tools display name
   */
  displayName: 'SmellyToggle'

  /**
   * Fires when a user clicks on the toggle control
   *
   * @api private
   */
  _handleClick() {
    console.log('unbinded context');
    console.log(this);
    let checkbox = this.refs.toggle.getDOMNode();

    this.setState({ checked: !this.state.checked }, function() {
      checkbox.checked = this.state.checked;
      checkbox.click();
      checkbox.focus();
    });
  }

  /**
   * Fires when the hidden checkbox gains focus
   *
   * @api private
   */
  _handleFocus() {
    console.log('binded context');
    console.log(this);
    this.setState({ focused: true });
  }

  /**
   * Fires when the hidden checkbox is blurred
   *
   * @api private
   */
  _handleBlur() {
    this.setState({ focused: false });
  }

  /**
   * Fires when the hidden checkbox is clicked programically in
   * the _handleClick method
   *
   * @api private
   */
  _handleChange() {
    // if we have a value in our props and a checked state
    // send that along in the callback
    if (this.props.value && this.state.checked) {
      return this.props.onToggle(this.state.checked, this.props.value);
    }

    this.props.onToggle(this.state.checked);
  }

  /**
   * Render the left label
   *
   * @api private
   */
  _renderLeftLabel() {
    return (
      <span className="smelly-toggle-label left">
        { this.props.labelLeftText }
      </span>
    );
  }

  /**
   * Render the right label
   *
   * @api private
   */
  _renderRightLabel() {
    return (
      <span className="smelly-toggle-label right">
        { this.props.labelRightText }
      </span>
    );
  }

  /**
   * Render our actual switch control
   *
   * @api private
   */
  _renderSwitch() {
    let attributes = { className: 'smelly-toggle-controls' };

    if (!this.props.disabled) {
      attributes.onClick = this._handleClick.bind(this);
    }

    return (
      <div {...attributes}>
        <div className="smelly-toggle-track"></div>
        <div className="smelly-toggle-thumb"></div>
      </div>
    );
  }

  /**
   * Render toggle switch and labels
   *
   * @api private
   */
  _renderToggle() {
    let classes = classnames(
      'smelly-toggle', {
        'focused': this.state.focused,
        'disabled': this.props.disabled,
        'checked': this.state.checked
      }
    );

    if (this.props.showLabels) {
      return (
        <div className={classes}>
          { this._renderLeftLabel() }
          { this._renderSwitch() }
          { this._renderRightLabel() }
        </div>
      );
    }

    return (
      <div className={classes}>
        { this._renderSwitch() }
      </div>
    );
  }

  /**
   * Reacts render method
   */
  render() {
    let inputProps = {
      ref: 'toggle',
      type: 'checkbox',
      className: 'smelly-toggle-input',
      role: 'checkbox',
      id: this.props.id,
      name: this.props.name,
      value: this.props.value,
      disabled: this.props.disabled,
      checked: this.state.checked,
      onChange: this._handleChange.bind(this),
      onFocus: this._handleFocus.bind(this),
      onBlur: this._handleBlur.bind(this)
    };

    return (
      <fieldset className="smelly-toggle-container" tabindex="0">
        <input {...inputProps} aria-checked={this.state.checked} />
        { this._renderToggle() }
      </fieldset>
    );
  }
}

/**
 * Default component property types
 */
SmellyToggle.propTypes = {
  toggled: PropTypes.bool,
  onToggle: PropTypes.func,
  value: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  showLabels: PropTypes.bool,
  labelLeftText: PropTypes.string,
  labelRightText: PropTypes.string
};

/**
 * Default component properties
 */
SmellyToggle.defaultProps = {
  disabled: false,
  toggled: false,
  showLabels: true,
  labelLeftText: 'Off',
  labelRightText: 'On'
};

export default SmellyToggle;

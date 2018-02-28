import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react'
import palindromeUtils from '../utils/palindrome';


class PalindromeChecker extends Component {
  constructor(props) {
    super(props);
    this.__checkPalindrome = this.__checkPalindrome.bind(this);
    this.state = {
      sentence: '',
      loading: false,
      success: false,
      warning: false,
      error: false,
    }
  }

  __checkPalindrome() {

    if (this.state.sentence.trim() === '') {
      return;
    }

    this.setState({loading: true});
    palindromeUtils.isPalindrome(this.state.sentence).then((response) => {
      this.setState({success: true, error: false, warning: false, loading: false});
    }).catch((error) => {
      if (error.response && error.response.status === 400) {
        this.setState({success: false, error: true, warning: false, loading: false});
      } else {
        this.setState({success: false, error: false, warning: true, loading: false});
      }
    });
  }

  render() {
    return (
      <div>
          <Form loading={this.state.loading} success={this.state.success} warning={this.state.warning} error={this.state.error}>
            <Form.Field>
              <label>Sentence</label>
              <input placeholder='Insert here your sentence' onChange={(e) => { this.setState({sentence: e.target.value })}} required />
            </Form.Field>
            <Message success header="Sentence checked! It's a palindrome" />
            <Message error header="Sentence checked! It's not a palindrome" />
            <Message warning header="Something bad happened :(" />
            <Button disabled={this.state.loading} onClick={this.__checkPalindrome}>Check</Button>
          </Form>
      </div>
    )
  }
}

export default PalindromeChecker;

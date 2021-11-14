class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleLearnOnline = (message, widget) => {
    const text = this.createChatBotMessage(message, {
      widget: widget,
    });
    this.addMessageToState(text);
  };

  handleFeedback = () => {
    const message = this.createChatBotMessage(
      "Please go to the following url and type in your issues",
      {
        widget: "feedback",
      }
    );

    this.addMessageToState(message);
  };

  handleFAQ = () => {
    const message = this.createChatBotMessage(
      "Here are a few commonly asked questions",
      {
        widget: "faq",
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
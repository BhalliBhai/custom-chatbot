class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  //method for add message in our chatbot
  addMessageToBotState = (messages) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, ...messages],
      }));
    } else {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, messages],
      }));
    }
  };

  //simple greeting which return simple message
  Greeting = () => {
    const message = this.createChatBotMessage(`Hi, Tell me how may i assist you?`, {
      withAvatar: true,
    });
    this.addMessageToBotState(message);
  };

  //use tools widget, return button and action doing
  Tools = () => {
    const message = this.createChatBotMessage(
      `we provides this much features`,
      {
        withAvatar: true,
        widget: "Tools",
      }
    );
    this.addMessageToBotState(message);
  };

  //for weather widget, API testing and fetch data return current weather info of city using API
  WeatherInfoHandle = () => {
    const message = this.createChatBotMessage(
      `Enter your city name to know about the weather of your city`,
      {
        withAvatar: true,
        widget: "WeatherInfo",
      }
    );
    this.addMessageToBotState(message);
  };

  //for enrollment no widget , use of form and submission of event
  EnrollmentNumber = () => {
    const message = this.createChatBotMessage(
      `Enter your information for generate enrollment no.`,
      {
        withAvatar: true,
        widget: "EnrollmentNo",
      }
    );
    this.addMessageToBotState(message);
  };

  //display list using help of states array
  WebHandler = () => {
    const messages = this.createChatBotMessage(`Cources for web development:`, {
      withAvatar: true,
      widget: "WebDevelopment",
    });

    this.addMessageToBotState(messages);
  };

  // display list using help of data array provided in widget
  SoftwareHandler = () => {
    const messages = this.createChatBotMessage(
      `Cources for software development`,
      { withAvatar: true, widget: "SoftwareDevelopment" }
    );
    this.addMessageToBotState(messages);
  };
  // display list using help of data array provided in widget
  AiHandler = () =>{
    const messages = this.createChatBotMessage(
      `Cources for Artificial Intelligence`,
      { withAvatar: true, widget: "AI" }
    );
    this.addMessageToBotState(messages);
  };
  // display list using help of data array provided in widget
  CyberSecurityHandler = () => {
    const messages = this.createChatBotMessage(
      `Cources for Cyber Security`,
      { withAvatar: true, widget: "CyberSecurity" }
    );
    this.addMessageToBotState(messages);
  };

  VirtualSystemHandler = () => {
    const messages = this.createChatBotMessage(
      `Cources for Virtual System`,
      { withAvatar: true, widget: "VirtualSystem" }
    );
    this.addMessageToBotState(messages);
  }
  // display list using help of data array provided in widget

  CloudComputingHandler = () => {
    const messages = this.createChatBotMessage(
      `Cources for Cloud Computing`,
      { withAvatar: true, widget: "CloudComputing" }
    );
    this.addMessageToBotState(messages);
  }

  TrendingSkillsHandler = () => {
    const messages = this.createChatBotMessage(
      `Cources for Trending Skills`,
      { withAvatar: true, widget: "TrendingSkills" }
    );
    this.addMessageToBotState(messages);
  }

  DegreeScopeHandler = () => {
    const messages = this.createChatBotMessage(
      `Cources for Degree Scope`,
      { withAvatar: true, widget: "DegreeScope" }
    );
    this.addMessageToBotState(messages);
  }

  BestRankedUniHandler = () => {
    const messages = this.createChatBotMessage(
      `Best Ranked Universities`,
      { withAvatar: true, widget: "BestRankedUni" }
    );
    this.addMessageToBotState(messages);
  }


  //default handler if you not found any mathes
  handleDefault = () => {
    const message = this.createChatBotMessage("How can I help?", {
      withAvatar: true,
      widget: "Tools",
    });
    this.addMessageToBotState(message);
  };
}

export default ActionProvider;

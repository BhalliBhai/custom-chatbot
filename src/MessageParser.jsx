class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse = (message) => {
    //convert message in lowercase wich passed by user
    const lowerCase = message.toLowerCase();

    //define your keyword in condition and return handler function whixh created in actionprovider

    if (
      lowerCase.includes("hi") ||
      lowerCase.includes("hii") ||
      lowerCase.includes("hiii") ||
      lowerCase.includes("hello") ||
      lowerCase.includes("hey") ||
      lowerCase.includes("hiiii") ||
      lowerCase.includes("..") ||
      lowerCase.includes("heyy")
    ) {
      return this.actionProvider.Greeting();
    }

    if (
      lowerCase.includes("feature") ||
      lowerCase.includes("what you provide") ||
      lowerCase.includes("are you there") ||
      lowerCase.includes("how") ||
      lowerCase.includes("what") ||
      lowerCase.includes("who") ||
      lowerCase.includes("option") ||
      lowerCase.includes("what is") ||
      lowerCase.includes("whats") ||
      lowerCase.includes("provide") ||
      lowerCase.includes("services") ||
      lowerCase.includes("tools") ||
      lowerCase.includes("tool") ||
      lowerCase.includes("about") ||
      lowerCase.includes("help") ||
      lowerCase.includes("help me") ||
      lowerCase.includes("methods")
    ) {
      return this.actionProvider.Tools();
    }

    if (
      lowerCase.includes("weather") ||
      lowerCase.includes("weather info") ||
      lowerCase.includes("weather information") ||
      lowerCase.includes("info about weather") ||
      lowerCase.includes("about weather") ||
      lowerCase.includes("weather of city") ||
      lowerCase.includes("information of weather") ||
      lowerCase.includes("mosam")
    ) {
      return this.actionProvider.WeatherInfoHandle();
    }

    if (
      lowerCase.includes("enroll") ||
      lowerCase.includes("rollment") ||
      lowerCase.includes("enrollmentno") ||
      lowerCase.includes("roll no") ||
      lowerCase.includes("roll") ||
      lowerCase.includes("roll number") ||
      lowerCase.includes("enrollment no") ||
      lowerCase.includes("enrollment number")
    ) {
      return this.actionProvider.EnrollmentNumber();
    }

    if (
      lowerCase.includes("web") ||
      lowerCase.includes("webdevelop") ||
      lowerCase.includes("website") ||
      lowerCase.includes("website development") ||
      lowerCase.includes("web app") ||
      lowerCase.includes("web application") ||
      lowerCase.includes("webdevelopment") ||
      lowerCase.includes("web development") ||
      lowerCase.includes("websites")
    ) {
      return this.actionProvider.WebHandler();
    }

    if (
      lowerCase.includes("android") ||
      lowerCase.includes("ios") ||
      lowerCase.includes("flutter") ||
      lowerCase.includes("software") ||
      lowerCase.includes("softwaredevelop") ||
      lowerCase.includes("software develop") ||
      lowerCase.includes("softwaresite development") ||
      lowerCase.includes("software app") ||
      lowerCase.includes("software application") ||
      lowerCase.includes("software development") ||
      lowerCase.includes("software development")
    ) {
      return this.actionProvider.SoftwareHandler();
    }
    if (
      lowerCase.includes("artificial intelligence") ||
      lowerCase.includes("ai") ||
      lowerCase.includes("machine learning") ||
      lowerCase.includes("deep learning") ||
      lowerCase.includes("natural language processing") ||
      lowerCase.includes("computer vision") ||
      lowerCase.includes("robotics") ||
      lowerCase.includes("ai applications") ||
      lowerCase.includes("ai algorithms") ||
      lowerCase.includes("ai research")
    ) {
      return this.actionProvider.AiHandler();
    }

    if (
      lowerCase.includes("cyber security") ||
      lowerCase.includes("cyber") ||
      lowerCase.includes("machine learning in cyber security") ||
      lowerCase.includes("threat detection") ||
      lowerCase.includes("security") ||
      lowerCase.includes("cyber security Automation") ||
      lowerCase.includes("intrusion detection") ||
      lowerCase.includes("vulnerability assessment") ||
      lowerCase.includes("threat intelligence") ||
      lowerCase.includes("behavioral analytics in cyber security")
    ) {
      return this.actionProvider.CyberSecurityHandler();
    }

    if (
      lowerCase.includes("virtual system") ||
      lowerCase.includes("virtualization") ||
      lowerCase.includes("install, configure, manage") ||
      lowerCase.includes("vmware") ||
      lowerCase.includes("vsphere") ||
      lowerCase.includes("system") ||
      lowerCase.includes("virtualization technologies") ||
      lowerCase.includes("virtual machine management") ||
      lowerCase.includes("virtual machine") ||
      lowerCase.includes("virtual networking") ||
      lowerCase.includes("vm")
    ) {
      return this.actionProvider.VirtualSystemHandler();
    }

    if (
      lowerCase.includes("containers") ||
      lowerCase.includes("kubernetes") ||
      lowerCase.includes("serverless computing") ||
      lowerCase.includes("computing") ||
      lowerCase.includes("computer") ||
      lowerCase.includes("google cloud") ||
      lowerCase.includes("aws") ||
      lowerCase.includes("azure") ||
      lowerCase.includes("microsoft azure") ||
      lowerCase.includes("gc") ||
      lowerCase.includes("gcp") ||
      lowerCase.includes("cloud")
    ) {
      return this.actionProvider.CloudComputingHandler();
    }

    if (
      lowerCase.includes("ml") ||
      lowerCase.includes("trending") ||
      lowerCase.includes("skill") ||
      lowerCase.includes("machine learning ") ||
      lowerCase.includes("data science") ||
      lowerCase.includes("data") ||
      lowerCase.includes("dsa") ||
      lowerCase.includes("devops") ||
      lowerCase.includes("iot") ||
      lowerCase.includes("blockchain ") ||
      lowerCase.includes("technology") ||
      lowerCase.includes("rpa") ||
      lowerCase.includes("robotic process automation ") ||
      lowerCase.includes("nlp") ||
      lowerCase.includes("natural language processing") ||
      lowerCase.includes("vr") ||
      lowerCase.includes("ar") ||
      lowerCase.includes("augmented reality") ||
      lowerCase.includes("virtual reality") ||
      lowerCase.includes("ux") ||
      lowerCase.includes("user experience") ||
      lowerCase.includes("design") ||
      lowerCase.includes("digital marketing")
    ) {
      return this.actionProvider.TrendingSkillsHandler();
    }
    
    if (
      lowerCase.includes("computer science") ||
      lowerCase.includes("degree") ||
      lowerCase.includes("data science") ||
      lowerCase.includes("business administration") ||
      lowerCase.includes("engineering") ||
      lowerCase.includes("medicine") ||
      lowerCase.includes("finance") ||
      lowerCase.includes("marketing") ||
      lowerCase.includes("environmental science") ||
      lowerCase.includes("nursing") ||
      lowerCase.includes("software engineering") ||
      lowerCase.includes("Mathematics") ||
      lowerCase.includes("graphic design") ||
      lowerCase.includes("communication studies") ||
      lowerCase.includes("data")
    ) {
      return this.actionProvider.DegreeScopeHandler();
    }

    if (
      lowerCase.includes("best") ||
      lowerCase.includes("ranked") ||
      lowerCase.includes("uni") ||
      lowerCase.includes("no 1") ||
      lowerCase.includes("umt") ||
      lowerCase.includes("university") ||
      lowerCase.includes("uni") ||
      lowerCase.includes("no") ||
      lowerCase.includes("1") ||
      lowerCase.includes("no. 1") ||
      lowerCase.includes("top") ||
      lowerCase.includes("pakistan") ||
      lowerCase.includes("pakistan uni")
    ) {
      return this.actionProvider.BestRankedUniHandler();
    }

    return this.actionProvider.handleDefault();
  };
}

export default MessageParser;

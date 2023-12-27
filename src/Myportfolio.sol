// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;
//smart contract add:0x186646088d842479f9AdF0fba6F03Feb4a78621f

contract protfolio {

    struct Project {
        uint id;
        string name;
        string description;
        string image;
        string githubLink;
    }


    struct Education {
        uint id;
        string date;
        string degree;
        string knowledgeAcquired;
        string institutionName;
    }

    struct Experience{
      uint id;
      string date;
      string post;
      string knowledgeAcquired;
      string compamyName;
  }

    Project[3] public projects;
    Education[3] public educationDetails;
    Experience[3] public experienceDetails;

    string public imageLink = "QmTgn6GCYhQk6yjm5xwtKBY2Z8oiVmkkt2DkPYD9sSUZrh";
    string public description = "just started but I am giving my 101 percent";
    string public resumeLink = "QmYr8idW2EHw8b2X3nF5UKj9RZRuZfrHY3b3HLx2xBPbMY";
    string public mailId = "rakhpasremar@gmail.com";
    uint public projectCount;
    uint public educationCount;
    uint public experienceCount;
    address public manager;

    constructor() {
        manager = msg.sender; // Store the address of the manager who deployed the smart contract
    }

    modifier onlyManager() {
        require(manager == msg.sender, "You are not the manager");
        _;
    }
        // me ne niche calldata ka use keya aahe kyuki vo memory se better gas optimise karta hai #SorryForEnglish
        // calldata sasta hota hai , or memeory mhengi hoti hai
    function insertProject(string calldata _name, string calldata _description, string calldata _image, string calldata _githubLink) external onlyManager {
        require(projectCount < 3, "Only 3 projects allowed");
        projects[projectCount] = Project(projectCount, _name, _description, _image, _githubLink);
        projectCount++;
    }

    function changeProject(string calldata _name, string calldata _description, string calldata _image, string calldata _githubLink, uint _projectCount) external onlyManager {
        require(_projectCount>=0 && _projectCount < 3, "Only 3 projects allowed To change");
        projects[_projectCount] = Project(_projectCount, _name, _description, _image, _githubLink);
    }
    function allProjects() external view returns(Project[3] memory){    
        return projects;
    }

    function EducationDetails(string calldata _date, string calldata _degree, string calldata _knowledgeAcquired, string calldata _institutionName) external onlyManager {
        require(educationCount < 3, "Only 3 Education Details allowed");
        educationDetails[educationCount] = Education(educationCount, _date, _degree, _knowledgeAcquired, _institutionName);
        educationCount++;
    }
    
    function changeEducationDetails(string calldata _date, string calldata _degree, string calldata _knowledgeAcquired, string calldata _institutionName, uint _educationDetailCount) external onlyManager {
        require(_educationDetailCount>=0 && _educationDetailCount < 3, "Only 3 Education Details allowed To change");
        educationDetails[_educationDetailCount] = Education(_educationDetailCount, _date, _degree, _knowledgeAcquired, _institutionName);
    }
    function allEducationDetails() external view returns(Education[3] memory){    
        return educationDetails;
    }

    function ExperienceDetails(string calldata _date, string calldata _post, string calldata _knowledgeAcquired, string calldata _compamyName) external onlyManager {
        require(experienceCount < 3, "Only 3 Experience Details allowed");
        experienceDetails[experienceCount] = Experience(experienceCount, _date, _post, _knowledgeAcquired, _compamyName);
        experienceCount++; 
    }

    function changeExperienceDetails(string calldata _date, string calldata _post, string calldata _knowledgeAcquired, string calldata _compamyName, uint _experienceDetailCount) external onlyManager {
        require(_experienceDetailCount>=0 && _experienceDetailCount < 3, "Only 3 Experience Details allowed To change");
        experienceDetails[_experienceDetailCount] = Experience(_experienceDetailCount, _date, _post, _knowledgeAcquired, _compamyName);
    }

    function allExperienceDetails() external view returns(Experience[3] memory){    
        return experienceDetails;
    }


        
    function ChangeDescription(string calldata _description) external onlyManager {
        description=_description;
    }
    function Changeresume(string calldata _resumeLink) external onlyManager {
        resumeLink=_resumeLink;
    }
    function ChangemailId(string calldata _mailId) external onlyManager {
        mailId=_mailId;
    }
     function Changeimage(string calldata _imageLink) external onlyManager {
        imageLink=_imageLink;
    }
   function donete() public  payable {
    payable (manager).transfer(msg.value);
   }
}
